import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createChatSession } from "@/app/services/geminiService";
import type { ChatHistoryItem, LeadData } from "@/lib/types";

export const runtime = "nodejs";

async function notifyLead(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured; lead captured but not emailed");
    return;
  }

  const resend = new Resend(apiKey);
  const interestLine = lead.interest ? `\nInterest: ${lead.interest}` : "";
  const companyLine = lead.company ? `\nCompany: ${lead.company}` : "";

  await resend.emails.send({
    from: "Nova AI Assistant <info@novationcloud.com>",
    to: "info@novationcloud.com",
    reply_to: lead.email,
    subject: `New chatbot lead: ${lead.name}`,
    text: `A visitor submitted their details through the Nova chatbot.\n\nName: ${lead.name}\nEmail: ${lead.email}${companyLine}${interestLine}`,
  });
}

function parseLeadData(args: unknown): LeadData | undefined {
  if (!args || typeof args !== "object") {
    return undefined;
  }

  const record = args as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";

  if (!name || !email) {
    return undefined;
  }

  return {
    name,
    email,
    company:
      typeof record.company === "string" ? record.company.trim() : undefined,
    interest:
      typeof record.interest === "string" ? record.interest.trim() : undefined,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history)
      ? (body.history as ChatHistoryItem[])
      : [];

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const chat = createChatSession(history);
    const response = await chat.sendMessage({ message });

    let leadData: LeadData | undefined;
    let text = response.text?.trim() ?? "";

    const leadCall = response.functionCalls?.find(
      (call) => call.name === "saveCustomerLead"
    );

    if (leadCall) {
      leadData = parseLeadData(leadCall.args);
      if (leadData) {
        try {
          await notifyLead(leadData);
        } catch (err) {
          console.error("Failed to email chatbot lead", err);
        }

        const followUpResponse = await chat.sendMessage({
          message:
            "System: The saveCustomerLead function was executed successfully. Please thank the user and confirm their information was saved.",
        });

        text =
          followUpResponse.text?.trim() ||
          `Thank you, ${leadData.name.split(" ")[0]}! Our team will contact you shortly at ${leadData.email}.`;
      }
    }

    if (!text) {
      text = "I'm sorry, I couldn't generate a response. Please try again.";
    }

    return NextResponse.json({ text, leadData });
  } catch (err) {
    console.error("Chat API error", err);

    const errorMessage =
      err instanceof Error ? err.message : "Failed to process chat message";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

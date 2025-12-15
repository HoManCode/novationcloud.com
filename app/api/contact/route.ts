export const runtime = "edge";

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sendResult = await resend.emails.send({
      from: `${name} via NovationCloud <info@novationcloud.com>`,
      to: "info@novationcloud.com",
      reply_to: email,
      subject: `New contact from ${name}${company ? ` at ${company}` : ""}`,
      text: message,
    });

    console.log("Resend sendResult", sendResult);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error", err);

    const message =
      err instanceof Error
        ? err.message
        : typeof err === "string"
        ? err
        : "Failed to send";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

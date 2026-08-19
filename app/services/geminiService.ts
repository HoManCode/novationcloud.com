import { GoogleGenAI, Type, Chat, Content } from "@google/genai";
import type { ChatHistoryItem } from "@/lib/types";

const SYSTEM_INSTRUCTION = `
You are Nova, the official AI assistant for Novation Cloud (https://novationcloud.com/).
Novation Cloud is a premier technology consulting firm specializing in:
- Cloud Migration & Infrastructure (AWS, Azure, GCP)
- DevOps Automation & CI/CD
- Custom Web and Mobile Application Development
- Data Analytics and AI/ML Integration
- Managed IT Services

Your personality is professional, helpful, concise, and tech-savvy.

Your primary goals:
1. Answer user questions about Novation Cloud's services accurately based on the specialties listed above.
2. **LEAD GENERATION (CRITICAL):** If a user expresses interest in starting a project, asks for pricing, wants a consultation, or seems like a potential client, you MUST politely ask for their Name and Email address so a human sales representative can follow up.
3. Once the user provides their Name and Email, you MUST call the 'saveCustomerLead' function to save their information.
4. Do not invent specific pricing. Always direct them to provide contact info for a custom quote.

Example interaction for lead gen:
User: How much does a cloud migration cost?
Nova: The cost of a cloud migration varies greatly depending on the size and complexity of your current infrastructure. To give you an accurate estimate, I'd love to have one of our cloud architects reach out. Could I please get your name and email address?
User: Sure, I'm John Doe, john@example.com.
Nova: [Calls saveCustomerLead function] Thank you, John! I've saved your information. Our team will contact you shortly at john@example.com.
`;

const tools = [
  {
    functionDeclarations: [
      {
        name: "saveCustomerLead",
        description:
          "Saves customer contact information for a sales representative to follow up. Call this ONLY when the user has explicitly provided their name and email.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Full name of the customer" },
            email: {
              type: Type.STRING,
              description: "Email address of the customer",
            },
            company: {
              type: Type.STRING,
              description: "Company name, if provided",
            },
            interest: {
              type: Type.STRING,
              description: "Brief summary of what services they are interested in",
            },
          },
          required: ["name", "email"],
        },
      },
    ],
  },
];

function toGeminiHistory(history: ChatHistoryItem[]): Content[] {
  return history.map((message) => ({
    role: message.role,
    parts: [{ text: message.text }],
  }));
}

export const createChatSession = (history: ChatHistoryItem[] = []): Chat => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const ai = new GoogleGenAI({ apiKey });
  return ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools,
      temperature: 0.7,
    },
    history: toGeminiHistory(history),
  });
};

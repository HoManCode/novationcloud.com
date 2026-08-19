export interface LeadData {
  name: string;
  email: string;
  company?: string;
  interest?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model" | "system";
  text: string;
  isLeadCard?: boolean;
  leadData?: LeadData;
}

export type ChatHistoryItem = {
  role: "user" | "model";
  text: string;
};

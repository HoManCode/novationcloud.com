"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  User,
  Bot,
  CheckCircle,
  Loader2,
} from "lucide-react";
import type { ChatHistoryItem, ChatMessage, LeadData } from "@/lib/types";

const generateId = () => Math.random().toString(36).substring(2, 9);

const WELCOME_MESSAGE =
  "Hi there! I'm Nova, the AI assistant for Novation Cloud. How can I help you transform your business today?";

function toHistory(messages: ChatMessage[]): ChatHistoryItem[] {
  return messages
    .filter((message) => message.role === "user" || message.role === "model")
    .map((message) => ({
      role: message.role as "user" | "model",
      text: message.text,
    }));
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !initialized) {
      setInitialized(true);
      setMessages([
        {
          id: generateId(),
          role: "model",
          text: WELCOME_MESSAGE,
        },
      ]);
    }
  }, [isOpen, initialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue("");

    const newUserMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: toHistory(messages),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Failed to send message"
        );
      }

      const modelText = typeof data.text === "string" ? data.text : "";
      const capturedData = data.leadData as LeadData | undefined;

      if (modelText) {
        setMessages((prev) => [
          ...prev,
          { id: generateId(), role: "model", text: modelText },
        ]);
      }

      if (capturedData) {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "system",
            text: "Lead Captured",
            isLeadCard: true,
            leadData: capturedData,
          },
        ]);
      }
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "model",
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end text-white">
      {isOpen && (
        <div className="mb-4 flex h-[min(500px,80vh)] w-[min(24rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#05060A] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Nova</h3>
                <p className="text-xs text-gray-400">Novation Cloud Assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto bg-[#05060A] p-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.isLeadCard && msg.leadData ? (
                    <div className="w-full rounded-xl border border-green-500/30 bg-green-950/30 p-4">
                      <div className="mb-2 flex items-center gap-2 text-green-300">
                        <CheckCircle size={18} />
                        <span className="text-sm font-semibold">Information Saved</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-200">
                        <p>
                          <span className="font-medium text-white">Name:</span>{" "}
                          {msg.leadData.name}
                        </p>
                        <p>
                          <span className="font-medium text-white">Email:</span>{" "}
                          {msg.leadData.email}
                        </p>
                        {msg.leadData.company && (
                          <p>
                            <span className="font-medium text-white">Company:</span>{" "}
                            {msg.leadData.company}
                          </p>
                        )}
                      </div>
                      <p className="mt-3 text-xs italic text-gray-400">
                        Our sales team will be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`flex max-w-[85%] gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div
                        className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                          msg.role === "user"
                            ? "bg-blue-600/20 text-blue-300"
                            : "bg-white/10 text-gray-300"
                        }`}
                      >
                        {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div
                        className={`rounded-2xl px-3 py-2 text-sm leading-6 ${
                          msg.role === "user"
                            ? "rounded-tr-none bg-blue-600 text-white"
                            : "rounded-tl-none border border-white/10 bg-slate-900 text-gray-100"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] gap-2">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-gray-300">
                      <Bot size={14} />
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl rounded-tl-none border border-white/10 bg-slate-900 px-3 py-2 text-sm text-gray-400">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-xs">Nova is typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-900 p-3">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="w-full rounded-full border border-white/10 bg-[#05060A] py-3 pl-4 pr-12 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 disabled:opacity-60"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-500"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105 active:scale-95 ${
          isOpen
            ? "border border-white/10 bg-slate-900 text-white"
            : "bg-blue-600 text-white hover:bg-blue-500"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;

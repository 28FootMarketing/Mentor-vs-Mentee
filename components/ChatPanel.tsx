"use client";

import { useState } from "react";
import type { Agent } from "@/lib/agents";
import { getResponse } from "@/lib/chat-engine";

type Message = {
  id: number;
  role: "agent" | "user";
  text: string;
};

export function ChatPanel({ agent }: { agent: Agent }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "agent", text: agent.greeting },
  ]);
  const [draft, setDraft] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: messages.length,
      role: "user",
      text: trimmed,
    };
    const reply: Message = {
      id: messages.length + 1,
      role: "agent",
      text: getResponse(agent, trimmed),
    };

    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, reply]);
      setIsThinking(false);
    }, 500);
  }

  return (
    <div className="rounded-cards border border-fog bg-midnight-ink p-20">
      <p className="mb-15 font-mono text-micro uppercase tracking-[0.08em] text-fog">
        Live Conversation
      </p>

      <div className="mb-20 flex max-h-[420px] flex-col gap-15 overflow-y-auto pr-10">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "agent"
                ? "max-w-[85%] rounded-cards border border-signal-blue bg-transparent px-16 py-10 font-body text-caption text-paper"
                : "ml-auto max-w-[85%] rounded-cards bg-signal-blue px-16 py-10 font-body text-caption text-paper"
            }
          >
            {message.text}
          </div>
        ))}
        {isThinking && (
          <div className="max-w-[85%] rounded-cards border border-fog px-16 py-10 font-mono text-micro uppercase tracking-[0.08em] text-fog">
            {agent.name} is typing…
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-10">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={`Message ${agent.name}…`}
          className="flex-1 rounded-buttons border border-silver-border border-opacity-30 bg-transparent px-16 py-10 font-body text-body-sm text-paper placeholder:text-mist focus:border-arc-cyan focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-buttons bg-signal-blue px-20 py-10 font-label text-[14px] text-paper transition-opacity hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
}

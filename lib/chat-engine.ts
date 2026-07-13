import type { Agent } from "./agents";

export function getResponse(agent: Agent, userMessage: string): string {
  const normalized = userMessage.toLowerCase();
  const match = agent.rules.find((rule) =>
    rule.triggers.some((trigger) => normalized.includes(trigger))
  );
  return match ? match.response : agent.fallback;
}

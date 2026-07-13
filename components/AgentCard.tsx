import Link from "next/link";
import type { Agent } from "@/lib/agents";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agent/${agent.slug}`}
      className="group block rounded-cards border border-fog bg-midnight-ink p-20 transition-colors hover:border-arc-cyan"
    >
      <div className="mb-15 flex items-center gap-10">
        <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-arc-cyan" />
        <span className="font-mono text-micro uppercase tracking-[0.08em] text-fog">
          {agent.eventLabel}
        </span>
      </div>

      <h3 className="mb-10 font-display text-subheading font-light text-paper">
        {agent.name}
      </h3>

      <span className="mb-15 inline-block rounded-tags border border-signal-blue px-[8px] py-[4px] font-mono text-micro uppercase tracking-[0.08em] text-arc-cyan">
        {agent.acronym}
      </span>

      <p className="mb-15 font-mono text-[13px] leading-[1.5] text-halo-violet">
        {agent.meaning}
      </p>

      <p className="mb-0 font-body text-caption leading-[1.54] text-paper">
        {agent.role}
      </p>

      <span className="mt-15 inline-block font-label text-[13px] uppercase tracking-[0.05em] text-fog transition-colors group-hover:text-paper">
        Talk to {agent.name} →
      </span>
    </Link>
  );
}

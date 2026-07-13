import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { ChatPanel } from "@/components/ChatPanel";
import { StatusPill } from "@/components/StatusPill";
import { agents, getAgent } from "@/lib/agents";

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export default function AgentPage({ params }: { params: { slug: string } }) {
  const agent = getAgent(params.slug);
  if (!agent) notFound();

  return (
    <main className="mx-auto max-w-page px-24 pb-100">
      <NavBar />

      <Link
        href="/"
        className="mb-40 inline-block font-label text-[13px] uppercase tracking-[0.05em] text-fog hover:text-paper"
      >
        ← All agents
      </Link>

      <div className="grid grid-cols-1 gap-40 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-15 flex items-center gap-10">
            <span className="font-mono text-micro uppercase tracking-[0.08em] text-fog">
              {agent.eventLabel}
            </span>
            <StatusPill label="Online" />
          </div>

          <h1 className="mb-16 font-display text-heading font-light text-paper">
            {agent.name}
          </h1>
          <p className="mb-20 font-label text-[16px] uppercase tracking-[0.05em] text-arc-cyan">
            {agent.title}
          </p>

          <span className="mb-15 inline-block rounded-tags border border-signal-blue px-[8px] py-[4px] font-mono text-micro uppercase tracking-[0.08em] text-arc-cyan">
            {agent.acronym}
          </span>

          <p className="mb-20 font-mono text-[13px] leading-[1.5] text-halo-violet">
            {agent.meaning}
          </p>

          <p className="font-body text-body leading-[1.57] text-paper">
            {agent.role}
          </p>
        </div>

        <ChatPanel agent={agent} />
      </div>
    </main>
  );
}

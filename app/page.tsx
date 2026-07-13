import { NavBar } from "@/components/NavBar";
import { AgentCard } from "@/components/AgentCard";
import { ParticleSphere } from "@/components/ParticleSphere";
import { agents } from "@/lib/agents";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-page px-24 pb-100">
      <NavBar />

      <section className="relative overflow-hidden rounded-cards py-100 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, #06105a 0%, #00052e 65%)",
          }}
        />
        <ParticleSphere />
        <div className="relative">
          <p className="mb-16 font-label text-[14px] uppercase tracking-[0.05em] text-arc-cyan">
            Facilitate The Process
          </p>
          <h1 className="mx-auto mb-20 max-w-[720px] font-display text-heading-lg font-light text-paper">
            Mentor vs. Mentee Agent Suite
          </h1>
          <p className="mx-auto max-w-[640px] font-body text-body text-fog">
            An interactive learning experience with five AI agents, each designed
            to support a different part of your mentorship journey — from
            onboarding to triage support.
          </p>
        </div>
      </section>

      <p className="mb-24 mt-80 font-mono text-micro uppercase tracking-[0.08em] text-fog">
        Event Summary — Your Agents
      </p>

      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.slug} agent={agent} />
        ))}
      </div>

      <div className="mt-80 rounded-cards border border-signal-blue p-20 text-center font-body text-body-sm text-halo-violet">
        Each agent is here to support your growth. Ready to begin? Let Marcus
        guide your first step.
      </div>
    </main>
  );
}

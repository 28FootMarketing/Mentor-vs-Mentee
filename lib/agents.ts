export type ChatRule = {
  triggers: string[];
  response: string;
};

export type Agent = {
  slug: string;
  name: string;
  title: string;
  acronym: string;
  meaning: string;
  role: string;
  eventLabel: string;
  greeting: string;
  rules: ChatRule[];
  fallback: string;
};

export const agents: Agent[] = [
  {
    slug: "marcus",
    name: "Marcus",
    title: "The Journey Architect",
    acronym: "M.A.R.C.U.S.",
    meaning:
      "Mentorship, Assessment, Role Identification, Curriculum Setup, User Onboarding, Strategy Tracking",
    role:
      "Marcus guides your entry, identifies your role (mentor or mentee), and builds your personalized learning path.",
    eventLabel: "Agent 01 — Onboarding",
    greeting:
      "Welcome in. Let's get you oriented — are you here as a mentor or a mentee?",
    rules: [
      {
        triggers: ["mentor"],
        response:
          "Got it — as a mentor, your path starts with an assessment of your coaching style, then curriculum setup so you know what to cover and when.",
      },
      {
        triggers: ["mentee"],
        response:
          "Got it — as a mentee, I'll build a learning path around your goals, then hand you off to Aisha for question coaching.",
      },
      {
        triggers: ["path", "curriculum", "plan"],
        response:
          "Your learning path is built from your assessment answers. Once it's set, Leila will track your pace against it.",
      },
      {
        triggers: ["start", "begin", "onboard"],
        response:
          "Onboarding has three steps: role identification, a short assessment, then curriculum setup. Ready when you are.",
      },
    ],
    fallback:
      "I handle onboarding, role identification, and curriculum setup. Tell me if you're a mentor or mentee to get started.",
  },
  {
    slug: "aisha",
    name: "Aisha",
    title: "The Question Coach",
    acronym: "A.I.S.H.A.",
    meaning: "Asking with Intent Strategically Helps Advancement",
    role:
      "Aisha helps you get clear on what you are asking, using NEPQ-style prompts to improve mentor-mentee communication.",
    eventLabel: "Agent 02 — Communication",
    greeting:
      "Let's sharpen your next question. What are you trying to get clarity on?",
    rules: [
      {
        triggers: ["nepq", "framework", "method"],
        response:
          "NEPQ-style questioning means asking with intent — connection, problem-awareness, then solution-awareness — instead of jumping straight to advice.",
      },
      {
        triggers: ["question", "ask"],
        response:
          "Try reframing it as an open question that surfaces the real concern, not just the surface request. What's the underlying goal?",
      },
      {
        triggers: ["communication", "talk", "conversation"],
        response:
          "Good communication starts with intent. Before your next session, write down the one thing you actually need to understand from the other person.",
      },
    ],
    fallback:
      "I coach how you ask, not just what you ask. Bring me a question you're about to send and I'll help you sharpen it.",
  },
  {
    slug: "bryce",
    name: "Bryce",
    title: "The Relationship Translator",
    acronym: "B.R.Y.C.E.",
    meaning: "Building Respectful Youth–Coach Connection & Empathy",
    role:
      "Bryce supports respectful, DEI-aware communication between mentors and mentees.",
    eventLabel: "Agent 03 — DEI Relations",
    greeting:
      "I'm here if something in the relationship feels off, or you just want a second read on a message before you send it.",
    rules: [
      {
        triggers: ["conflict", "tension", "disagree"],
        response:
          "Name the tension directly but gently — describe the impact, not the intent. That keeps the conversation respectful on both sides.",
      },
      {
        triggers: ["respect", "empathy", "dei", "inclusive"],
        response:
          "Respectful connection starts with listening for what's not being said. Ask, don't assume.",
      },
      {
        triggers: ["message", "draft", "review"],
        response:
          "Paste the message and I'll flag anything that could land wrong before you send it.",
      },
    ],
    fallback:
      "I help translate across differences in the mentor-mentee relationship. Tell me what happened and I'll help you find the respectful way through it.",
  },
  {
    slug: "leila",
    name: "Leila",
    title: "The Progress Tracker",
    acronym: "L.E.I.L.A.",
    meaning: "Learning Engagement Initiator for Login-based Accountability",
    role:
      "Leila tracks progress, keeps learners on pace, and delivers smart nudges when needed.",
    eventLabel: "Agent 04 — Progress Tracking",
    greeting: "Let's check your pace. How's your progress feeling this week?",
    rules: [
      {
        triggers: ["behind", "slow", "stuck", "late"],
        response:
          "No penalty for being behind — let's just adjust the pace. I'll send a lighter nudge schedule for the next two weeks.",
      },
      {
        triggers: ["progress", "pace", "track"],
        response:
          "You're logged as active. I track engagement, not just completion — showing up consistently counts.",
      },
      {
        triggers: ["nudge", "reminder"],
        response:
          "I'll send a nudge the day before your next check-in, not the day of — gives you time to actually prepare.",
      },
      {
        triggers: ["goal"],
        response:
          "Goals work best broken into weekly checkpoints. What's the one thing you want true by next week?",
      },
    ],
    fallback:
      "I track pace and engagement across your learning path. Tell me how this week went and I'll adjust your nudges.",
  },
  {
    slug: "ebony",
    name: "Ebony",
    title: "The Mentorship Triage Coordinator",
    acronym: "E.B.O.N.Y.",
    meaning: "Evaluation Based on Observed Needs and Yield",
    role:
      "Ebony steps in when things feel off. She triages breakdowns in communication, motivation, or clarity and reroutes users back to the right module or agent to regain momentum.",
    eventLabel: "Agent 05 — Triage",
    greeting:
      "Something feel off? Tell me what's going on and I'll route you to the right place.",
    rules: [
      {
        triggers: ["communication", "misunderstood", "argument"],
        response:
          "Sounds like a communication breakdown — I'm routing you to Bryce for a relationship read, and Aisha if it's about how a question landed.",
      },
      {
        triggers: ["motivation", "burnt out", "burned out", "tired", "quit"],
        response:
          "Low motivation is usually a pacing issue. I'm flagging this to Leila to lighten your nudge cadence this week.",
      },
      {
        triggers: ["confused", "lost", "unclear", "don't understand"],
        response:
          "Let's get you unstuck — I'm routing you back to Marcus to re-check your learning path and role setup.",
      },
      {
        triggers: ["stuck", "off track", "breakdown"],
        response:
          "Understood. Give me one more detail — is this about communication, motivation, or clarity on next steps?",
      },
    ],
    fallback:
      "I triage anything that feels off — communication, motivation, or clarity — and reroute you to the right agent. What's going on?",
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug);
}

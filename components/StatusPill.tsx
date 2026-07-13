const TONES = {
  online: "bg-[#0f2e1f] text-[#3ddc84]",
  neutral: "bg-[#22243a] text-mist",
} as const;

export function StatusPill({
  label,
  tone = "online",
}: {
  label: string;
  tone?: keyof typeof TONES;
}) {
  return (
    <span
      className={`inline-block rounded-tags px-[8px] py-[4px] font-mono text-micro uppercase tracking-[0.08em] ${TONES[tone]}`}
    >
      {label}
    </span>
  );
}

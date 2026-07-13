import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex items-center justify-between py-20">
      <Link href="/" className="font-display font-light text-[20px] tracking-[-0.01em] text-paper">
        Mentor vs. Mentee
      </Link>
      <nav className="flex items-center gap-20">
        <span className="hidden font-label text-[13px] uppercase tracking-[0.05em] text-fog sm:inline">
          Facilitate The Process
        </span>
        <Link
          href="/agent/marcus"
          className="rounded-buttons bg-signal-blue px-20 py-10 font-label text-[14px] text-paper transition-opacity hover:opacity-90"
        >
          Begin Your Journey
        </Link>
      </nav>
    </header>
  );
}

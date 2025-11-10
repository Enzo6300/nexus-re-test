import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <span className="inline-block h-6 w-6 rounded-md bg-[var(--brand)]" />
      <span className="text-base font-semibold tracking-tight">NexusAI Labs</span>
    </Link>
  );
}



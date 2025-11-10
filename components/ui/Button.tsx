"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost" | "nav";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const base =
  "relative inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/70";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand)] text-black font-semibold shadow-[0_8px_30px_-8px_rgba(59,130,246,0.45)] hover:shadow-[0_18px_50px_-12px_rgba(59,130,246,0.65)] hover:bg-[#4a9eff] transition-all duration-200 relative overflow-hidden",
  outline:
    "border border-white/15 bg-white/0 text-foreground hover:bg-white/[0.06] hover:border-white/25",
  ghost: "bg-transparent text-foreground/90 hover:text-foreground hover:bg-white/[0.04]",
  nav: "border border-white/15 bg-white/10 backdrop-blur-sm text-white/90 hover:border-white/35 hover:bg-white/15 hover:text-white shadow-[0_14px_35px_-18px_rgba(59,130,246,0.8)]",
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);
  const content = (
    <motion.span
      initial={false}
      whileHover={variant === "primary" ? { y: -1, scale: 1.02 } : { y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className="inline-flex items-center gap-2 relative z-10"
    >
      {children}
    </motion.span>
  );

  const glow =
    "pointer-events-none absolute inset-0 rounded-md opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100";
  
  const shine =
    variant === "primary"
      ? "pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
      : "";

  const inner = (
    <>
      {variant === "primary" && (
        <>
          <span className={glow} style={{ boxShadow: "0 0 60px 12px rgba(59,130,246,0.5)" }} />
          <span className={shine} style={{ transition: "transform 0.6s ease-in-out" }} />
        </>
      )}
      {variant !== "primary" && (
        <span className={glow} style={{ boxShadow: "0 0 40px 8px rgba(59,130,246,0.35)" }} />
      )}
      {content}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("group", classes)}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={clsx("group", classes)} type={type} disabled={disabled}>
      {inner}
    </button>
  );
}



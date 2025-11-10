import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

const nav = [
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-6 text-sm text-foreground/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--brand)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/user" variant="primary" className="rounded-full px-5 py-2.5">
            Espace utilisateur
          </Button>
        </div>
      </div>
    </header>
  );
}



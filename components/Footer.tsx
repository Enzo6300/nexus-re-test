import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">NexusAI Labs</div>
            <p className="mt-2 text-sm text-foreground/70">
              Secure Intelligence for a Connected World.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium">Entreprise</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><Link href="/about" className="hover:text-foreground">À propos</Link></li>
              <li><Link href="/careers" className="hover:text-foreground">Carrières</Link></li>
              <li><Link href="/legal" className="hover:text-foreground">Mentions légales</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Ressources</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/projects" className="hover:text-foreground">Projets</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-foreground/60">
          © {new Date().getFullYear()} NexusAI Labs. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}



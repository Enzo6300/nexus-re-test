"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { PenSquare, Sparkles, ShieldCheck } from "lucide-react";

const featured = {
  slug: "securite-llm-guardrails",
  title: "Sécuriser les LLM : guardrails intelligents & monitoring continu",
  excerpt:
    "Du filtrage sémantique aux politiques adaptatives, découvrez notre framework de défense pour agents IA et chatbots en production.",
  readingTime: "8 min",
  category: "LLM Security",
  date: "Oct 2025",
};

const posts = [
  {
    slug: "threat-intelligence-ia",
    title: "Threat Intelligence augmentée par IA",
    excerpt:
      "Comment nous exploitons graphes de menaces, RAG vectoriel et modèles génératifs pour décupler les capacités des SOC.",
    readingTime: "6 min",
    category: "Threat Intel",
    date: "Sep 2025",
  },
  {
    slug: "mlops-securises",
    title: "MLOps sécurisés en production",
    excerpt:
      "Les contrôles indispensables pour déployer vos modèles en environnement régulé : chiffrement, accès, versioning.",
    readingTime: "7 min",
    category: "MLOps",
    date: "Août 2025",
  },
  {
    slug: "gouvernance-ia-regulations",
    title: "Gouvernance IA & réglementations européennes",
    excerpt:
      "NIS2, DORA, AI Act : checklist opérationnelle pour aligner vos initiatives IA avec les nouvelles obligations.",
    readingTime: "5 min",
    category: "Compliance",
    date: "Juil 2025",
  },
];

const categories = ["Threat Intel", "LLM Security", "MLOps", "Compliance"];

export default function BlogPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute top-40 left-[15%] h-64 w-64 rounded-full bg-[var(--brand)]/12 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              NexusAI Insights
            </span>
            <h1 className="mt-6 text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
              Blog & ressources
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-foreground/75 md:text-base">
              Retours d’expérience, frameworks et analyses stratégiques pour bâtir des plateformes IA
              robustes. Signés par nos chercheurs, ingénieurs et CISO.
            </p>
          </div>
          <Button href="/contact" variant="outline">
            Proposer un sujet
          </Button>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-20px_rgba(15,23,42,0.65)] md:grid-cols-[1.3fr_1fr] md:p-12"
        >
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
              <Sparkles size={18} className="text-[var(--brand)]" />
              <span>{featured.category}</span>
              <span className="text-foreground/40">{featured.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white/90">{featured.title}</h2>
            <p className="mt-3 text-sm text-foreground/70">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/50">
              <span>{featured.readingTime}</span>
              <span className="h-[1px] w-6 bg-foreground/30" />
              <span>Frameworks • Playbooks • Retours terrain</span>
            </div>
            <Button href={`/blog/${featured.slug}`} className="mt-6" variant="primary">
              Lire l’article
            </Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
              <ShieldCheck size={18} className="text-[var(--brand)]" />
              <span>Dans cet article</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li>• Benchmark des guardrails (OpenAI, Anthropic, LlamaGuard)</li>
              <li>• Méthodologie de scoring des prompts à risque</li>
              <li>• Architecture de supervision en production</li>
            </ul>
          </div>
        </motion.article>

        <div className="mt-12 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-foreground/65"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + idx * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/60">
                <span>{p.category}</span>
                <span>{p.date}</span>
              </div>
              <Link href={`/blog/${p.slug}`} className="mt-3 block">
                <div className="text-lg font-semibold text-white/90">{p.title}</div>
                <p className="mt-2 text-sm text-foreground/70">{p.excerpt}</p>
              </Link>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--brand)] transition hover:gap-3"
              >
                Lire
                <PenSquare size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-black/25 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:grid-cols-[1fr_0.9fr]"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Newsletter NexusAI
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white/90">
              Recevez nos décryptages toutes les deux semaines
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Synthèses réglementaires, modèles d’alerting, templates de playbooks : du contenu
              actionnable directement dans votre boîte mail.
            </p>
          </div>
          <form className="flex flex-col gap-3 md:flex-row md:items-end">
            <input
              type="email"
              placeholder="votre.email@entreprise.com"
              className="flex-1 rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/60"
            />
            <Button type="submit" className="whitespace-nowrap px-6">
              S’abonner
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}


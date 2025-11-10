"use client";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Éditeur",
    content: [
      "NexusAI Labs (structure fictive pour portfolio)",
      "10 Rue de l’Innovation, 75010 Paris",
      "contact@nexusai.example.com",
    ],
  },
  {
    title: "Hébergement",
    content: ["Vercel Inc.", "340 S Lemon Ave #4133, Walnut, CA 91789, USA", "https://vercel.com"],
  },
  {
    title: "Données personnelles",
    content: [
      "Les informations collectées via le formulaire de contact servent uniquement à répondre aux demandes.",
      "Aucune donnée n’est vendue ni partagée.",
      "Pour toute demande de suppression : contact@nexusai.example.com.",
    ],
  },
];

export default function LegalPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-24px_rgba(15,23,42,0.65)]"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">Mentions légales</div>
          <h1 className="mt-4 text-3xl font-semibold font-display text-white/90 md:text-4xl">
            Informations légales & confidentialité
          </h1>
          <p className="mt-3 text-sm text-foreground/70">
            Ce site est un projet portfolio demontrant les compétences de développement full-stack,
            branding et intégration UX/UI. NexusAI Labs est une entreprise fictive.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
                {section.title}
              </div>
              <ul className="mt-3 space-y-1">
                {section.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-black/20 via-[var(--brand)]/10 to-transparent p-6 text-sm text-foreground/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_55px_-24px_rgba(15,23,42,0.65)]"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Propriété intellectuelle
          </div>
          <p className="mt-2">
            Le contenu de ce site (textes, visuels, composants UI) est publié à des fins de
            démonstration. Toute reproduction est autorisée en citant la source.
          </p>
        </motion.div>
      </div>
    </div>
  );
}


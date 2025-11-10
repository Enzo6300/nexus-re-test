"use client";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { Building2, ShieldHalf, Cpu } from "lucide-react";

const projects = [
  {
    name: "Sentinel360",
    desc: "Plateforme de détection d’anomalies en temps réel sur flux SIEM, boostée par LLM.",
    impact: "Réduction de 62% du temps moyen de détection (MTTD).",
    sector: "Finance",
  },
  {
    name: "GuardRails",
    desc: "Framework de sécurité pour agents IA (policies, filtres, évaluation continue).",
    impact: "Blocage de 98% des tentatives de jailbreak sur assistants internes.",
    sector: "Assurance",
  },
  {
    name: "DataShield",
    desc: "Chiffrement bout‑à‑bout et gouvernance fine des datasets pour l’entraînement.",
    impact: "Conformité RGPD & NIS2 assurée pour +35 pipelines data.",
    sector: "Logistique",
  },
];

const caseStudies = [
  {
    company: "HeliosBank",
    results: ["SOC augmenté par Sentinel360", "Playbooks de réponse automatisés", "Audit conformité DORA"],
  },
  {
    company: "Orbital Freight",
    results: ["Infra MLOps zero-trust", "Chiffrement attributaire des données", "Monitoring drift & anomalies"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--brand)] to-white/80 md:text-4xl">
              Projets & Réalisations
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-foreground/75 md:text-base">
              Une sélection de plateformes livrées et opérées par les équipes NexusAI Labs. Chaque
              projet combine expertise technique, gouvernance et accompagnement terrain.
            </p>
          </div>
          <Button href="/contact" variant="outline">
            Discuter d’un projet
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_45px_-20px_rgba(15,23,42,0.6)] transition hover:border-white/20"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/60">
                <span>{p.sector}</span>
                <span>Case study</span>
              </div>
              <div className="mt-3 text-lg font-semibold text-white/90">{p.name}</div>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
              <div className="mt-4 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-xs text-foreground/65">
                <span className="font-medium text-white/80">Impact :</span> {p.impact}
              </div>
              <span className="pointer-events-none mt-4 block h-px w-full bg-gradient-to-r from-transparent via-[var(--brand)]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_55px_-22px_rgba(15,23,42,0.65)]"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
              <ShieldHalf size={18} className="text-[var(--brand)]" />
              <span>Approche intégrée</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white/90">
              Sécuriser l’IA à grande échelle
            </h2>
            <p className="mt-3 text-sm text-foreground/70">
              Nos équipes cross-disciplinaires conçoivent des solutions calibrées pour vos enjeux
              métiers. Nous collaborons avec vos squads produit, sécurité et data pour orchestrer des
              environnements fiables.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-foreground/65 sm:grid-cols-2">
              <li className="rounded-xl border border-white/10 bg-black/25 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">01</div>
                <div className="mt-1 font-medium text-white/90">Threat modeling & posture review</div>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/25 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">02</div>
                <div className="mt-1 font-medium text-white/90">Déploiements orchestrés & audités</div>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/25 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">03</div>
                <div className="mt-1 font-medium text-white/90">Observabilité & reporting continue</div>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/25 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">04</div>
                <div className="mt-1 font-medium text-white/90">Runbooks & transfert de compétences</div>
              </li>
            </ul>
          </motion.div>

          <div className="grid gap-6">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.company}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                  <Building2 size={18} className="text-[var(--brand)]" />
                  <span>{caseStudy.company}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                  {caseStudy.results.map((result) => (
                    <li key={result}>• {result}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/12 to-transparent p-6 text-sm text-foreground/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_55px_-24px_rgba(15,23,42,0.65)]"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <Cpu size={18} className="text-[var(--brand)]" />
                <span>Stack</span>
              </div>
              <p className="mt-3">
                Kubernetes · Snowflake · Databricks · LangChain · LlamaGuard · Azure OpenAI · Vault ·
                Temporal · Panther · CrowdStrike · Terraform
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


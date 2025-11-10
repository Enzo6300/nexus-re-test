NexusAI Labs — Site vitrine type startup tech (IA & cybersécurité) construit avec Next.js + TypeScript + TailwindCSS, Framer Motion et authentification Supabase. Production‑ready et prêt à déployer sur Vercel.

## Stack

- Next.js App Router, TypeScript, Tailwind v4
- Framer Motion (animations légères)
- next-themes (mode sombre/clair)
- Supabase Auth (email/password)
- API contact via Resend (optionnel)

## Configuration

Créer un fichier `.env.local` à la racine avec :

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
```

Pour Supabase, créer un projet puis récupérer l’URL et la clé anonyme dans Project Settings → API. L’auth email/password doit être activée.

## Démarrage

Installer les dépendances et lancer le serveur :

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Déploiement

### Sur Vercel

1. **Connecter le repository GitHub** :
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "Add New Project"
   - Importer votre repository GitHub
   - Vercel détectera automatiquement Next.js

2. **Configurer les variables d'environnement** :
   Dans Project Settings → Environment Variables, ajouter :
   - `NEXT_PUBLIC_SUPABASE_URL` = votre URL Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = votre clé anonyme Supabase
   - `RESEND_API_KEY` (optionnel, pour emails du formulaire de contact)

3. **Déployer** :
   - Cliquer sur "Deploy"
   - Vercel déploiera automatiquement à chaque push sur la branche principale

### Sur GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Créer le premier commit
git commit -m "Initial commit: NexusAI Labs website"

# Créer un repository sur GitHub, puis :
git remote add origin https://github.com/votre-username/nexusai-website.git
git branch -M main
git push -u origin main
```

**⚠️ Important** : Le fichier `.env.local` est automatiquement ignoré par `.gitignore` et ne sera **jamais** commité sur GitHub. Vos clés restent sécurisées.

## Pages

- Accueil `/`
- À propos `/about`
- Services `/services`
- Projets `/projects`
- Blog `/blog`
- Carrières `/careers`
- Espace utilisateur `/user` (+ `/login`, `/signup`)
- Contact `/contact`
- Mentions légales `/legal`

NexusAI Labs — Site vitrine type startup tech (IA & cybersécurité) construit avec Next.js + TypeScript + TailwindCSS, Framer Motion et authentification Supabase. Production‑ready et prêt à déployer sur Vercel.

## Stack

- Next.js App Router, TypeScript, Tailwind v4
- Framer Motion (animations légères)
- next-themes (mode sombre/clair)
- Supabase Auth (email/password)
- API contact via Resend (optionnel)

## Configuration

### En local (développement)

1. **Créer un fichier `.env.local`** à la racine du projet (copier depuis `.env.example` si disponible) :

```bash
# Copier le fichier d'exemple
cp .env.example .env.local
```

2. **Remplir les variables d'environnement** dans `.env.local` :

```
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_KEY=votre_cle_anonyme_supabase
RESEND_API_KEY=votre_cle_resend (optionnel)
```

**Pour Supabase** : Créer un projet sur [supabase.com](https://supabase.com), puis récupérer l'URL et la clé anonyme dans **Project Settings → API**. L'auth email/password doit être activée dans **Authentication → Providers**.

**⚠️ Important** : Le fichier `.env.local` est automatiquement ignoré par Git et ne sera **jamais** commité sur GitHub. Vos clés restent sécurisées.

## Démarrage

Installer les dépendances et lancer le serveur :

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Déploiement

### ⚠️ Configuration des variables d'environnement en production

**IMPORTANT** : Pour que votre site fonctionne en production, vous **DEVEZ** configurer les variables d'environnement sur votre plateforme de déploiement. Les fichiers `.env.local` ne sont **pas** déployés automatiquement.

### Sur Vercel (recommandé)

1. **Connecter le repository GitHub** :
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "Add New Project"
   - Importer votre repository GitHub
   - Vercel détectera automatiquement Next.js

2. **Configurer les variables d'environnement** (OBLIGATOIRE) :
   - Aller dans **Project Settings → Environment Variables**
   - Ajouter les variables suivantes :
     - `NEXT_PUBLIC_SUPABASE_URL` = votre URL Supabase (ex: `https://xxxxx.supabase.co`)
     - `NEXT_PUBLIC_SUPABASE_KEY` = votre clé anonyme Supabase (nom plus court pour Vercel)
     - `RESEND_API_KEY` = votre clé Resend (optionnel, pour le formulaire de contact)
   - Sélectionner les environnements : **Production**, **Preview**, et **Development**
   - Cliquer sur **Save**

3. **Déployer** :
   - Cliquer sur "Deploy"
   - Vercel déploiera automatiquement à chaque push sur la branche principale
   - **Redéployer** après avoir ajouté les variables d'environnement si nécessaire

### Sur Netlify

1. **Connecter le repository GitHub** sur [netlify.com](https://netlify.com)

2. **Configurer les variables d'environnement** :
   - Aller dans **Site Settings → Environment Variables**
   - Ajouter les mêmes variables que pour Vercel
   - Redéployer le site

### Sur d'autres plateformes

Configurez les variables d'environnement dans les paramètres de votre plateforme de déploiement. Les variables `NEXT_PUBLIC_*` sont accessibles côté client, les autres sont uniquement côté serveur.

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

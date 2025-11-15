# Guide de configuration Vercel pour NexusAI

## ⚠️ Problème : "Configuration Supabase manquante"

Si vous voyez ce message d'erreur après avoir configuré les variables sur Vercel, suivez ces étapes :

## ✅ Checklist de vérification

### 1. Vérifier les noms des variables (EXACTEMENT comme ci-dessous)
Les noms doivent être **exactement** :
- `NEXT_PUBLIC_SUPABASE_URL` (avec underscores, pas de tirets)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (avec underscores, pas de tirets)

❌ **FAUX** : `NEXT_PUBLIC_SUPABASE-URL` ou `NEXT_PUBLIC_SUPABASE_URL ` (avec espace)

### 2. Vérifier les valeurs
- `NEXT_PUBLIC_SUPABASE_URL` doit commencer par `https://` (ex: `https://xxxxx.supabase.co`)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` doit être une longue chaîne de caractères (clé anonyme)

### 3. Vérifier les environnements sélectionnés
Dans Vercel, pour chaque variable, vous devez cocher :
- ✅ **Production**
- ✅ **Preview** 
- ✅ **Development**

### 4. **REDÉPLOYER après avoir ajouté les variables**
⚠️ **C'EST CRUCIAL** : Après avoir ajouté/modifié les variables d'environnement sur Vercel, vous **DEVEZ** redéployer :

1. Allez dans votre projet Vercel
2. Cliquez sur l'onglet **"Deployments"**
3. Cliquez sur les **3 points** (⋯) du dernier déploiement
4. Sélectionnez **"Redeploy"**
5. Ou faites un nouveau commit et push sur GitHub (Vercel redéploiera automatiquement)

### 5. Vérifier que les variables sont bien présentes
Dans Vercel :
1. Allez dans **Settings** → **Environment Variables**
2. Vérifiez que les 2 variables sont bien listées
3. Cliquez sur chaque variable pour vérifier qu'elle est bien configurée pour tous les environnements

## 🔍 Comment vérifier si les variables sont bien chargées

1. Ouvrez la console du navigateur (F12) sur votre site déployé
2. Regardez les messages dans la console
3. Si vous voyez `❌ NEXT_PUBLIC_SUPABASE_URL est manquant`, les variables ne sont pas chargées

## 📝 Étapes complètes sur Vercel

1. **Importer le projet** :
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez `nexus-re-test`

2. **Ajouter les variables** (AVANT le premier déploiement si possible) :
   - Dans **Settings** → **Environment Variables**
   - Cliquez sur **"Add New"**
   - Ajoutez `NEXT_PUBLIC_SUPABASE_URL` avec votre URL Supabase
   - Cochez Production, Preview, Development
   - Cliquez **Save**
   - Répétez pour `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Déployer** :
   - Si vous avez ajouté les variables après le premier déploiement, **redéployez** (voir étape 4 ci-dessus)

## 🆘 Si ça ne fonctionne toujours pas

1. Vérifiez que vous avez bien copié les valeurs depuis Supabase (Project Settings → API)
2. Vérifiez qu'il n'y a pas d'espaces avant/après les valeurs dans Vercel
3. Supprimez et recréez les variables dans Vercel
4. Redéployez après chaque modification
5. Attendez 1-2 minutes après le redéploiement pour que les changements prennent effet


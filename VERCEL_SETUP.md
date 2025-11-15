# Guide de configuration Vercel pour NexusAI

## ⚠️ Problème : "Configuration Supabase manquante"

Si vous voyez ce message d'erreur après avoir configuré les variables sur Vercel, suivez ces étapes :

## ✅ Checklist de vérification

### 1. Vérifier les noms des variables (EXACTEMENT comme ci-dessous)
Les noms doivent être **exactement** :
- `NEXT_PUBLIC_URL` 
- `NEXT_PUBLIC_KEY`

⚠️ **Important** : Dans Next.js, les variables accessibles côté client doivent commencer par `NEXT_PUBLIC_`.

### 2. Vérifier les valeurs

#### Pour `NEXT_PUBLIC_URL` :
- Doit commencer par `https://` (ex: `https://xxxxx.supabase.co`)
- Pas d'espaces avant ou après

#### Pour `NEXT_PUBLIC_KEY` :
⚠️ **IMPORTANT** : La clé anonyme est **très longue** (environ 200+ caractères), c'est normal !

**Comment copier correctement depuis Supabase :**
1. Allez sur [supabase.com](https://supabase.com) → Votre projet
2. **Project Settings** → **API**
3. Dans la section **"Project API keys"**, trouvez **"anon public"**
4. Cliquez sur l'**icône de copie** à côté de la clé (ou sélectionnez tout le texte)
5. La clé commence généralement par `eyJ...` et est très longue
6. **Copiez TOUTE la clé** (elle peut sembler tronquée dans l'interface, mais copiez-la entièrement)

**Dans Vercel :**
- Collez la clé dans le champ "Value"
- Le champ peut sembler petit, mais **collez quand même toute la clé**
- Vercel accepte les longues chaînes, même si l'affichage est tronqué
- Vérifiez qu'il n'y a **pas d'espaces** au début ou à la fin après le collage

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
3. Si vous voyez `❌ NEXT_PUBLIC_URL est manquant`, les variables ne sont pas chargées

## 📝 Étapes complètes sur Vercel

1. **Importer le projet** :
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez `nexus-re-test`

2. **Ajouter les variables** (AVANT le premier déploiement si possible) :
   - Dans **Settings** → **Environment Variables**
   - Cliquez sur **"Add New"**
   - Ajoutez `NEXT_PUBLIC_URL` avec votre URL Supabase
   - Cochez Production, Preview, Development
   - Cliquez **Save**
   - Répétez pour `NEXT_PUBLIC_KEY`

3. **Déployer** :
   - Si vous avez ajouté les variables après le premier déploiement, **redéployez** (voir étape 4 ci-dessus)

## 🆘 Si ça ne fonctionne toujours pas

### Problème : La clé est trop longue / ne rentre pas

**Solution :**
1. **Copiez la clé depuis Supabase** :
   - Allez dans Supabase → Project Settings → API
   - Trouvez **"anon public"** (pas "service_role" qui est secrète !)
   - Cliquez sur l'icône de copie ou sélectionnez tout le texte avec Ctrl+A puis Ctrl+C
   
2. **Dans Vercel** :
   - Cliquez dans le champ "Value"
   - Collez avec Ctrl+V (ou clic droit → Coller)
   - **Même si le champ semble petit, la clé entière sera enregistrée**
   - Vercel peut tronquer l'affichage, mais la valeur complète est sauvegardée

3. **Vérifications** :
   - Assurez-vous d'avoir copié la **"anon public"** et non la **"service_role"**
   - Vérifiez qu'il n'y a pas d'espaces avant/après la clé
   - Vérifiez qu'il n'y a pas de retours à la ligne dans la clé
   - La clé doit commencer par `eyJ` (c'est un JWT)

4. **Si le problème persiste** :
   - Supprimez la variable dans Vercel
   - Recréez-la en copiant à nouveau depuis Supabase
   - Redéployez après chaque modification
   - Attendez 1-2 minutes après le redéploiement


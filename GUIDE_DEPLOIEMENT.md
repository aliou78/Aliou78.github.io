# Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment héberger votre portfolio gratuitement sur GitHub Pages.

## Prérequis
- Un compte GitHub (gratuit) : https://github.com/signup
- Git installé sur votre ordinateur

## Étapes de Déploiement

### 1. Créer un Dépôt GitHub

1. Connectez-vous à GitHub
2. Cliquez sur le bouton **"New"** (Nouveau) pour créer un nouveau dépôt
3. Nommez votre dépôt : `votre-nom.github.io` (exemple: `mamadou-diallo.github.io`)
4. Cochez **"Public"**
5. Cliquez sur **"Create repository"**

### 2. Initialiser Git dans votre Projet

Ouvrez un terminal/invite de commandes dans le dossier `por` et exécutez :

```bash
git init
git add .
git commit -m "Premier commit - Portfolio complet"
```

### 3. Connecter votre Projet à GitHub

Remplacez `VOTRE-NOM-UTILISATEUR` par votre nom d'utilisateur GitHub :

```bash
git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/votre-nom.github.io.git
git branch -M main
git push -u origin main
```

### 4. Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"**, sélectionnez **"main"** comme branche
5. Cliquez sur **"Save"**

### 5. Accéder à votre Site

Votre site sera disponible à l'adresse :
```
https://votre-nom-utilisateur.github.io/
```

⏱️ **Note** : Le déploiement peut prendre 2-5 minutes.

## Mettre à Jour votre Portfolio

Après avoir modifié vos fichiers, exécutez :

```bash
git add .
git commit -m "Description de vos modifications"
git push
```

Vos modifications seront en ligne en quelques minutes.

## Alternative : Déploiement Manuel (sans Git)

Si vous ne souhaitez pas utiliser Git :

1. Allez sur votre dépôt GitHub
2. Cliquez sur **"Add file"** > **"Upload files"**
3. Glissez-déposez `index.html`, `style.css`, et `script.js`
4. Cliquez sur **"Commit changes"**
5. Activez GitHub Pages comme expliqué à l'étape 4

## Personnalisation

### Modifier les Informations

- **Textes** : Éditez `index.html`
- **Couleurs** : Modifiez les variables CSS dans `style.css` (lignes 5-15)
- **Animations** : Ajustez `script.js`

### Ajouter une Photo de Profil

1. Ajoutez votre photo dans le dossier (ex: `photo.jpg`)
2. Dans `style.css`, remplacez le contenu de `.profile-photo::before` par :

```css
.profile-photo {
    background-image: url('photo.jpg');
    background-size: cover;
    background-position: center;
}

.profile-photo::before {
    content: '';
}
```

### Ajouter de Vrais Projets

Dans `index.html`, modifiez les sections `.project-card` avec :
- Vos titres de projets
- Descriptions réelles
- Liens vers vos projets GitHub
- Captures d'écran (ajoutez les images et modifiez `.project-image`)

## Domaine Personnalisé (Optionnel)

Pour utiliser votre propre nom de domaine (ex: `mamadoudiallo.com`) :

1. Achetez un nom de domaine
2. Dans les paramètres GitHub Pages, ajoutez votre domaine personnalisé
3. Configurez les DNS de votre domaine pour pointer vers GitHub

## Support

En cas de problème :
- Documentation GitHub Pages : https://docs.github.com/pages
- Vérifiez que vos fichiers sont bien nommés : `index.html`, `style.css`, `script.js`
- Assurez-vous que le dépôt est public

---

**Félicitations !** 🎉 Votre portfolio est maintenant en ligne et accessible au monde entier.

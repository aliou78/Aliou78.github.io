# 📋 Checklist de Personnalisation

Utilisez cette checklist pour personnaliser votre portfolio étape par étape.

## ✅ Informations Personnelles

Dans `index.html`, modifiez :

- [ ] Votre nom complet (ligne 9 et ligne 35)
- [ ] Votre titre/profession (ligne 36)
- [ ] Votre description (ligne 37)
- [ ] Email (lignes 10, 69, 283)
- [ ] Téléphone (lignes 11, 73, 289)
- [ ] Localisation (lignes 12, 77, 295)

## 🎨 Design et Apparence

Dans `style.css`, personnalisez :

- [ ] Couleur principale (ligne 6 : `--primary-color`)
- [ ] Couleur secondaire (ligne 8 : `--secondary-color`)
- [ ] Photo de profil (voir section ci-dessous)

### Ajouter votre Photo

1. [ ] Ajoutez votre photo dans le dossier `por` (ex: `ma-photo.jpg`)
2. [ ] Dans `style.css`, trouvez `.profile-photo` (ligne ~195)
3. [ ] Remplacez par :

```css
.profile-photo {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-image: url('ma-photo.jpg');
    background-size: cover;
    background-position: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

4. [ ] Supprimez ou commentez `.profile-photo::before`

## 💼 Compétences

Dans `index.html`, section Compétences :

- [ ] Ajoutez/supprimez des compétences
- [ ] Modifiez les pourcentages (`data-progress="XX"`)
- [ ] Changez les catégories si nécessaire

## 🎓 Formation

Dans `index.html`, section Formation :

- [ ] Ajoutez vos formations
- [ ] Modifiez les dates
- [ ] Mettez à jour les descriptions

Pour ajouter une formation, dupliquez le bloc `.timeline-item` :

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date">ANNÉE - ANNÉE</div>
        <h3 class="timeline-title">DIPLÔME</h3>
        <p class="timeline-institution">ÉTABLISSEMENT</p>
        <p class="timeline-description">Description...</p>
    </div>
</div>
```

## 🚀 Projets

Dans `index.html`, section Projets :

- [ ] Remplacez les titres de projets
- [ ] Modifiez les descriptions
- [ ] Changez les technologies (tags)
- [ ] Ajoutez les liens vers vos projets GitHub

### Ajouter des Captures d'Écran

1. [ ] Ajoutez vos images dans le dossier (ex: `projet1.jpg`)
2. [ ] Dans `style.css`, modifiez `.project-image` :

```css
.project-card:nth-child(1) .project-image {
    background-image: url('projet1.jpg');
    background-size: cover;
    background-position: center;
}
```

## 🗣️ Langues

Dans `index.html`, section Langues :

- [ ] Ajoutez/supprimez des langues
- [ ] Modifiez les niveaux
- [ ] Ajustez les pourcentages (`data-level="XX"`)

## 📧 Contact

- [ ] Vérifiez que votre email est correct partout
- [ ] Testez le formulaire de contact
- [ ] Ajoutez vos réseaux sociaux (optionnel)

### Ajouter des Réseaux Sociaux

Dans `index.html`, après la section contact-details, ajoutez :

```html
<div class="social-links">
    <a href="https://github.com/votre-nom" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/votre-nom" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/votre-nom" target="_blank">Twitter</a>
</div>
```

## 🌐 Déploiement

- [ ] Créez un compte GitHub
- [ ] Créez un dépôt `votre-nom.github.io`
- [ ] Suivez le guide dans `GUIDE_DEPLOIEMENT.md`
- [ ] Testez votre site en ligne

## 🔍 SEO et Accessibilité

Dans `index.html` :

- [ ] Modifiez le `<title>` (ligne 9)
- [ ] Personnalisez la meta description (ligne 6)
- [ ] Vérifiez que toutes les images ont des attributs `alt`
- [ ] Testez la navigation au clavier

## ✨ Améliorations Optionnelles

- [ ] Ajoutez Google Analytics
- [ ] Créez un favicon
- [ ] Ajoutez un blog
- [ ] Intégrez vos projets GitHub via l'API
- [ ] Ajoutez un mode sombre/clair
- [ ] Créez une version anglaise

## 📱 Tests

- [ ] Testez sur mobile (Chrome DevTools)
- [ ] Testez sur tablette
- [ ] Testez sur différents navigateurs (Chrome, Firefox, Safari)
- [ ] Vérifiez tous les liens
- [ ] Testez le formulaire de contact
- [ ] Vérifiez les animations

---

**Conseil** : Faites les modifications une par une et testez après chaque changement !

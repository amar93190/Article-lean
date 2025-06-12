# Notion vers HTML - Générateur de Site Statique

Ce projet permet de convertir des articles Notion exportés en Markdown vers des pages HTML statiques avec un design moderne et responsive.

## 🚀 Installation

1. Clonez ce dépôt :
```bash
git clone [URL_DU_REPO]
cd [NOM_DU_REPO]
```

2. Installez les dépendances :
```bash
npm install
```

## 📝 Utilisation

### 1. Export depuis Notion

1. Dans Notion, ouvrez votre article
2. Cliquez sur les 3 points ⋮ en haut à droite
3. Sélectionnez "Exporter"
4. Choisissez le format "Markdown & CSV"
5. Cliquez sur "Exporter"
6. Décompressez le fichier téléchargé
7. Placez les fichiers .md dans le dossier `notion_exports/`

### 2. Génération des pages HTML

Exécutez le script de génération :
```bash
node generate.js
```

Les fichiers HTML seront générés dans le dossier `output/`.

## 🎨 Personnalisation

- Le template HTML se trouve dans `templates/article.html`
- Le style CSS est dans `style.css`
- Vous pouvez modifier ces fichiers pour personnaliser l'apparence de vos pages

## 📁 Structure du projet

```
/project/
  /notion_exports/     ← Placez vos fichiers .md ici
  /templates/
    article.html       ← Template HTML
  /output/            ← Fichiers HTML générés
  generate.js         ← Script de génération
  style.css          ← Styles CSS
```

## 🌟 Fonctionnalités

- Conversion Markdown vers HTML
- Design moderne et responsive
- Support des images
- Mise en forme du code
- Navigation fluide
- Support des caractères spéciaux
- Génération automatique des titres

## 📄 License

MIT 
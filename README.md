# Article-lean

📝 Description de la solution : "Site d'articles automatisé via Notion"
Cette solution permet de générer automatiquement des pages HTML statiques à partir de contenus rédigés dans Notion.

Pensée pour des besoins simples et rapides (comme publier des faux articles ou du contenu test), elle allie :

une interface d’écriture intuitive (Notion),

une automatisation légère (Node.js),

et un site statique léger et facilement hébergeable (GitHub Pages, Netlify, etc.).

🔧 Fonctionnement :
L’utilisateur rédige ses articles dans Notion (en Markdown ou via une base de données Notion).

Il peut ensuite :

exporter manuellement les pages au format Markdown (solution simple), ou

connecter automatiquement l’API Notion (solution avancée).

Un script Node.js récupère les contenus, les insère dans un template HTML commun, et génère des fichiers .html prêts à être mis en ligne.

Chaque article dispose de sa propre page HTML, avec un design cohérent et minimaliste.

✅ Avantages :
🔸 Aucun besoin de CMS complexe ou de base de données.

🔸 Écriture facile via Notion, seul le texte change.

🔸 Facilité de mise à jour : ajouter un article = ajouter un fichier.

🔸 Zéro dépendance au backend : tout est statique et rapide.

🔸 Peut évoluer vers une solution dynamique (API Notion, frontend React, etc.).

📦 Technologies utilisées :
Notion (comme éditeur de contenu)

Markdown (pour la simplicité d’écriture)

Node.js (génération automatique)

Marked.js (conversion Markdown → HTML)

HTML/CSS (template statique)

# Template de plugin vs code avec une commande utilisant l'api de GitHub Copilot

## Description
L'objectif de ce projet est de démontrer comment automatiser des processus à l'aide
de GitHub Copilot avec les meilleurs pratiques. Ce projet contient

- Le template de base pour un plugin VS Code généré avec `yo code`
- la librairie prompt-tsx pour gérer les prompts

Le projet contient une commande qui prend en entrée un répertoire et pour chaque fichier
dans ce répertoire, il va ajouter un commentaire en haut du fichier avec des suggestions
d'améliorations.

## Prérequis
- Node.js
- VS Code

## Installation
```bash
npm install
```

## Utilisation
- Ouvrir le projet dans VS Code
- Appuyer sur `F5` pour ouvrir une nouvelle fenêtre avec votre extension chargée.
- Exécutez votre commande depuis la palette de commandes en appuyant sur (`Ctrl+Shift+P` ou `Cmd+Shift+P` sur Mac) et en tapant `Suggest Code Improvements`.






# Architecture Distribuée - Starter Kit

Modèle d'Architecture Distribuée à compléter (ex: connecter le service à la base de données...).

## Installations

### Variables d'environnement

- Créer un fichier __.env__ et renseigner les variables d'environnement en se basant sur les fichiers __.env.example__ fournis

### Dépendances NPM

- Installer les dépendances NPM de l'application __pizzas-service__

$ `cd pizzas-service`

$ `bun install`

### Données initiales

- La base de données MariaDB est initialisée avec le schéma et les données SQL se trouvant dans __./pizzas-db/sql__

## Commandes Docker

Toutes les commandes ci-dessous doivent être effectuées depuis la racine du projet.

- Démarrer les services Docker

$ `docker compose up`

- Démarrer les services Docker et rendre la main dans le terminal

$ `docker compose up -d`

- Démarrer les services Docker et activer le mode watch

$ `docker compose up --watch`

- Réinitialiser les containers associés aux services Docker

$ `docker compose down`

## Services

- pizzas-service (API REST) : <http://localhost:3333>
- pizzas-db (Base de données MARIADB)
- adminer (interface web d'administration de base de données) : <http://localhost:8080/?server=pizzas-db>

--

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>

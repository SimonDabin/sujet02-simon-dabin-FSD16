# Planification du projet

## Technologies utilisées :
- NodeJS 
- mongoDB 
- ejs ou pug

### 1 - création de la base de donnée en SQL
- table meuble :
id: int
nom: string
catégorie (FK)
quantité: int
matériaux_id (FK)

- table catégorie:
id: int
nom: string

- table matériaux:
id: int
nom: string
details: string
fournisseur_id(FK)

- table fournisseur:
id: int
nom: string
pays : string
ville: string
rue: string
téléphone: string

### 2 - création d'un formulaire pour enregistrer un nouveau meuble dans la bdd
- champs : nom, matériaux, catégorie, quantité

### 3 - affichage de la liste des meubles
- nom, matières premières, quantité, fournisseur matière première

### 4 - création des mots clés (affichage de la liste des matières première sous forme de boutons cliquables)
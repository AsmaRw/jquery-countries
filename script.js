// ## Frontend

// Créez un site web en HTML qui importera la librairie jQuery.

// Ajoutez un titre a votre site: `List of countries` 

// Ajoutez un bouton avec un attribut `id` `btnShowCountries` et un texte `Show countries`

// Dans un fichier `script.js` vous allez créer une fonction `getCountries` ou à l'aide d'AJAX vous allez récupérer la liste des pays depuis notre serveur. Cette fonction devra retournez la liste de pays.

// Après le chargement du site, capturez le click du bouton et à ce moment faites un appel a votre function `getCountries`. Récupérez le retour de cette fonction et ajoutez une liste `ul` à votre html, ou chaque pays sera un élément de la liste.  

// Pour que notre serveur accepte la requête qui vient de notre site web, il faudra le configurer pour qu'il active CORS (si vous voulez avoir un peu plus de details sur cors, vous pouvez regardez [ce site](https://flaviocopes.com/express-cors/)) 
// Installez le module `cors` à l'aide de npm. Après votre `var app = express()` ajoutez les lignes:

// ```jsx
// var cors = require('cors')
// app.use(cors())

/*const form = document.getElementById("loginForm");
const information = document.getElementById("info");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("imdp").value;
    const monemail = "barrymounir274@gmail.com";
    const monmdp = "1234";
    if(email === monemail && password === monmdp){
        window.location.href = "index.html";
    } else{
        information.textContent = "Mot de passe ou E-mail incorrect !";
    }
}); 
const description = " bienvenue dans le cours de javascript pour les développeurs intermédiaire ";
//les méthodes
//supprimer les espaces qui se trouvent autour de la variable et afficher le résultat à la console
nouvel_description = description.trim();
console.log("Phrase avant suppréssion d'espaces est:", description);
console.log("la Phrase après suppréssion d'espaces est:", nouvel_description);

//Transforer toute la pharse en majuscul
majuscul_description = description.toUpperCase();
console.log("la phrase en majuscul est:", majuscul_description);

//Remplacer le mot développeur par apprenant
apprenant_description = description.replace("développeurs", "apprénant");
console.log("Phrase apèrs remplacement de développeur:", apprenant_description);
//convertir la chaine en un tableau de mots
tableau_description = description.split(" ");
console.log("le tableau est:", tableau_description); 
// une fonction qui retourne un nombre de façon aléatoire entre 100000 et 900000

const min = 100000;
const max = 900000;
function genererCode(){
    const code = Math.floor(Math.random() * (max - min + 1) + min);
    return code;
}
console.log(genererCode());

const prixinitial = 47.89
//L'arrondis par défaut
const defaut = Math.floor(prixinitial);
console.log("L'arrondis par défaut: ", defaut);
//L'arrondis par excès
const exces = Math.ceil(prixinitial);
console.log("L'arrondis par excèrs: ", exces);
//fixed à deux décimal
console.log("fixed pour l'arrondis par défaut: ", defaut.toFixed(2));
console.log("fixed pour l'arrondis par excès: ", exces.toFixed(2));
console.log(prixinitial.toFixed(2));
//conversion de "42.75" en nombre
const string = "42.75";
//Affichage avant conversion
console.log(string);
console.log("type avant conversion: ", typeof(string));
//Affichage après conversion
const number = Number(string);
console.log(number);
console.log("type après conversion: ", typeof(number)); 
//les méthodes de manipulation des tableaux en JavaScript
const contacts = {
    "Aïssatou": {phone: "622-100-100", email: "aissatou@example.com"},
    "Mamadou": {phone: "622-200-200", email: "mamadou@example.com"},
    "Fatoumata": {phone: "622-300-300", email:"fatoumata@example.com"}
};
//Affichage de tous les noms des contacts:
console.log("Les noms des contacts:", Object.keys(contacts));
//Affichage de tous les numéros de téléphones:
console.log("Les numéros de téléphone:");
Object.values(contacts).forEach(contact => console.log(contact.phone));
//Affichage des pairs, nom et numéro
for(const [nom, info] of Object.entries(contacts)){
    console.log(`${nom}: ${info.phone}`);
};
//Création d'une fonction getContactInfo(name) qui prend un nom et retourne les infos du contact sous forme de chaîne:
//Exemple: "Fatou-Tel:622-505-606, Email:fatou@example.com"
function getContactInfo(name){
    const contact = contacts[name];
    if(contact){
        return console.log(`${name}-Tel:${contact.phone},Email:${contact.email}`);
    } else{
        return console.log(`${name} non trouvé`);
    }
};
getContactInfo("Fatoumata");
//Ajout de mon nom et des mes informations
contacts["Monnourou"]={phone: "628-378-683", email: "barrymounir274@gmail.com"};
console.log(contacts);
// Suppréssion du contact "Mamadou" de la list;
delete contacts["Mamadou"];
console.log("Contacts après suppréssion de Mamadou");
console.log(contacts);
//Affichage uniquement de l'année actuelle
const now = new Date();
console.log("L'année d'aujourd'hui:", now.getFullYear(now));
//Une fonction qui reçoit l'année de naissance et retourne l'age
function recoitAge(annee_naissance){
    return console.log("L'âge est:", now.getFullYear(now) - annee_naissance);
};
recoitAge(2003);
//formatage d'une date pour quelle s'affiche comma ça : JJ/MM/AAAA
function formaterDate(date){
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `La date d'aujourd'hui est: ${day}/${month}/${year}`;
}
console.log(formaterDate (new Date("2003-06-11"))); 
// Création d'un objet nom, age et ville et extraction du nom et de l'âge
const info_etudiant = {
    nom: "Monnourou", age: 22, ville: "Mamou"
};
const {nom, age} = info_etudiant;
console.log("Nom:", nom);
console.log("Age:", age);
// Avec un tableau de trois couleur, extraire la première et la troisième couleur en une ligne
const couleur = ["Blue","white","Green"];
console.log("la 1ère:",couleur[0],", la 3ème:", couleur[2]);
// Autrement
const [premiere, , troisieme] = couleur;
console.log("la prémiere:",premiere," troisième:", troisieme); 
// Créer un élément HTML avec des attributs data-nom et data-niveau et ensuite les lire sur JavaScript
const nom_niveau = document.getElementById('user');
console.log("Le nom:", nom_niveau.dataset.nom);
console.log("Le niveau:", nom_niveau.dataset.niveau);
// Créer une fonction qui reçoit un élément HTML et retourne tous ses attributs data-* sous forme d'Objet JavaScript
const element = document.getElementById('monElement');
const data = touslesAttribues(element); // Appelle de la fonction getDataAttributes avant ça déclaration
console.log(data); // Affichage de la variable qui stocke le contenu de la fonction
 function touslesAttribues(element) { // Déclaration de la fonction
  return { ...element.dataset };
}
data.age = Number(data.age); // permet de transformer l'age en number 
//Exercice sur les regex
const numero = "+224654321987";
const regex = /^\+224\d{9}$/;
if(regex.test(numero)){
    console.log(`Le numéro ${numero} est valide`);
} else{
    console.log(`Le numéro ${numero} est invalide !`);
} // <libphonenumber-js> est une bibliothèque qui permet de vérifier si un numéro est valide 
 //les API en JavaScript
 document.getElementById('jokeBtn').addEventListener('click', () => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      const setup = data.setup;
      const punchline = data.punchline;
      document.getElementById('joke').innerHTML = `
        <p><strong>${setup}</strong></p>
        <p>${punchline}</p>
      `;
    })
    .catch(error => {
      document.getElementById('joke').textContent = "Erreur lors du chargement de la blague.";
      console.error(error);
    });
}); 
// Définir l'URL de la fausse API
const url = 'https://jsonplaceholder.typicode.com/users';

// Créer un objet contenant le nom à envoyer
const data = {
    nom: 'Barry',
    prenom: 'Monnourou',
    age: 22
};

// Envoyer la requête POST
fetch(url, {
  method: 'POST', // Méthode HTTP
  headers: {
    'Content-Type': 'application/json' // On envoie des données JSON
  },
  body: JSON.stringify(data) // On transforme l'objet JS en JSON texte
})
.then(response => response.json()) // On convertit la réponse en JSON
.then(result => {
  // 4. Afficher la réponse dans la console
  console.log('Réponse du serveur :', result);
})
.catch(error => {
  console.error('Erreur lors de la requête :', error);
}); 

// --- JSON ---
const utilisateur = { nom: "Ali", age: 22 };
const jsonStr = JSON.stringify(utilisateur);
console.log("JSON.stringify :", jsonStr);
const obj = JSON.parse(jsonStr);
console.log("JSON.parse :", obj.nom, obj.age);

// --- Local Storage ---
localStorage.setItem("theme", "sombre");
console.log("Thème localStorage :", localStorage.getItem("theme"));
// localStorage.removeItem("theme");
// localStorage.clear();

// --- Session Storage ---
sessionStorage.setItem("étape", "2");
console.log("Étape sessionStorage :", sessionStorage.getItem("étape"));

// --- Cookies ---
document.cookie = "utilisateur=Ali; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
console.log("Cookies :", document.cookie);

// --- Exemple avec formulaire ---
function sauvegarder() {
    const nom = document.getElementById("nom").value;
    localStorage.setItem("nom_utilisateur", nom);
    alert("Nom sauvegardé !");
}

function lire() {
    const nom = localStorage.getItem("nom_utilisateur");
    alert("Nom enregistré : " + nom);
} 
//Exercice sur les Stockages
// Étape 1 : Récupérer les données utilisateur depuis l'API
fetch('https://jsonplaceholder.typicode.com/users/1') // utilisateur ID = 1
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de récupération');
    }
    return response.json();
  })
  .then(data => {
    // Étape 2 : Enregistrer dans sessionStorage
    sessionStorage.setItem('utilisateur', JSON.stringify(data));

    // Étape 3 : Afficher dans le navigateur
    afficherUtilisateur(data);
  })
  .catch(error => {
    console.error('Erreur :', error);info_utilisateur
  });

// Fonction pour afficher l'utilisateur
function afficherUtilisateur(utilisateur) {
  const div = document.getElementById('utilisateur');
  div.innerHTML = `
    <p><strong>Nom :</strong> ${utilisateur.name}</p>
    <p><strong>Email :</strong> ${utilisateur.email}</p>
    <p><strong>Ville :</strong> ${utilisateur.address.city}</p>
  `;
}*/
// LES CLASS EN JS
// Exemple : 
//Encapsulation
class Compte {
    // Attribut privé (accessible uniquement dans la classe)
    #solde = 0;
    constructor(montantInitial) {
        // Initialise le solde avec la valeur donnée au moment de la création
        this.#solde = montantInitial;
    }
    deposer(montant) {
        // Ajoute le montant au solde
        this.#solde += montant;
    }
    afficherSolde() {
        // Affiche le solde actuel dans la console
        console.log(`Solde: ${this.#solde}`);
    }
}
// Utilisation :
const compte = new Compte(100);
compte.deposer(50);
compte.afficherSolde(); // Affiche : Solde: 150
 
// La Notion d'Héritage
//Une classe peut hériter d’une autre avec le mot-clé `extends`.
// Classe de base (parent)
class Animal {
    parler() {
        // Méthode qui affiche un message générique
        console.log("L’animal fait un bruit");
    }
}
// Classe enfant qui hérite de Animal
class Chien extends Animal {
    // Redéfinit la méthode parler()
    parler() {
        console.log("Le chien aboie");
    }
}
// Utilisation :
const monChien = new Chien();
monChien.parler(); // Affiche : Le chien aboie
 
//🔹 Polymorphisme
//Une méthode peut se comporter différemment selon l’objet.
// Les deux classes ont une méthode parler()
class animal {
    parler() {
        console.log("L’animal fait un bruit");
    }
}
class chien extends animal {
    parler() {
        console.log("Le chien aboie");
    }
}
// Création d'un tableau contenant différents objets
const animaux = [new animal(), new chien()];
// On appelle la méthode parler() sur chaque objet
animaux.forEach(a => a.parler());

//🔹 Abstraction
//Simulée en JS via des classes abstraites avec des méthodes à implémenter manuellement.
// Exemple simple (convention) 
// Classe "abstraite" (non instanciable telle quelle)
class Vehicule {
    demarrer() {
        // Lève une erreur si cette méthode n'est pas redéfinie dans la classe enfant
        throw new Error("Méthode à implémenter");
    }
}
// Classe concrète qui hérite et redéfinit la méthode
class Voiture extends Vehicule {
    demarrer() {
        console.log("Vroum !");
    }
}
// Utilisation :
const voiture = new Voiture();
voiture.demarrer(); // Affiche : Vroum !

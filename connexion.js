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
console.log("type après conversion: ", typeof(number)); */
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
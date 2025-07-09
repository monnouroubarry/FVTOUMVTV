/*let champ = "";
const saisir = document.querySelector("input");
saisir.addEventListener("keypress", (e)=>{
    champ+=e.key;
    console.log(champ);
})
const bouton = document.getElementById("soumettre");
bouton.addEventListener('mouseover', ()=>{
    bouton.style.backgroundColor="#0000ff";
    bouton.style.color="#ffffff";
});
bouton.addEventListener('mouseout', () =>{
    bouton.style.backgroundColor="#14ab25";
    bouton.style.color="#0000ff";
});

const header = this.document.getElementById('monHeader');
window.addEventListener('scroll',function(){
    if (this.window.scrollY > 0){
        header.style.backgroundColor = 'darkblue';
        header.style.opacity = '0.7'
    } else{
        header.style.backgroundColor = 'green'
    }
}); 
window.onload = function() {
    alert("La page est complètement chargée !");
    console.log("Page chargée !");
}

const formulair = document.getElementById("formulaire");
formulair.addEventListener("submit", function(event){
    event.preventDefault();
    const nom = document.getElementById("nom").value;
    console.log("Nom soumis: ",nom);
    alert("vous avez soumis: " + nom);
    
}); 

boutons = document.querySelectorAll("button");
boutons.forEach(function(bouton) {
    bouton.style.backgroundColor = "red";
    bouton.style.color = "#0000ff";
}); 
const bouton = document.getElementById("moi");
bouton.addEventListener('mouseover', ()=>{
    bouton.style.backgroundColor="#0000ff";
    bouton.style.color="#ffffff";
});
bouton.addEventListener('mouseout', () =>{
    bouton.style.backgroundColor="#14ab25";
    bouton.style.color="#0000ff";
});

function handleclick() {
    alert("vous avez cliqueé !");
}

bouton.addEventListener('click', handleclick);
setTimeout(() =>{
    bouton.removeEventListener('click', handleclick);
}, 3000);

const div_parent = document.getElementById("parent");
const div_fils = document.getElementById("fils");

div_fils.addEventListener('click', (event)=>{
    alert("Fils cliqué");
    event.stopPropagation();
})
div_parent.addEventListener('click', ()=>{
    alert("Parent cliqué");
});

const boutons = document.querySelectorAll("button");
boutons.forEach((btn) =>{
    btn.style.backgroundColor = "#00bfff";
    btn.style.color = "#000000";
})

const header = this.document.getElementById('en-tete');
window.addEventListener('scroll',function(){
    if (this.window.scrollY > 0){
        header.style.backgroundColor = 'green';
        header.style.opacity = '0.7'
    } else{
        header.style.backgroundColor = '#00bfff'
    }
}); 
const bouton = document.getElementById('accueil');
bouton.addEventListener('click', ()=>{
    alert('Bouton Accueil cliqué !');
});
const btn = document.getElementById('valider');
btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor= "#00ff00";
    btn.style.color = "000000";
});
btn.addEventListener('mouseout', function(){
    btn.style.backgroundColor = "#00bfff"
})

const h3 = document.getElementById("divh3");
h3.addEventListener('mouseover', () => {
    h3.style.backgroundColor = "#0000ff";
    h3.style.color = "#000000";
});
h3.addEventListener('mouseout', ()=>{
    h3.style.backgroundColor = "#14ab25";
    h3.style.color = "#000000";
});
window.addEventListener('load', ()=>{
    alert("Page completement chargée !");
}) 

const touchetappee = document.getElementById("rechercher");
touchetappee.addEventListener('keypress', function(event){
    console.log("La touche tapéé est:", event.key);
});
const monsubmit = document.querySelector("form");
monsubmit.addEventListener('submit', function(event){
    const verification = getElementById("ipassword1").value;
    const confirmation = getElementById("ipassword2").value;
    if (verification !== confirmation) {
        event.preventDefault();
        alert("Mot de passe incorrect !");
    }else {
        event.preventDefault();
        alert("Formulaire intercepté !");
    }
});
const inscrire = document.getElementById("inscription");
inscrire.addEventListener('click', ()=>{
    alert("Bouton S'inscrire cliqué avec addEventListner !");
});
const produit = document.getElementById("produit");
produit.onclick = () => {
    alert("Bouton Nos produit cliqué avec onclic !");
};
const div_parent = document.getElementById("parent");
const div_fils = document.getElementById("fils");

div_fils.addEventListener('click', (event)=>{
    alert("Fils cliqué");
    event.stopPropagation();
})
div_parent.addEventListener('click', ()=>{
    alert("Parent cliqué");
});
const Divtailleecran = document.getElementById("tailleEcran");
Divtailleecran.textContent = `Taille de l'écran: ${window.innerWidth}px`;
window.addEventListener('resize', ()=>{
    Divtailleecran.textContent = `Taille de l'écran : ${window.innerWidth}px`;
}); 
const changercouleur = () => {
    document.documentElement.style.setProperty('--main-color', '#00000080');
};
setTimeout(changercouleur, 2000);

function adapterTaille() {
    const page = document.getElementById("page");
    page.style.width = window.innerWidth + "px";
};
window.addEventListener("load", adapterTaille);
window.addEventListener("resize", adapterTaille); */

const form = document.getElementById("loginForm");
const information = document.getElementById("info");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("imdp").value;
    const monemail = "barrymounir274@gmail.com";
    const monmdp = "1234";
    if(email === monemail && password === monmdp){
        window.open("index.html", "_blank");
        form
    } else{
        information.textContent = "Mot de passe ou E-mail incorrect !";
    }
});
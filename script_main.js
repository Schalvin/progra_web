// fonction de retardement : 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// fonction récupération du personnage et passage à la page suivante 
function perso_choisi() {
    if (document.personnages.perso[0].checked) {personnages.submit();} 
    else if (document.personnages.perso[1].checked) {personnages.submit();}
    else if (document.personnages.perso[2].checked) {personnages.submit();} 
    else {return;}
}
// click sur la lettre
const lettre = document.querySelector(".img-lettre");
const contenu = document.querySelector(".contenu");
const message = document.querySelector(".message");
const choix = document.querySelector(".choix");
const personnages = document.querySelector(".personnages");
const persos = document.querySelectorAll("[name='perso']")
lettre.addEventListener('click', () => {
    lettre.setAttribute("id","onclick");
    contenu.setAttribute("id","onclick");
    message.setAttribute("id","onclick");
    sleep(2000).then(() => { choix.setAttribute("id","onclick"); 
    personnages.setAttribute("id","onclick");});
})
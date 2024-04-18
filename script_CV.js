//Sauvegarder le personnage choisi et l'afficher
const perso2 = new URLSearchParams(window.location.search).get('perso')

const perso = document.querySelector('.perso')
const img = 'img/' + perso2
perso.style.backgroundImage = "url("+img+")";


//Affichage des CVs
const conteneur = document.querySelector('.conteneur')
const bauteurs = document.querySelector('.auteurs')
function show_CV() {
    if (conteneur.className == "conteneur hidden"){conteneur.classList.remove("hidden");
    bcredit.classList.add("hidden"); arriereplan.classList.add("hidden")}
    else {conteneur.classList.add("hidden"), bcredit.classList.remove("hidden"); arriereplan.classList.remove("hidden")}

}

//Affichage des sources des images
const sources = document.querySelector(".sources")
const bcredit = document.querySelector(".credits")
const arriereplan = document.querySelector(".perso_soeur")
function show_credits() {
    if (sources.className == "sources hidden"){sources.classList.remove("hidden");
    bauteurs.classList.add("hidden"); arriereplan.classList.add("hidden")}
    else {sources.classList.add("hidden"), bauteurs.classList.remove("hidden"); arriereplan.classList.remove("hidden")}
}

//Sauvegarder le personnage choisi et le transmettre
const perso2 = new URLSearchParams(window.location.search).get('perso')
document.getElementById('perso').value = perso2
function submit_perso() {
    document.perso.submit()
}
const nuages = document.querySelectorAll('.nuage')
nuages.forEach(element => {element.addEventListener('click', () => {element.classList.add("hidden")})    
});
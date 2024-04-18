//Sauvegarder le personnage choisi et le transmettre
const perso2 = new URLSearchParams(window.location.search).get('perso')
document.getElementById('perso').value = perso2
function submit_perso() {
    document.perso.submit()
}
//Page desert.html
//pointeur en forme de branche

const curseur = document.querySelector(".curseur")
window.addEventListener('mousemove', e => {
    curseur.style.top = e.pageY-5 + "px";
    curseur.style.left = e.pageX-5 + "px";
})

window.addEventListener('mousedown', () => {
    curseur.classList.add('active')
})
window.addEventListener('mouseup', () => {
    curseur.classList.remove('active')
})


// fonctions du jeu

const trou = document.querySelector(".trou");
const score = document.getElementById("score");
const bstart = document.getElementById("bstart"); 
const bfin = document.getElementById("bfin");

valeur_score = 0;

function trourandom() {
    //on calcul un nombre entre 0 et 1 avec math.random, on le multiplie par 9, et on garde la partie entière. 
    const rtrou = Math.floor(Math.random() * 8);;
    return rtrou.toString();
}

function serpent_out() {
    serpent = document.createElement("img");
    serpent.src = "img/serpent.png";
    serpent.classList.add("serpent") 
    num = trourandom();
    pos_serpent = document.getElementById(num);
    pos_serpent.appendChild(serpent);
    serpent.addEventListener("click", () => {
        valeur_score += 1;
        score.textContent = `Score: ${valeur_score}`;
        serpent.remove()
    })
}

function serpentInterval(){
    serpent.remove()
    if(diff != document.getElementById("difficulte").value){
        clearInterval(Interval)
        diff = document.getElementById("difficulte").value
        Interval = setInterval(serpentInterval, Math.floor(2500 * diff/diff**2))
    }
    if (valeur_score > 3){
        finjeu()
        return
    }
    serpent_out()
}
perdu=true

function debutjeu() {
        if (!perdu) { 
        // bloque le bouton start avant la fin du jeu, ! veut dire "not", on check si perdu == true
        return; 
    }
    perdu = false
    serpent_out()
    diff = document.getElementById("difficulte").value
    Interval = setInterval(serpentInterval, Math.floor(2500 * diff/diff**2)); 

}

function finjeu() {
    if (valeur_score > 3){
        score.textContent = `OUF !`;
        bfin.classList.remove("hidden")
        return
    }
    score.textContent = `You can do it!`;
    perdu=true
    clearInterval(Interval)
}

bstart.addEventListener("click", debutjeu);
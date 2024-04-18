//Sauvegarder le personnage choisi et le transmettre
const perso2 = new URLSearchParams(window.location.search).get('perso')
document.getElementById('perso').value = perso2

// Changer le niveau de difficulté (nbr de questions)
const diff = document.getElementById("difficulte")
const q2 = document.querySelector(".question.two")
const q3 = document.querySelector(".question.three")
diff.addEventListener("input", (event) => {
    if (event.target.value == 1){
        q2.classList.add("hidden")
        q3.classList.add("hidden")
    }
    if (event.target.value == 2){
        q2.classList.remove("hidden")
        q3.classList.add("hidden")
    }
    if (event.target.value == 3){
        q2.classList.remove("hidden")
        q3.classList.remove("hidden")
    }
  });

// Réponse au questionnaire
function repquizz() {
    let r1 = document.quizz.coût.value
    let r2 = document.quizz.temps.value
    let r3 = document.quizz.rep.value
    if (diff.value == 1 && r1 == "0.05"){
        endgame();
    } else if (diff.value == 2 && r1 == "0.05" && r2 == 29){
        endgame();
    } else if (diff.value == 3 && r1 == "0.05" && r2 == 29 && r3 == "Sri Jayawardenapura Kotte"){
        endgame();
    } else {
        let bulle = document.querySelector(".monstrebulle")
        bulle.classList.remove("hidden")
        setTimeout(() => bulle.classList.add("hidden"), 2000)
    };
};

//Passer a la page suivant en transmettant le choix du personnage
function endgame() {
    document.perso.submit();
}


// Changer la valeur affichée pour les jours de croissance du nénuphare
const value = document.querySelector("#value");
const input = document.querySelector("#temps");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
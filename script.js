const elementButtons = document.querySelectorAll(".element-choices")
const rounds = document.querySelector('.round');
const gameText = document.querySelector(".game-text");
const fire = document.querySelector(".fire-button");
const earth = document.querySelector(".earth-button");
const water = document.querySelector(".water-button");
const enemyLives = document.querySelector(".enemy-lives");
const playerLives = document.querySelector(".your-lives");
const playAgain = document.querySelector(".playAgain")
var elemImg = document.querySelector(".elem-img");
let cpuLives = 5;
let playerlives = 5;
let round = 0;


function game(userChoice) {
    computerSelection = computerChoice();
    switch(true){
        case (userChoice === computerSelection):
            gameText.innerText = `You both think alike. Two ${computerSelection}s is a draw and no lives lost.`;
            round = countRounds();
            rounds.innerText = `Round: ${round}`;
            break;
        case (userChoice === 'fire' && computerSelection === 'earth'):
        case (userChoice === 'earth' && computerSelection === 'water'):
        case (userChoice === 'water' && computerSelection === 'fire'):
            gameText.innerText = `Thats a powerful Element! ${userChoice} beats ${computerSelection}. Nice Move!`;
            round = countRounds();
            rounds.innerText = `Round: ${round}`;
            cpuLives -= 1;
            break;
        case (userChoice === 'earth' && computerSelection === 'fire'):
        case (userChoice === 'water' && computerSelection === 'earth'):
        case (userChoice === 'fire' && computerSelection === 'water'):
            gameText.innerText = `The oppenent out-elemented you! ${computerSelection} beats ${userChoice}`;
            round = countRounds();
            rounds.innerText = `Round: ${round}`;
            playerlives -= 1;
            break;
        } 
    playerLives.innerText = `Your lives: ${playerlives}`;
    enemyLives.innerText = `Enemy lives: ${cpuLives}`;
    game_over();
    cpuImg(computerSelection);
}
function computerChoice() {
    const elements = ["fire","earth","water"];
    const computerSelection = elements[Math.floor(Math.random() * elements.length)]
    return computerSelection;
    }
function game_over() {
    switch(true){
        case(cpuLives === 0):
            gameText.innerText = "You are much stronger than the opponent. Great victory!"
            fire.disabled = true;
            earth.disabled = true;
            water.disabled = true;
            playAgain.style.opacity = 1;
            playAgain.addEventListener("click", function(){
                window.location.reload();
            })
            break;
        case(playerlives === 0):
            gameText.innerText = "You were defeated. Better luck next time."
            fire.disabled = true;
            earth.disabled = true;
            water.disabled = true;
            playAgain.style.opacity = 1;
            playAgain.addEventListener("click", function(){
                window.location.reload();
            })
            break;
    }
}
function cpuImg(computerSelection) {
    if (computerSelection === 'fire'){
        elemImg.innerHTML ="<img src=\"https://cdn-icons-png.flaticon.com/128/9760/9760376.png\" width=\"150px\" height=\"150px\">";
    }
    else if(computerSelection === 'earth'){
        elemImg.innerHTML="<img src=\"https://cdn-icons-png.flaticon.com/128/5737/5737171.png\" width=\"150px\" height=\"150px\">";
    }
    else {
        elemImg.innerHTML="<img src=\"https://cdn-icons-png.flaticon.com/128/4589/4589162.png\" width=\"150px\" height=\"150px\">";
    }
}

function main() {
    fire.addEventListener("click", function() {
        game("fire");
});
earth.addEventListener("click", function() {
    game("earth");
});
water.addEventListener('click', function() {
    game("water");
});
}
function countRounds() {
    round += 1;
    rounds.innertext = 'round: ${round}';
    return round;
}

main();
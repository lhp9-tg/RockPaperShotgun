// Loader 

document.querySelector('header').style.display = "none";
document.querySelector('main').style.display = "none";

document.querySelector('.loaderRock').animate([
    // keyframes
    {
        opacity: 0
    },
    {
        opacity: 1
    }
], {
    // timing options
    duration: 1000,
    fill: "forwards",
    easing: "ease-in",
});

document.querySelector('.loaderPaper').animate([
    // keyframes
    {
        opacity: 0
    },
    {
        opacity: 1
    }
], {
    // timing options
    duration: 1000,
    fill: "forwards",
    easing: "ease-in",
    delay: 1000
});

document.querySelector('.loaderShotgun').animate([
    // keyframes
    {
        opacity: 0
    },
    {
        opacity: 1
    }
], {
    // timing options
    duration: 1000,
    fill: "forwards",
    easing: "ease-in",
    delay: 2000
});

let init
init = 0;

// Initialisation 

let rock = document.querySelector('.choice1');
let paper = document.querySelector('.choice2');
let shotgun = document.querySelector('.choice3');
playerOption = [rock, paper, shotgun];

let cpuScore = 0;
let playerScore = 0;
let nbGames = 0;
let draw = 0;

function game() {
    playerOption.forEach(element => {

        element.addEventListener('click', () => {

            // Choix du player

            if (element == rock) {
                playerChoice = 'rock';
            }
            else if (element == paper) {
                playerChoice = 'paper';
            }
            else if (element == shotgun) {
                playerChoice = 'shotgun';
            }
            console.log(playerChoice);

            // Choix du CPU 

            let cpuOption = ['rock', 'paper', 'shotgun'];
            let cpuChoiceNumber = Math.floor(Math.random() * 3);
            let cpuChoice = cpuOption[cpuChoiceNumber];
            console.log(cpuChoice);

            // Nombre de parties

            nbGames++

            // Les règles

            if (playerChoice === cpuChoice) {
                result = 'Draw';
                draw++
            }
            else if (playerChoice == 'rock') {
                if (cpuChoice == 'paper') {
                    result = 'You lose';
                    cpuScore++;
                }
                else {
                    result = 'You win';
                    playerScore++;
                }
            }
            else if (playerChoice == 'shotgun') {
                if (cpuChoice == 'rock') {
                    result = 'You lose';
                    cpuScore++;
                } else {
                    result = 'You win';
                    playerScore++;
                }
            }
            else if (playerChoice == 'paper') {
                if (cpuChoice == 'shotgun') {
                    result = 'You lose';
                    cpuScore++;
                } else {
                    result = 'You win';
                    playerScore++;
                }
            }

            // Winrate
            let winRate;
            let winPercent;

            if ((nbGames - draw) == 0) {
                winPercent = 0;
            }
            else {
                winRate = (playerScore / (nbGames - draw)) * 100;
                winPercent = Math.round(winRate)
                console.log(winPercent + '%');
            }

            // Phase 2

            // Affichage du combat 

            document.querySelector('.choice').style.display = "none";
            document.querySelector('.instruction').style.display = "none";

            document.querySelector('.versus').style.display = "flex";

            if (playerChoice == 'rock') { document.querySelector('.player img').src = "assets/img/rock.png" }
            else if (playerChoice == 'paper') { document.querySelector('.player img').src = 'assets/img/paper.png' }
            else if (playerChoice == 'shotgun') { document.querySelector('.player img').src = "assets/img/shotgun.png" }

            document.querySelector('.vs img').src = 'assets/img/versus.png'

            if (cpuChoice == 'rock') { document.querySelector('.cpu img').src = "assets/img/rock.png" }
            else if (cpuChoice == 'paper') { document.querySelector('.cpu img').src = 'assets/img/paper.png' }
            else if (cpuChoice == 'shotgun') { document.querySelector('.cpu img').src = "assets/img/shotgun.png" }


            // Affichage des scores

            document.querySelector('.result').textContent = result;
            setTimeout(() => {
                document.querySelector('.result').style.display = "block";
            }, 200);


            if (result == 'You win') {
                document.querySelector('.result').animate([
                    // keyframes
                    {
                        opacity: 0,
                        color: "#000000",
                    },
                    {
                        opacity: 1,
                        color: "#00866B",
                        scale: 1.5
                    }
                ], {
                    // timing options
                    duration: 1000,
                    fill: "forwards",
                    easing: "ease-in",
                });
            }
            else if (result == 'You lose') {
                document.querySelector('.result').animate([
                    // keyframes
                    {
                        opacity: 0,
                        color: "#000000",
                        scale: 1.5,
                    },
                    {
                        opacity: 1,
                        color: "#44208D",
                        scale: 1

                    }
                ], {
                    // timing options
                    duration: 1000,
                    fill: "forwards",
                    easing: "ease-out",
                });
            }
            else if (result == 'Draw') {
                document.querySelector('.result').animate([
                    // keyframes
                    {
                        opacity: 0,
                        scale: 1,
                        color: "#000000",
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        color: "#000000",

                    }
                ], {
                    // timing options
                    duration: 1000,
                    fill: "forwards",
                });
            }

            document.querySelector('.playerScore').textContent = playerScore;
            document.querySelector('.cpuScore').textContent = cpuScore;
            document.querySelector('.winPercent').textContent = winPercent + '%';

        });

    });
}



window.addEventListener('click', () => {


    if (init == 0) {
        document.querySelector('.loader').remove();
        document.querySelector('header').style.display = "flex";
        document.querySelector('main').style.display = "block";
        document.querySelector('.versus').style.display = "none";
        game()
        init = 1;
    }
    else if (init == 1) {

            init = 2;

        }
        else if (init == 2) {

            document.querySelector('.result').style.display = "none";
            document.querySelector('.versus').style.display = "none";
            document.querySelector('.choice').style.display = "flex";
            document.querySelector('.instruction').style.display = "flex";
            init = 1;
        }
});

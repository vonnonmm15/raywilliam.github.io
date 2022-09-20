const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getRandomPick () {
    let chance = Math.random();

    if (chance > 0.66) {
    
        return ROCK;
    } else if (chance > 0.33) {

        return PAPER;
    } else {

        return SCISSORS
    }

}

function getResultText()
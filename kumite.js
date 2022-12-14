function kumite(command) {
const punch = 'Punch';
const kick =  'Kick';
const throwMove = 'Throw';
let computerMove = '';
let rounds = 0;
let playerPoints = 0;
let npcPoints = 0;
let isGameOver = false;
let howToMove = false;
let colors = require('colors/safe');

while(!isGameOver){
    console.log(colors.yellow('The opponent is ready for the round'))
    console.log(colors.yellow('Make your move : press (p) for punch, (k) for kick or (t) for throw'))
    playerTurn = command.shift(' ')
if(playerTurn == 'p' || playerTurn == 'punch'){
    playerTurn = punch
    console.log(colors.green('You clenched your fists with smile'))
}else if(playerTurn == 'k' || playerTurn == 'kick'){
    playerTurn = kick
    console.log(colors.green('You lean back ready to jump forward'))
}else if(playerTurn == 't' || playerTurn == 'throw'){
    playerTurn = throwMove
    console.log(colors.green('You try to grab him'))
}else{
    console.log(colors.magenta('Wrong Move! Try again...'))
}
let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

switch(computerRandomNumber){
    case 1 : computerMove = punch
    console.log(colors.red('The opponent is going to hit you with fist.'))
    break;
    case 2 : computerMove = kick
    console.log(colors.red('The opponent make step forward'))
    break;
    case 3 : computerMove = throwMove
    console.log(colors.red('The opponent say "Try to withstand my might!"'))
    break;
}
if(playerTurn === punch && computerMove === punch){
    console.log(colors.blue('Block.'))
}else if(playerTurn === punch && computerMove === throwMove){
    console.log(colors.red('The opponent applies an inverted facelock to you, then falls backward, driving the back of your head into the floor.'))
    npcPoints++
}else if(playerTurn === punch && computerMove === kick){
    console.log(colors.green('Your fist landed on the opponent face.'))
    playerPoints++
}else if(playerTurn === throwMove && computerMove === punch){
    console.log(colors.green('You grab your opponent by the neck, then quickly turns around and slams him into the ground.'))
    playerPoints++
}else if(playerTurn === throwMove && computerMove === throwMove){
    console.log(colors.blue('Both of you grab only the thin air. Awkward situation.'))
}else if(playerTurn === throwMove && computerMove === kick){
    console.log(colors.red('After dodging your attack, the opponent slides forward with a side kick to your\'s middle, knocking you away.'))
    npcPoints++
}else if(playerTurn === kick && computerMove === punch){
    console.log(colors.red('The opponent is faster than you. He\'s fist punch your stomach, before even lift your feet.'))
    npcPoints++
}else if(playerTurn === kick && computerMove === throwMove){
    console.log(colors.green('You  deals a spinning balance kick to the opponent.'))
    playerPoints++
}else if(playerTurn === kick && computerMove === kick){
    console.log(colors.blue('You jump over your opponent avoiding cutting-down kick.'))
}else{
    console.log(colors.magenta('Unable to move, the opponent show you some mercy..... after some time....Read the instructions first'))
    isGameOver = true;
    let howToMove = true;
}
rounds ++
if(rounds === 3){
    isGameOver = true;
}
}
if(howToMove){
    console.log(colors.magenta('Try again.Press (p) for punch, (k) for kick or (t) for throw'))
}else{
    console.log(colors.yellow('The Battle is Over'));
    if(playerPoints > npcPoints){
        console.log(colors.green('You Win!!!'));    
    }else if(playerPoints < npcPoints){
        console.log(colors.red('You loose!!!'));
    }else{
        console.log(colors.blue('The fight is so boring and the crowd is not happy. The result is draw, but the shame is yours!!!'));
    }


}
}
kumite(['t','p','k','p'])
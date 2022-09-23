function kumite(playerTurn) {
const punch = 'Punch';
const kick =  'Kick';
const throwMove = 'Throw';
let computerMove = '';

if(playerTurn == 'p' || playerTurn == 'punch'){
    playerTurn = punch
    console.log(`You clenched your fists with smile`)
}else if(playerTurn == 'k' || playerTurn == 'kick'){
    playerTurn = kick
    console.log(`You lean back ready to jump forward`)
}else if(playerTurn == 't' || playerTurn == 'throw'){
    playerTurn = throwMove
    console.log(`You try to grab him`)
}else{
    console.log(`Wrong Move! Try again...`)
}
let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

switch(computerRandomNumber){
    case 1 : computerMove = punch
    console.log('The opponent is going to hit you with fist.')
    break;
    case 2 : computerMove = kick
    console.log('The opponent make step forward')
    break;
    case 3 : computerMove = throwMove
    console.log('The opponent say "Try to withstand my might!"')
    break;
}
if(playerTurn === punch && computerMove === punch){
    console.log(`Block. Draw`)
}else if(playerTurn === punch && computerMove === throwMove){
    console.log(" The opponent applies an inverted facelock to you, then falls backward, driving the back of your head into the floor. You Lose!!!")
}else if(playerTurn === punch && computerMove === kick){
    console.log(`Your fist landed on the opponent face. You Win!!!`)
}else if(playerTurn === throwMove && computerMove === punch){
    console.log("You grab your opponent by the neck, then quickly turns around and slams him into the ground. You Win !!!")
}else if(playerTurn === throwMove && computerMove === throwMove){
    console.log("Both of you grab only the thin air. Awkward situation. Draw")
}else if(playerTurn === throwMove && computerMove === kick){
    console.log("After dodging your attack, the opponent slides forward with a side kick to your's middle, knocking you away. You Lose!!!")
}else if(playerTurn === kick && computerMove === punch){
    console.log("The opponent is faster than you. He`s fist punch your stomach, before even lift your feet. You Lose!!!")
}else if(playerTurn === kick && computerMove === throwMove){
    console.log('You  deals a spinning balance kick to the opponent. You win!!!')
}else if(playerTurn === kick && computerMove === kick){
    console.log("You jump over your opponent avoiding cutting-down kick. Draw")
}else{
    console.log("Unable to move, the opponent show you some mercy..... after some time....Read the instructions first")
}

}
kumite('t')
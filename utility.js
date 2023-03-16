const { player } = require('./characters');
var colors = require('colors');

const capitalise = (str) => str?.split(' ').map(e => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');

function updateAnxiety(num) {
  player.anxiety = limitNumber(player.anxiety + num);

  if (num > 0) {
    console.log("You feel shameful".yellow);
    console.log(`Your anxiety is now at ${player.anxiety * 10}%`.red);
  } else {
    console.log("You feel yourself relax a little".green);
    console.log(`Your anxiety is now at ${player.anxiety * 10}%`.green);
  }

  if (player.anxiety === 10) {
    panicAttack();
  }
}

function updateKnowledge(num) {
  player.knowledge = limitNumber(player.knowledge + num);

  console.log("Memories of last night return to you".yellow);
  console.log(`Your knowledge is now at ${player.knowledge * 10}%`.green);
}

function updateHappiness(num) {
  player.happiness = limitNumber(player.happiness + num);

  if (num > 0) {
    console.log("You feel a boost in confidence".yellow);
    console.log(`Your happiness is now at ${player.happiness * 10}%`.green);
  } else {
    console.log("You feel your confidence take a knock".yellow);
    console.log(`Your happiness is now at ${player.happiness * 10}%`.red);
  }

  if (player.happiness === 10) {
    console.log(`${player.name}: I Am Legend!!`)
    console.log('Your Pursuit of Happyness has peaked to the point where you\'re gettin\' jiggy with it.'.blue);
    console.log('YOU WIN!'.green)
    endGame();
  }

  if (player.happiness === 0) {
    console.log('You feel an emptiness inside drain you of your Will Smith to live '.blue);
    endGame();
  }
}

function panicAttack() {
  console.log("Your anxiety has peaked, and a panic attack quickly ensues. GAME OVER!".red);
  endGame();
}

function endGame() {
  process.exit();
}

function logBreak() {
  console.log('\n');
}

function limitNumber(num, min = 0, max = 10) {
  return Math.max(Math.min(num, max), min);
}

module.exports = {
  capitalise,
  logBreak,
  updateAnxiety,
  updateKnowledge,
  updateHappiness,
  limitNumber
};
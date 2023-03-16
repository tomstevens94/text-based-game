const inquirer = require("inquirer");
const { player, owner } = require("../characters");
const { isValidString } = require("../validation/validateString");

const enterName = async () => {
  const { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: isValidString,
  });

  return name;
};

const chooseWhoToSpeakTo = async () => {
  const choices = ["Speak to the old woman", "Speak to your friend"];

  const { person } = await inquirer.prompt({
    type: "list",
    choices,
    name: "person",
    message:
      "You notice your friend waking up next to you with an old woman screaming at you both",
  });

  return choices.indexOf(person) === 0 ? "the old woman" : "your friend";
};

const speakToFriend = async () => {
  const choices = ["Where am I?", "What happened?"];

  const { choice } = await inquirer.prompt({
    type: "list",
    choices,
    name: "choice",
    message: "FRIEND: You ready? I'm so glad you lost this bet",
  });

  return choices.indexOf(choice);
};
const chooseClothes = async () => {
  const choices = ["Tuxedo", "Swimming Trunks", "Clown Suit"];

  const { outfit } = await inquirer.prompt({
    type: "list",
    choices,
    name: "outfit",
    message:
      "She leads you into the dressing room and leaves you alone to get changed. In the wardrobe you see 3 options:",
  });

  return outfit;
};

const womanResponse = async () => {
  const choices = ["I don't understand what's happening?", "Not yet"];

  const { response } = await inquirer.prompt({
    type: "list",
    choices,
    name: "response",
    message: `${owner.name}: Are you ready to get on stage?`,
  });

  return response;
};

const chooseASong = async () => {
  const choices = [
    "Beethoven: Moonlight Sonata",
    "Elton John: Rocketman",
    "Don't play anything, just cry",
  ];

  const { song } = await inquirer.prompt({
    type: "list",
    choices,
    name: "song",
    message:
      "She pushed you on stage. The crowd turn silent and everyone is staring at you as you walk towards the piano. Knees weak, arms are heavy. You finally sit down at the piano. What do you want to play?",
  });

  return choices.indexOf(song);
};

module.exports = {
  enterName,
  chooseWhoToSpeakTo,
  speakToFriend,
  chooseClothes,
  womanResponse,
  chooseASong,
};

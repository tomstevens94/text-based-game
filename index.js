const {
  enterName,
  chooseWhoToSpeakTo,
  speakToFriend,
  chooseClothes,
  womanResponse,
  chooseASong,
} = require("./functions/inq");

const {
  logBreak,
  updateAnxiety,
  updateKnowledge,
  updateHappiness,
  capitalise,
} = require("./utility");

const { player, owner } = require("./characters");

var colors = require("colors");

const start = async () => {
  const name = await enterName();
  player.name = capitalise(name);
  console.log(
    `How much did you drink last night ${player.name}?\nYou've woken up with no knowledge of last night. You appear to be backstage at a concert hall. Try to get through the day mentally sane.`
      .blue
  );
  speakToSomeone();
};

const speakToSomeone = async () => {
  logBreak();

  const person = await chooseWhoToSpeakTo();

  console.log(`You've chosen to speak to ${person}`.blue);

  switch (person) {
    case "the old woman": {
      console.log(`${owner.name}: Hurry up and get dressed you're on soon!`);
      break;
    }
    case "your friend": {
      const choice = await speakToFriend();

      console.log(`You: ${choice === 0 ? "Where am I?" : "What happened?"}`);

      if (choice === 0) {
        // Where am I?
        console.log(
          `Friend: ${player.name} do you really not know? You told the owner last night that you would perform some classics, go see the old hag`
        );
        console.log(
          "Suddenly you get a flashback of last night as you remember your despicable arrogance in lying to the owner"
            .yellow
        );
        updateKnowledge(+5);
      } else {
        // What happened
        console.log(
          `Friend: ${player.name} do you really not remember? You are a disaster!, go see the old hag`
        );
        updateAnxiety(+5);
      }

      owner.name = "Old Hag";
      console.log("You approach the old hag".blue);
      console.log(
        `${owner.name}: Don't call your mother an old hag! Now ${player.name}, hurry and get dressed, you're on soon`
      );
      owner.name = "Friends Mum";

      break;
    }
    default:
      break;
  }

  getDressed();
};

const getDressed = async () => {
  logBreak();

  const outfit = await chooseClothes();

  console.log(`You've chosen to wear the ${outfit}`.blue);

  switch (outfit) {
    case "Tuxedo": {
      console.log(`${owner.name}: ${player.name} you look great!`);
      updateAnxiety(-1);
      break;
    }
    case "Swimming Trunks": {
      console.log(
        `${owner.name}: ${player.name} what are you wearing? It doesn't matter, there's no time!`
      );
      updateAnxiety(1);
      updateHappiness(-1);
      break;
    }
    case "Clown Suit": {
      console.log(
        `${owner.name}: ${player.name} you look rediculous! It doesn't matter, theres no time to change!`
      );
      updateAnxiety(3);
      updateHappiness(-3);
      break;
    }
    default:
      break;
  }

  preStageQuestion();
};

const preStageQuestion = async () => {
  logBreak();

  const response = await womanResponse();

  console.log(`You: ${response}`);

  if (response === "Not yet") {
    console.log(
      `${owner.name}: Are you joking?! I didn't invite Elon Musk and Will Smith for no reason!`
    );
    updateAnxiety(3);
  } else {
    console.log(
      `${owner.name}: You don't remember? I'm the owner, you told me last night you are a classical pianist and you could perform today`
    );
    updateKnowledge(3);
  }

  console.log(
    `${owner.name}: Hurry up ${player.name}, are you`,
    `deaf`.grey,
    `? You need to be on stage!`
  );

  goOnStage();
};

const goOnStage = async () => {
  logBreak();

  const song = await chooseASong();

  switch (song) {
    case 0: {
      // Beethoven
      console.log(
        `The crowd erupts into a roar to give you a standing ovation`.blue
      );
      console.log(`Elon Musk walks on stage, kisses your forehead`.blue);
      console.log(`Elon: They love you, here's a Tesla`);
      updateHappiness(10);
    }
    case 1: {
      // Elton John
      console.log(
        `Will smith walks on stage, slaps you and the crowd goes wild`.blue
      );
      console.log(
        `You leave the stage, your face still stinging from the Bad Boys' fresh prints`
          .blue
      );
      updateAnxiety(3);
      updateHappiness(-10);
    }
    case 2: {
      // Cry
      console.log(
        "The crowd remains silent, as you slowly crawl off the stage"
      );
      updateAnxiety(10);
    }
    default:
      break;
  }
};

start();
module.exports = {
  speakToSomeone,
};

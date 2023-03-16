let { player, owner } = require("../characters");
const { chooseWhoToSpeakTo, speakToFriend, chooseClothes, womanResponse, chooseASong } = require('../functions/inq');
let { speakToSomeone, getDressed, preStageQuestion, goOnStage } = require("../index");

jest.mock('../functions/inq', () => ({
  ...jest.requireActual('../functions/inq'),
  chooseWhoToSpeakTo: jest.fn(),
  speakToFriend: jest.fn(),
  chooseClothes: jest.fn(),
  womanResponse: jest.fn(),
  chooseASong: jest.fn()
}));

describe("speakToSomeone function", () => {
  test('correctly increase knowledge if we speak to friend and ask "Where am I?"', async () => {
    player.knowledge = 0;

    chooseWhoToSpeakTo.mockResolvedValue("your friend");
    speakToFriend.mockResolvedValue(0);

    await speakToSomeone();

    expect(player.knowledge).toEqual(5);
  });
  test('correctly increase anxiety if we speak to friend and ask "What happened?"', async () => {
    player.anxiety = 2;

    chooseWhoToSpeakTo.mockResolvedValue("your friend");
    speakToFriend.mockResolvedValue(1);

    await speakToSomeone();

    expect(player.anxiety).toEqual(7);
  });
  test('Owners name should change to "Friends mum" after speaking to friend', async () => {
    chooseWhoToSpeakTo.mockResolvedValue("your friend");
    speakToFriend.mockResolvedValue(0);

    await speakToSomeone();

    expect(owner.name).toEqual('Friends Mum');
  });
});

describe("getDressed function", () => {
  test('correctly decrease anxiety if we choose to wear Tuxedo', async () => {
    player.anxiety = 5;

    chooseClothes.mockResolvedValue("Tuxedo");

    await getDressed();

    expect(player.anxiety).toEqual(4);
  });
  test('correctly increase anxiety and decrease happiness if we choose to wear Swimming Trunks', async () => {
    const playerName = player.name;
    const playerKnowledge = player.knowledge;

    player.anxiety = 5;
    player.happiness = 5;

    chooseClothes.mockResolvedValue("Swimming Trunks");

    await getDressed();

    expect(player).toEqual({
      name: playerName,
      knowledge: playerKnowledge,
      anxiety: 6,
      happiness: 4,
    });
  });
  test('correctly increase anxiety and decrease happiness if we choose to wear Clown Suit', async () => {
    const playerName = player.name;
    const playerKnowledge = player.knowledge;

    player.anxiety = 5;
    player.happiness = 5;

    chooseClothes.mockResolvedValue("Clown Suit");

    await getDressed();

    expect(player).toEqual({
      name: playerName,
      knowledge: playerKnowledge,
      anxiety: 8,
      happiness: 2,
    });
  });
});

describe("preStageQuestion function", () => {
  test('correctly decrease anxiety if we say we\'re "Not yet" ready to go on stage', async () => {
    player.anxiety = 5;

    womanResponse.mockResolvedValue("Not yet");

    await preStageQuestion();

    expect(player.anxiety).toEqual(8);
  });

  test('correctly increase knowledge if we say ask the owner: "I don\'t understand what\'s happening?"', async () => {
    player.knowledge = 5;

    womanResponse.mockResolvedValue("I don't understand what's happening?");

    await preStageQuestion();

    expect(player.knowledge).toEqual(8);
  });
});

describe("goOnStage function", () => {
  test('correctly increase happiness if we choose to play Beethoven', async () => {
    player.happiness = 1;

    chooseASong.mockResolvedValue(0);

    await goOnStage();

    expect(player.happiness).toEqual(9);
  });

  test('correctly increase anxiety decrease happiness if we choose to play Elton John', async () => {
    const playerName = player.name;
    const playerKnowledge = player.knowledge;

    player.anxiety = 5
    player.happiness = 8;

    chooseASong.mockResolvedValue(1);

    await goOnStage();

    expect(player).toEqual({
      name: playerName,
      knowledge: playerKnowledge,
      anxiety: 8,
      happiness: 3
    });
  });

  test('correctly increase anxiety if we cry', async () => {
    player.anxiety = 0

    chooseASong.mockResolvedValue(2);

    await goOnStage();

    expect(player.anxiety).toEqual(9);
  });
});

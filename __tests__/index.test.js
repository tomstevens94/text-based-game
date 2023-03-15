let { player } = require("../characters");
let { chooseWhoToSpeakTo, speakToFriend } = require("../functions/inq");
let { speakToSomeone } = require("../index.js");

describe("speakToSomeone function", () => {
  test("correctly increase knowledge if we speak to friend and ask where we are", async () => {
    player.knowledge = 0;
    jest.mock("chooseWhoToSpeakTo");
    chooseWhoToSpeakTo = jest.fn().mockResolvedValue("your friend");
    jest.mock("speakToFriend");
    speakToFriend = jest.fn().mockResolvedValue(0);

    await speakToSomeone();

    expect(player.knowledge).toEqual(5);
  });
});

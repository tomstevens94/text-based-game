const {
  enterName,
  chooseWhoToSpeakTo,
  speakToFriend,
  chooseClothes,
  womanResponse,
  chooseASong,
} = require("../functions/inq");

const { player } = require("../characters");

const inquirer = require("inquirer");
jest.mock("inquirer");

describe("enterName function", () => {
  test("Should capitalise and update player name", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ name: "toMmY tUCKER" });

    await expect(enterName()).resolves.toBe("toMmY tUCKER");
  });
});

describe("chooseWhoToSpeakTo function", () => {
  test("speak to friend", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ person: "Speak to your friend" });

    await expect(chooseWhoToSpeakTo()).resolves.toEqual("your friend");
  });
  test("speak to old woman", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ person: "Speak to the old woman" });

    await expect(chooseWhoToSpeakTo()).resolves.toEqual("the old woman");
  });
});

describe("speakToFriend function", () => {
  test("Where am I?", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ choice: "Where am I?" });

    await expect(speakToFriend()).resolves.toEqual(0);
  });
  test("What happened?", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ choice: "What happened?" });

    await expect(speakToFriend()).resolves.toEqual(1);
  });
});

describe("chooseClothes function", () => {
  test("Tuxedo", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ outfit: "Tuxedo" });

    await expect(chooseClothes()).resolves.toEqual("Tuxedo");
  });
  test("Swimming Trunks", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ outfit: "Swimming Trunks" });

    await expect(chooseClothes()).resolves.toEqual("Swimming Trunks");
  });
  test("Clown Suit", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ outfit: "Clown Suit" });

    await expect(chooseClothes()).resolves.toEqual("Clown Suit");
  });
});

describe("womanResponse function", () => {
  test("I don't understand what's happening", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ response: "I don't understand what's happening" });

    await expect(womanResponse()).resolves.toEqual(
      "I don't understand what's happening"
    );
  });
  test("Not yet", async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ response: "Not yet" });

    await expect(womanResponse()).resolves.toEqual("Not yet");
  });
});

describe("chooseASong function", () => {
  test("Beethoven: Moonlight Sonata", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ song: "Beethoven: Moonlight Sonata" });

    await expect(chooseASong()).resolves.toEqual(0);
  });
  test("Elton John: Rocketman", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ song: "Elton John: Rocketman" });

    await expect(chooseASong()).resolves.toEqual(1);
  });
  test("Don't play anything, just cry", async () => {
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ song: "Don't play anything, just cry" });

    await expect(chooseASong()).resolves.toEqual(2);
  });
});

const {
  capitalise,
  updateAnxiety,
  updateKnowledge,
  updateHappiness,
  limitNumber,
} = require("../utility");

const { player } = require("../characters");
//const { run } = require("jest");

describe("Capitalise utility function", () => {
  test("Should correctly capitalise a single word", () => {
    const value = capitalise("jEReMy");

    expect(value).toBe("Jeremy");
  });

  test("Should correctly capitalise multiple words", () => {
    const value = capitalise("tHoMAs THe tanK EngiNe");

    expect(value).toBe("Thomas The Tank Engine");
  });

  test("Should have no effect on numbers, or special characters", () => {
    const value = capitalise("tHoMAs THe tanK EngiNe12!!");

    expect(value).toBe("Thomas The Tank Engine12!!");
  });
});

describe("updateAnxiety function", () => {
  test("correctly adds value to player anxiety", () => {
    player.anxiety = 5;
    updateAnxiety(4);
    expect(player.anxiety).toEqual(9);
  });
  test("correctly subtracts value from player anxiety", () => {
    player.anxiety = 5;
    updateAnxiety(-4);
    expect(player.anxiety).toEqual(1);
  });
});

describe("updateKnowledge function", () => {
  test("correctly adds value to player Knowledge", () => {
    player.knowledge = 5;
    updateKnowledge(4);
    expect(player.knowledge).toEqual(9);
  });
  test("correctly subtracts value from player Knowledge", () => {
    player.knowledge = 5;
    updateKnowledge(-4);
    expect(player.knowledge).toEqual(1);
  });
});

describe("updateHappiness function", () => {
  test("correctly adds value to player happiness", () => {
    player.happiness = 5;
    updateHappiness(4);
    expect(player.happiness).toEqual(9);
  });
  test("correctly subtracts value from player happiness", () => {
    player.happiness = 5;
    updateHappiness(-4);
    expect(player.happiness).toEqual(1);
  });
});

describe("limitNumber function", () => {
  test("correctly limits number with given min/max limits", () => {
    const numberToLimit = 5 + 30;
    const limitedNumber = limitNumber(numberToLimit, 0, 30);
    expect(limitedNumber).toEqual(30);
  });
  test("correctly limits number with no given min/max limit, default to 0, 10", () => {
    const numberToLimit = 5 - 30;
    const limitedNumber = limitNumber(numberToLimit);
    expect(limitedNumber).toEqual(0);
  });
});

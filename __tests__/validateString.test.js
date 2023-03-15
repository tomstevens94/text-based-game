const { isValidString } = require("../validation/validateString");

describe("Test string validation function", () => {
  test("should return error message when given string including numbers", () => {
    const invalidString = "thomas32";

    const isValid = isValidString(invalidString);

    expect(isValid).toEqual("Please use letters only");
  });

  test("should return error message when given string including special characters", () => {
    const invalidString = "thomas!!!";

    const isValid = isValidString(invalidString);

    expect(isValid).toBe("Please use letters only");
  });

  test("should return error message when given number value", () => {
    const invalidValue = 123;

    const isValid = isValidString(invalidValue);

    expect(isValid).toBe("Please enter a valid name");
  });

  test("should return error message when given object value", () => {
    const invalidValue = { name: "tom" };

    const isValid = isValidString(invalidValue);

    expect(isValid).toBe("Please enter a valid name");
  });

  test("should return error message when given empty string", () => {
    const invalidString = "";

    const isValid = isValidString(invalidString);

    expect(isValid).toBe("Please enter your name");
  });

  test('should not return string value "true" when given valid string', () => {
    const validString = "Thomas the tank engine";

    const isValid = isValidString(validString);

    expect(isValid).not.toBe("true");
  });

  test("return boolean value true when given valid string", () => {
    const validString = "Thomas the tank engine";

    const isValid = isValidString(validString);

    expect(isValid).toBe(true);
  });
});

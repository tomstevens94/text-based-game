function isValidString(str) {
  if (typeof str !== "string") return "Please enter a valid name"; // Input is not a string
  if (!str.length) return "Please enter your name";
  if (!str.replace(/\s/g, "").match(/^[A-Za-z]+$/g))
    return "Please use letters only"; // Input can only contain letters or whitespace

  return true;
}

module.exports = {
  isValidString,
};

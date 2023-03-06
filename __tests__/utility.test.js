const { capitalise } = require("../utility");

describe('Capitalise utility function', () => {
  test('Should correctly capitalise a single word', () => {
    const value = capitalise('jEReMy');

    expect(value).toBe('Jeremy');
  });

  test('Should correctly capitalise multiple words', () => {
    const value = capitalise('tHoMAs THe tanK EngiNe');

    expect(value).toBe('Thomas The Tank Engine');
  });

  test('Should have no effect on numbers, or special characters', () => {
    const value = capitalise('tHoMAs THe tanK EngiNe12!!');

    expect(value).toBe('Thomas The Tank Engine12!!');
  });
});
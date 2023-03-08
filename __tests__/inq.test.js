
const inquirer = require('inquirer');

jest.mock('inquirer');
describe('enter name', () => {
  test('user input', async () => {
    expect.assertions(1);
    inquirer.prompt = jest.fn().mockResolvedValue({ name: 'john doe' });
    const { player, owner } = require('../characters');
    await expect(player.name).toEqual('john doe');
  });
});
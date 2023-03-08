const {
    enterName
} = require('../functions/inq');

const {
    player
} = require('../characters');

const inquirer = require('inquirer');
jest.mock('inquirer');

describe('enterName function', () => {
    test('Should capitalise and update player name', async () => {
        inquirer.prompt.mockResolvedValue({name: 'toMmY tUCKER'});

        await enterName();

        expect(player.name).toBe('Tommy Tucker');
    });
})
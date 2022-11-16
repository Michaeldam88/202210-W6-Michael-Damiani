import { newPhase } from '../js/newPhase.js';

describe('Given a table of [[0, 0, 0],[1, 1, 1],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ];

    const newTable = newPhase(gameTable);

    const result = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];

    test(`it should return [[1, 1, 1],[1, 1, 1],[1, 1, 1]]`, () => {
        expect(newTable).toStrictEqual(result);
    });
});

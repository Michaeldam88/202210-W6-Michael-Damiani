import { checkCase } from '../js/checkCase.js';

describe('Given a table of [[0, 0, 0],[0, 1, 1],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0],
    ];
    const rowI = 1;
    const columnI = 1;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check  the central cell it should return 0`, () => {
        expect(check).toBe(0);
    });
});

describe('Given a table of [[0, 0, 0],[1, 1, 1],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ];
    const rowI = 1;
    const columnI = 1;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check  the central cell it should return 1`, () => {
        expect(check).toBe(1);
    });
});

describe('Given a table of [[0, 0, 0],[1, 1, 1],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ];
    const rowI = 0;
    const columnI = 0;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check the first cell o the top left should return 1`, () => {
        expect(check).toBe(1);
    });
});

describe('Given a table of [[0, 0, 0],[0, 0, 0],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const rowI = 1;
    const columnI = 1;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check  the central cell it should return 0`, () => {
        expect(check).toBe(0);
    });
});

describe('Given a table of [[0, 0, 0],[1, 1, 1],[0, 0, 0]]', () => {
    const gameTable = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ];
    const rowI = 2;
    const columnI = 2;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check the first cell o the top left should return 1`, () => {
        expect(check).toBe(1);
    });
});

describe('Given a table of [[0, 1, 0],[1, 1, 1],[0, 1, 0]]', () => {
    const gameTable = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
    ];
    const rowI = 0;
    const columnI = 1;
    const element = gameTable[rowI][columnI];
    const check = checkCase(element, rowI, columnI, gameTable);

    test(`if we check the second cell o the top should return 0`, () => {
        expect(check).toBe(0);
    });
});

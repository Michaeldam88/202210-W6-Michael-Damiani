import { generateRandomTable } from '../js/randomTable.js';

describe('Given a table of 3x3 and a live cell of 3', () => {
    const arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const newTable = generateRandomTable(arr, 3);
    let result = 0;
    newTable.forEach((element) => {
        element.forEach((el) => {
            if (el === 0) result++;
        });
    });

    test(`it should return 6`, () => {
        expect(result).toBe(6);
    });
});

describe('Given a table of 3x3 and a live cell of 15', () => {
    const arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const newTable = generateRandomTable(arr, 15);
    let result = 0;
    newTable.forEach((element) => {
        element.forEach((el) => {
            if (el === 1) result++;
        });
    });

    test(`it should return 9`, () => {
        expect(result).toBe(9);
    });
});

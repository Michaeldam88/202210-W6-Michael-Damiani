import { createTable } from '../js/createTable.js';

describe('Given a value of 3', () => {
    const result = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    const newTable = createTable(3);

    test(`it should return [[0, 0, 0],[0, 0, 0],[0, 0, 0]]`, () => {
        expect(newTable).toStrictEqual(result);
    });
});

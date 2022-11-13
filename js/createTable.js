export const createTable = (tableSize) => {
    const gameTable = [];
    for (let i = 0; i < tableSize; i++) {
        const newRow = [];
        for (let i = 0; i < tableSize; i++) {
            newRow.push(0);
        }
        gameTable.push(newRow);
    }
    return gameTable;
};

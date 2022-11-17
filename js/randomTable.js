export const generateRandomTable = (gameTable, liveCells) => {
    let i = 0;
    const maxLiveCells = gameTable.length * gameTable.length;

    if (liveCells > maxLiveCells) {
        liveCells = maxLiveCells;
    }
    while (i < liveCells) {
        let randomRow = Math.floor(Math.random() * gameTable.length);
        let randomColumn = Math.floor(Math.random() * gameTable.length);

        if (gameTable[randomRow][randomColumn] === 0) {
            gameTable[randomRow][randomColumn] = 1;
            i++;
        }
    }
    return gameTable;
};

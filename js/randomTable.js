export const generateRandomTable = (gameTable, liveCells) => {
    let i = 0;
    while (i < liveCells) {
        let randomRow = Math.floor(Math.random() * (gameTable.length - 1));
        let randomColumn = Math.floor(Math.random() * (gameTable.length - 1));

        if (gameTable[randomRow][randomColumn] === 0) {
            gameTable[randomRow][randomColumn] = 1;
            i++;
        }
    }
    return gameTable;
};

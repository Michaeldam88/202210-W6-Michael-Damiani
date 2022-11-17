export const checkCase = (element, rowI, columnI, gameTable) => {
    let liveElements = 0;
    let rowPlus = rowI + 1;
    let rowLess = rowI - 1;
    let columnPlus = columnI + 1;
    let columnLess = columnI - 1;

    if (gameTable[rowLess] === undefined) {
        rowLess = gameTable.length - 1;
    }
    if (gameTable[columnLess] === undefined) {
        columnLess = gameTable[rowI].length - 1;
    }
    if (gameTable[rowPlus] === undefined) {
        rowPlus = 0;
    }
    if (gameTable[columnPlus] === undefined) {
        columnPlus = gameTable[rowI][0];
    }

    liveElements += gameTable[rowI][columnLess];
    liveElements += gameTable[rowI][columnPlus];

    liveElements += gameTable[rowLess][columnLess];
    liveElements += gameTable[rowLess][columnI];
    liveElements += gameTable[rowLess][columnPlus];

    liveElements += gameTable[rowPlus][columnLess];
    liveElements += gameTable[rowPlus][columnI];
    liveElements += gameTable[rowPlus][columnPlus];

    if (element === 1) {
        if (liveElements > 3 || liveElements < 2) return 0;
        return 1;
    }
    if (liveElements === 3) return 1;
    return 0;
};

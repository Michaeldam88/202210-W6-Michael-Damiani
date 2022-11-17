export const updateTable = (rowI, columnI, checkResult) => {
    const newDivElement = document.getElementById(`row${rowI}col${columnI}`);
    if (checkResult === 1) {
        newDivElement.className = 'liveCells';
    } else {
        newDivElement.className = 'deadCells';
    }
};

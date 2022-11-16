export const updateTable = (rowI, columnI, checkResult) => {
    const newDivElement = document.getElementById(`position${rowI}${columnI}`);
    if (checkResult === 1) {
        newDivElement.className = 'liveCells';
    } else {
        newDivElement.className = 'deadCells';
    }
};

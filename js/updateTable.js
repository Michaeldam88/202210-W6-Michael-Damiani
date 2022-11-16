

const newDivElement = document.createElement('div');
if (checkResult === 1) {
    newDivElement.className = 'liveCells';
    aliveCells++;
} else {
    newDivElement.className = 'deadCells';
}

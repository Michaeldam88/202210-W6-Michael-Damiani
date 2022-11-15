import { checkCase } from './checkCase.js';

const displayContainerDiv = document.getElementById('displayContainer');

export const newPhase = (gameTable) => {
    let newTableSituation = [];
    let aliveCells = 0;
    displayContainerDiv.innerHTML = '';

    gameTable.forEach((row, rowI) => {
        const newRowDiv = document.createElement('div');
        newRowDiv.className = 'newRowDiv';
        const newRow = [];

        row.forEach((element, columnI) => {
            const checkResult = checkCase(element, rowI, columnI, gameTable);
            newRow.push(checkResult);

            const newDivElement = document.createElement('div');
            if (checkResult === 1) {
                newDivElement.className = 'liveCells';
                aliveCells++;
            } else {
                newDivElement.className = 'deadCells';
            }
            newRowDiv.appendChild(newDivElement);
        });

        newTableSituation.push(newRow);
        displayContainerDiv.appendChild(newRowDiv);
    });

    if (aliveCells === 0) newTableSituation = [0];
    return newTableSituation;
};

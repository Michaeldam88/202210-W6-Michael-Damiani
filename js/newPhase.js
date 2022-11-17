import { checkCase } from './checkCase.js';
import { updateTable } from './updateTable.js';

export const newPhase = (gameTable) => {
    let newTableSituation = [];
    let aliveCells = 0;

    gameTable.forEach((row, rowI) => {
        const newRow = [];
        row.forEach((element, columnI) => {
            const checkResult = checkCase(element, rowI, columnI, gameTable);
            newRow.push(checkResult);
            if (checkResult === 1) {
                aliveCells++;
            }
            if (element !== checkResult) {
                updateTable(rowI, columnI, checkResult);
            }
        });
        newTableSituation.push(newRow);
    });

    if (aliveCells === 0) newTableSituation = [0];
    return newTableSituation;
};

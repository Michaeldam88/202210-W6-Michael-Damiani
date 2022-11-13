import { checkCase } from './checkCase.js';
export const newPhase = (gameTable) => {
    const newTableSituation = [];
    gameTable.forEach((row, rowI) => {
        const newRow = [];
        row.forEach((element, columnI) => {
            newRow.push(checkCase(element, rowI, columnI, gameTable));
        });
        newTableSituation.push(newRow);
    });
    return newTableSituation;
};

import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';

const tableSize = 30;

let gameTable = createTable(tableSize);

//asignación de punto de inicio manual para testear
gameTable[1][2] = 1;
gameTable[2][2] = 1;
gameTable[3][2] = 1;
gameTable[4][2] = 1;
gameTable[5][2] = 1;

const showNewTable = () => {
    gameTable = newPhase(gameTable);
    console.table(gameTable);
};

setInterval(showNewTable, 1000);

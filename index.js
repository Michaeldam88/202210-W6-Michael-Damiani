import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';

const tableSize = 4;
let gameTable = createTable(tableSize);

//asignación de punto de inicio manual para testear
gameTable[0][1] = 1;
gameTable[1][1] = 1;
gameTable[2][1] = 1;

console.table(gameTable);
gameTable = newPhase(gameTable);
console.table(gameTable);

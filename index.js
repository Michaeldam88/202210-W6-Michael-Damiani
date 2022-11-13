import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';

const startSimulation = document.getElementById('start');
const stopSimulation = document.getElementById('stop');
const tableSize = document.getElementById('tableSize');

let tableUpdate;
let gameTable;

const showNewTable = () => {
    gameTable = newPhase(gameTable);
    console.table(gameTable);
};

startSimulation.addEventListener('click', () => {
    gameTable = createTable(tableSize.value);

    //asignación de punto de inicio manual para testear
    gameTable[1][2] = 1;
    gameTable[2][2] = 1;
    gameTable[3][2] = 1;
    gameTable[4][2] = 1;
    gameTable[5][2] = 1;
    tableUpdate = setInterval(showNewTable, 1000);
});

stopSimulation.addEventListener('click', () => {
    window.clearInterval(tableUpdate);
});

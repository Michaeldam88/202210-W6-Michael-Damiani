import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';
import { generateRandomTable } from './js/randomTable.js';

const startSimulation = document.getElementById('start');
const stopSimulation = document.getElementById('stop');
const tableSize = document.getElementById('tableSize');
const liveCells = document.getElementById('liveCells');

let tableUpdate;
let gameTable;

const showNewTable = () => {
    gameTable = newPhase(gameTable);    
};

startSimulation.addEventListener('click', () => {
    gameTable = createTable(tableSize.value);
    gameTable = generateRandomTable(gameTable, liveCells.value);    
    tableUpdate = setInterval(showNewTable, 1000);
});

stopSimulation.addEventListener('click', () => {
    window.clearInterval(tableUpdate);
});

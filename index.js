import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';
import { generateRandomTable } from './js/randomTable.js';
import { displayTable } from './js/displayTable.js';

const startSimulation = document.getElementById('start');
const stopSimulationBtn = document.getElementById('stop');
const tableSize = document.getElementById('tableSize');
const liveCells = document.getElementById('liveCells');
const refreshTime = document.getElementById('refreshTime');
const turnsDisplay = document.getElementById('turnsDisplay');
const displayContainerDiv = document.getElementById('displayContainer');

let tableUpdate;
let gameTable;
let turnNumber;

const showNewTable = () => {
    gameTable = newPhase(gameTable);

    if (gameTable[0] === 0) {
        window.clearInterval(tableUpdate);
        displayContainerDiv.textContent = 'No Alive Cells';
    }
    turnNumber++;
    turnsDisplay.value = turnNumber;
};

startSimulation.addEventListener('click', () => {
    gameTable = createTable(tableSize.value);
    displayTable(gameTable);
    gameTable = generateRandomTable(gameTable, liveCells.value);
    tableUpdate = setInterval(showNewTable, refreshTime.value * 1000);
    turnNumber = 0;
    turnsDisplay.value = turnNumber;
});

stopSimulationBtn.addEventListener('click', () => {
    window.clearInterval(tableUpdate);
});

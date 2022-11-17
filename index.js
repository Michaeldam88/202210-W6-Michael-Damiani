import { createTable } from './js/createTable.js';
import { newPhase } from './js/newPhase.js';
import { generateRandomTable } from './js/randomTable.js';
import { displayTable } from './js/displayTable.js';

const startSimulation = document.getElementById('start');
const stopSimulationBtn = document.getElementById('stop');
const resetSimulationBtn = document.getElementById('reset');
const tableSize = document.getElementById('tableSize');
const liveCells = document.getElementById('liveCells');
const refreshTime = document.getElementById('refreshTime');
const turnsDisplay = document.getElementById('turnsDisplay');
const displayContainerDiv = document.getElementById('displayContainer');
const colorSelector = document.querySelectorAll('button.colorSelector');

let tableUpdate;
let gameTable;
let turnNumber;
let running = false;
let paused = false;

const showNewTable = () => {
    running = true;
    gameTable = newPhase(gameTable);
    if (gameTable[0] === 0) {
        window.clearInterval(tableUpdate);
        running = false;
        paused = false;
        displayContainerDiv.textContent = 'No Alive Cells';
    }
    turnNumber++;
    turnsDisplay.value = turnNumber;
};

startSimulation.addEventListener('click', () => {
    if (running) return;
    if (paused) {
        paused = false;
        tableUpdate = setInterval(
            showNewTable,
            1000 / (refreshTime.value === '0' ? 1 : refreshTime.value)
        );
    } else {
        gameTable = createTable(tableSize.value);
        displayTable(gameTable);
        gameTable = generateRandomTable(gameTable, liveCells.value);
        tableUpdate = setInterval(
            showNewTable,
            1000 / (refreshTime.value === '0' ? 1 : refreshTime.value)
        );
        turnNumber = 0;
        turnsDisplay.value = turnNumber;
    }
});

stopSimulationBtn.addEventListener('click', () => {
    window.clearInterval(tableUpdate);
    running = false;
    paused = true;
});

resetSimulationBtn.addEventListener('click', () => {
    window.clearInterval(tableUpdate);
    gameTable = createTable(0);
    displayTable(gameTable);
    running = false;
    paused = false;
});

colorSelector.forEach((element, i) => {
    element.addEventListener('click', () => {
        displayContainerDiv.classList.remove();

        if (i === 0)
            displayContainerDiv.className = 'displayContainer colorBlueGreen';
        if (i === 1)
            displayContainerDiv.className = 'displayContainer colorRedYellow';
        if (i === 2)
            displayContainerDiv.className = 'displayContainer colorPurpleRed';
    });
});

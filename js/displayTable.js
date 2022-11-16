const displayContainerDiv = document.getElementById('displayContainer');

export const displayTable = (gameTable) => {
    displayContainerDiv.innerHTML = '';

    gameTable.forEach((row, rowI) => {
        const newRowDiv = document.createElement('div');
        newRowDiv.className = 'newRowDiv';

        row.forEach((_element, columnI) => {
            const newDivElement = document.createElement('div');
            newDivElement.className = 'deadCells';
            newDivElement.id = `position${rowI}${columnI}`;
            newRowDiv.appendChild(newDivElement);
        });
        displayContainerDiv.appendChild(newRowDiv);
    });
};

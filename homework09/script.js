let main = document.querySelector('.main');

function generateColor () {
    const color = Math.floor(Math.random()*16777215).toString(16);
    return '#'+color
}

function generateBlocksInt() {
    for (let i=0; i<25; i++) {
    const smallestUnit = document.createElement('div');
smallestUnit.style.width = '50px';
smallestUnit.style.height = '50px';
setInterval(()=>smallestUnit.style.backgroundColor = generateColor(), 1000)
main.appendChild(smallestUnit);
}
return main;
}

generateBlocksInt();
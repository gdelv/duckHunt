const zoo = document.querySelector('.zoo');
const scoreElement = document.querySelector('.score .value')
const socket = io();

const ducksById = {};

const collectDuck = (duck) => {
    return () => {
        socket.emit('collect-duck', {
            id: duck.id,
        });
        if (ducksById[duck.id]) {
            ducksById[duck.id].remove();
            delete ducksById[duck.id];
        }
    }
}

const updateView = (gameState) => {
    scoreElement.textContent = gameState.ducksCollected;
    gameState.ducks.forEach((duck) => {
        if(!ducksById[duck.id]) {
            const duckElement = document.createElement('span')
            duckElement.classList.add('emoji')
            duckElement.classList.add('animal')
            duckElement.textContent = duck .emoji;
            ducksById[duck.id] = duckElement
            duckElement.addEventListener('click', collectDuck(duck))
            zoo.appendChild(duckElement)
        }
        ducksById[duck.id].style.top = duck.location.y * window.innerHeight + 'px'
        ducksById[duck.id].style.left = duck.location.x * window.innerWidth + 'px'

    })
    console.log(gameState)
}
socket.on('game-state', updateView)
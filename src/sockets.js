const SocketIO = require('socket.io');


module.exports = (server) => {
    const io = SocketIO(server);

    const gameState = {
        ducksCollected: 0,
        ducks: [{
            id: 0,
            emoji: "🦆",
            location: {
                x: Math.random(),
                y: Math.random(),
            }
        },
        {
            id: 1,
            emoji: "🦆",
            location: {
                x: Math.random(),
                y: Math.random(),
            }
        },
        {
            id: 2,
            emoji: "🦆",
            location: {
                x: Math.random(),
                y: Math.random(),
            }
        },
        {
            id: 3,
            emoji: "🦆",
            location: {
                x: Math.random(),
                y: Math.random(),
            }
        },
        {
            id: 4,
            emoji: "🦆",
            location: {
                x: Math.random(),
                y: Math.random(),
            }
        }
    ]
    };

    io.on('connection', (socket) => {
        socket.on('collect-duck', ({ id }) => {
            gameState.ducksCollected += 1;
            gameState.ducks = gameState.ducks.filter(duck => duck.id !== id);
            gameState.ducks.push({
                id: gameState.ducks[gameState.ducks.length - 1].id + 1,
                emoji: "🦆",
                location: {
                    x: Math.random(),
                    y: Math.random(),
                }
            })
        })
    });

    setInterval(() => {
        io.emit('game-state', gameState)
    }, 1000)
}
const SocketIO = require('socket.io');


module.exports = (server) => {
    const io = SocketIO(server);

    const gameState = {
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
        console.log('a user connected');
    });

    setInterval(() => {
        io.emit('game-state', gameState)
    }, 1000)
}
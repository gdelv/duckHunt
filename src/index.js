const path = require('path')
const express = require('express')

const app = express ()
const staticPath = path.join(__dirname,'..', 'public')
app.use(express.static(staticPath))
PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
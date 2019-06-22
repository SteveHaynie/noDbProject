const express = require('express');
const app = express();
const cors = require('cors');


const db =[];


app.use(cors());

app.get('/', (req, res) => {
    res.send(db)

})

app.listen(8080, () => {
    console.log('listening on port 8080')

})
const express = require('express');
const app = express();
const cors = require('cors');


const players =[
    'test1', 'test2', 'test3'

];
const positions = {
pos1: players[0],
pos2: players[1],
pos3: players[2],
pos4: players[3]

}

app.use(cors());

app.get('/positions', (req, res) => {
    res.send(positions)

})

app.get('/players', (req, res) => {
    res.send(players)

})

app.post ('/addplayer', (req, res) => {
  
    players.push(req.body);
    // step 3. send the same crystal with the new id added
    res.send(players);
  })





app.listen(8080, () => {
    console.log('listening on port 8080')

})
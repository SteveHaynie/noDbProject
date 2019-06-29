const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const players = [];
let positions = {
  pos1: "Round 1",
  pos2: "Round 1",
  pos3: "Round 1",
  pos4: "Round 1",
  pos5: "Round 1",
  pos6: "Round 1",
  pos7: "Round 1",
  pos8: "Round 1",
  pos9: "Round 2",
  pos10: "Round 2",
  pos11: "Round 2",
  pos12: "Round 2",
  pos13: "Round 3",
  pos14: "Round 3",
  pos15: "Champion!"
};

app.use(bodyParser.json());
app.use(cors());

app.get("/positions", (req, res) => {
  res.send(positions);
});

app.get("/players", (req, res) => {
  res.send(players);
});

app.post("/players", (req, res) => {
  players.push(req.body.newPlayer);
  positions[`pos${players.length}`] = req.body.newPlayer;
  

  res.send({ positions, players });
});


app.put('/players/win', (req, res) => {
    if(req.body.pos === 1 || req.body.pos === 2){
        positions.pos9 = req.body.name
        res.send({players, positions})
    }
    else if(req.body.pos === 3 || req.body.pos === 4){
        positions.pos10 = req.body.name
        res.send({players, positions})
    }
    else if(req.body.pos === 5 || req.body.pos === 6){
        positions.pos11 = req.body.name
        res.send({players, positions})
    }
    else if(req.body.pos === 7 || req.body.pos === 8){
        positions.pos12 = req.body.name
        res.send({players, positions})
    }
    else if(req.body.pos === 9 || req.body.pos === 10){
      positions.pos13 = req.body.name
      res.send({players, positions})
  }
  else if(req.body.pos === 11 || req.body.pos === 12){
    positions.pos14 = req.body.name
    res.send({players, positions})
}
else if(req.body.pos === 13 || req.body.pos === 14){
  positions.pos15 = req.body.name
  res.send({players, positions})
}

})

app.put("/players", (req, res) => {
  const length = players.length;
  positions = {
    pos1: "Round 1",
  pos2: "Round 1",
  pos3: "Round 1",
  pos4: "Round 1",
  pos5: "Round 1",
  pos6: "Round 1",
  pos7: "Round 1",
  pos8: "Round 1",
  pos9: "Round 2",
  pos10: "Round 2",
  pos11: "Round 2",
  pos12: "Round 2",
  pos13: "Round 3",
  pos14: "Round 3",
  pos15: "Champion!"
  };
  players.splice(0, length);
  res.send({players, positions});
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});

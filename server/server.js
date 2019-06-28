const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const players = [];
let positions = {
  pos1: "",
  pos2: "",
  pos3: "",
  pos4: "",
  pos6: "",
  pos7: "",
  pos8: "",
  pos9: "",
  pos10: "",
  pos11: "",
  pos12: "",
  pos13: "",
  pos14: "",
  pos15: ""
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
    pos1: '',
    pos2: '',
    pos3: '',
    pos4: '',
    pos5: '',
    pos6: '',
    pos7: '',
    pos8: '',
    pos9: "",
    pos10: "",
    pos11: "",
    pos12: "",
    pos13: "",
    pos14: "",
    pos15: ""
  };
  players.splice(0, length);
  res.send({players, positions});
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});

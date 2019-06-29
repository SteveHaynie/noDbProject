import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import axios from "axios";






class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
      positions: {},
      newPlayer: "",
      toggleWinner: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.handleWinner = this.handleWinner.bind(this);
    this.handleWinFinal = this.handleWinFinal.bind(this);
  }

  componentDidMount() {
    document.title ="Bracket Generator";
    axios
      .get("http://localhost:8080/players")
      .then(response => this.setState({ players: response.data }))
      .catch(console.error);
    axios
      .get("http://localhost:8080/positions")
      .then(response => this.setState({ positions: response.data }))
      .catch(console.error);
  }

  handleClick() {
    const players = this.state.players;

    if (players.length < 8) {
      axios
        .post("http://localhost:8080/players", {
          newPlayer: this.state.newPlayer
        })
        .then(response =>
          this.setState({
            positions: response.data.positions,
            players: response.data.players,
            newPlayer: ""
          })
        )
        .catch(console.error);
    } else {
      alert("Too many players");
      this.setState({ newPlayer: "" });
    }
  }

  handleChange(e) {
    this.setState({ newPlayer: e.target.value });
  }

  handleClear() {
    axios
      .put("http://localhost:8080/players", { players: [] })
      .then(response =>
        this.setState({
          players: response.data.players,
          positions: response.data.positions,
          toggleWinner: false
        })
      )
      .catch(console.error);
  }

  handleWin(name, pos) {
  
    axios
      .put("http://localhost:8080/players/win", { name, pos })
      .then(response =>
        this.setState({
          players: response.data.players,
          positions: response.data.positions
        })
      )
      .catch(console.error);
     
  }
  handleWinFinal(name, pos) {
  
    axios
      .put("http://localhost:8080/players/win", { name, pos })
      .then(response =>
        this.setState({
          players: response.data.players,
          positions: response.data.positions
        })
      )
      .catch(console.error);
      this.setState({toggleWinner: true})
  }

  handleWinner () {
    
    return <div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
  </div>
  

  }

  render() {
    
    return (
      <div className="App">
      
        <Header
          newPlayer={this.handleChange}
          addPlayer={this.handleClick}
          clear={this.handleClear}
          value={this.state.newPlayer}
          toggleWinner={this.state.toggleWinner}
        />
        <Body
          players={this.state.players}
          positions={this.state.positions}
          submit={this.state.handleClick}
          win={this.handleWin}
          handleWinFinal={this.handleWinFinal}
          winner={this.handleWinner}
          toggleWinner={this.state.toggleWinner}
        />
      </div>
    );
  }
}

export default App;

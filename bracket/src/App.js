import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
      positions: {},
      newPlayer: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  componentDidMount() {
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
    
    axios
    .post('http://localhost:8080/addPlayer', this.state.newPlayer)
    .then(() => axios.get('http://localhost:8080/players'))
    .then(response => this.setState({ players: response.data }))
    .catch(console.error);
}
  

  handleChange(e) {
    this.setState({ newPlayer: e.target.value });
  
  }
  render() {
    console.log(this.state, "this is state");
    return (
      <div className="App">
        <Header
        newPlayer={this.handleChange}
        addPlayer={this.handleClick}
         />
        <Body
          players={this.state.players}
          submit={this.state.handleClick}
          
        />
      </div>
    );
  }
}

export default App;

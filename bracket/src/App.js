import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Body from './Body/Body.js';
import Axios from 'axios';


class App extends React.Component {
constructor() {
  super();

  this.state = {
    players:[],
    positions:{}

  }
}
async componentDidMount() {
  const response = await Axios.get('http://localhost:8080');
  console.log(response.data);
}


  render (){
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
  }}


export default App;

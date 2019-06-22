import React from 'react';
import './Header.css';
import Axios from 'axios';

class Header extends React.Component {

handleChange () {
  

}

handleClick () {
    console.log()

}

    render () {
  return (
    <div className="Header">
        <h1 className="title">Bracket Gen v 1.0</h1>
        <div>Please Input Name</div>
        <input placeholder="name" ></input>
        <button onClick={this.state.handleClick}>Submit</button>
    </div>
  );
}}

export default Header;
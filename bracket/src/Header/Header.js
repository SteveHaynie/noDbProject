import React from 'react';
import './Header.css';


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
        <input placeholder="name" onChange={this.props.newPlayer} ></input>
        <button onClick={this.props.addPlayer}>Submit</button>
    </div>
  );
}}

export default Header;
import React from 'react';
import './Header.css';


class Header extends React.Component {
  


handleSubmit =  (event)  =>{
  event.preventDefault()
  this.props.addPlayer()

}
    render () {
  return (
    <div className="Header">
        <h1 className="title">Bracket Gen v 1.0</h1>
        <p>Please Input Player Name</p>
       <div className="buttons">
       <form onSubmit={this.handleSubmit}>
        <input placeholder="name" value={this.props.value} onChange={this.props.newPlayer} ></input>
        <input className="headButtons" type='submit' value='Add Player'/>
        {/* <button onClick={this.props.addPlayer}>Add Player</button> */}
         </form>
        <button className="headButtons" onClick={this.props.clear}>Clear All Players</button>
         </div>
    </div>
  );
}}

export default Header;
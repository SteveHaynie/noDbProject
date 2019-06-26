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
        <div>Please Input Player Name</div>
       <div className="buttons">
       <form onSubmit={this.handleSubmit}>
        <input placeholder="name" value={this.props.value} onChange={this.props.newPlayer} ></input>
        <input type='submit' value='addPlayer'/>
        {/* <button onClick={this.props.addPlayer}>Add Player</button> */}
         </form>
        <button onClick={this.props.clear}>Clear All Players</button>
         </div>
    </div>
  );
}}

export default Header;
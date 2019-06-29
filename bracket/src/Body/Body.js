import React from "react";
import "./Body.css";

class Body extends React.Component {


  render() {
    return (
      
      <div className="Body">
       {this.props.toggleWinner?this.props.winner():null}
        <div className="row1">
          <div className="box">
            <div className="positions">{this.props.positions.pos1}</div>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos1, 1);
              }}
            >
              Win
            </button>
            <div className="space" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos2, 2);
              }}
            >
              Win
            </button>
            <div className="positions">{this.props.positions.pos2}</div>
          </div>

          <div className="box">
            <div className="positions">{this.props.positions.pos3}</div>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos3, 3);
              }}
            >
              Win
            </button>
            <div className="space" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos4, 4);
              }}
            >
              Win
            </button>
            <div className="positions">{this.props.positions.pos4}</div>
          </div>

          <div className="box">
            <div className="positions">{this.props.positions.pos5}</div>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos5, 5);
              }}
            >
              Win
            </button>
            <div className="space" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos6, 6);
              }}
            >
              Win
            </button>
            <div className="positions">{this.props.positions.pos6}</div>
          </div>

          <div className="box">
            <div className="positions">{this.props.positions.pos7}</div>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos7, 7);
              }}
            >
              Win
            </button>
            <div className="space" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos8, 8);
              }}
            >
              Win
            </button>
            <div className="positions">{this.props.positions.pos8}</div>
          </div>
        </div>

        <div className="row1">
          <div className="box1">
            <div className="positions">{this.props.positions.pos9}</div>
            <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos9, 9);
              }}>Win</button>
            <div className="space1" />
            <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos10, 10);
              }}>Win</button>
            <div className="positions">{this.props.positions.pos10}</div>
          </div>
          <div className="box1">
            <div className="positions">{this.props.positions.pos11}</div>
            <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos11, 11);
              }}>Win</button>
            <div className="space1" />
            <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos12, 12);
              }}>Win</button>
            <div className="positions">{this.props.positions.pos12}</div>
          </div>
        </div>


        <div className="row1">
            <div className="box2">
                <div className="positions">{this.props.positions.pos13}</div>
                <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos13, 13);
                
              }}>Win</button>
            </div>
            <div className="box2">
                <button className="winner" onClick={() => {
                this.props.win(this.props.positions.pos14, 14);
              
               


              }}>Win</button>
                <div className="positions">{this.props.positions.pos14}</div>
            </div>
        </div>
        <div className="row4"><div className="positions">{this.props.positions.pos15}</div></div>
      </div>
    );
  }
}

export default Body;

// onClick={() => clickFunction(1, )}

import React from "react";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        {this.props.toggleWinner ? this.props.winner() : null}
        <div className="row1">
          <div className="box">
            <p className="positions">{this.props.positions.pos1}</p>
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
            <p className="positions">{this.props.positions.pos2}</p>
          </div>

          <div className="box">
            <p className="positions">{this.props.positions.pos3}</p>
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
            <p className="positions">{this.props.positions.pos4}</p>
          </div>

          <div className="box">
            <p className="positions">{this.props.positions.pos5}</p>
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
            <p className="positions">{this.props.positions.pos6}</p>
          </div>

          <div className="box">
            <p className="positions">{this.props.positions.pos7}</p>
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
            <p className="positions">{this.props.positions.pos8}</p>
          </div>
        </div>

        <div className="row1">
          <div className="box1">
            <p className="positions">{this.props.positions.pos9}</p>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos9, 9);
              }}
            >
              Win
            </button>
            <div className="space1" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos10, 10);
              }}
            >
              Win
            </button>
            <p className="positions">{this.props.positions.pos10}</p>
          </div>
          <div className="box1">
            <p className="positions">{this.props.positions.pos11}</p>
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos11, 11);
              }}
            >
              Win
            </button>
            <div className="space1" />
            <button
              className="winner"
              onClick={() => {
                this.props.win(this.props.positions.pos12, 12);
              }}
            >
              Win
            </button>
            <p className="positions">{this.props.positions.pos12}</p>
          </div>
        </div>

        <div className="row1">
          <div className="box2">
            <p className="positions">{this.props.positions.pos13}</p>
            <button
              className="winner"
              onClick={() => {
                this.props.handleWinFinal(this.props.positions.pos13, 13);
              }}
            >
              Win
            </button>
          </div>
          <div className="box2">
            <button
              className="winner"
              onClick={() => {
                this.props.handleWinFinal(this.props.positions.pos14, 14);
              }}
            >
              Win
            </button>
            <p className="positions">{this.props.positions.pos14}</p>
          </div>
        </div>
        <div className="row4">
        <div className="box3">
          <p className="positions">{this.props.positions.pos15}</p>
        </div></div>
      </div>
    );
  }
}

export default Body;

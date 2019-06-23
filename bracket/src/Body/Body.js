import React from 'react';
import './Body.css';

class Body extends React.Component {

    render() {
        
  return (
    <div className="Body">
        <div className="row1">
            <div className="box">
                <div className="positions">{this.props.players[0]}</div><button className="winner">Winner</button>
                <div className="positions">{this.props.players[1]}</div><button className="winner">Winner</button>
            </div>
            <div className="box">
                <div className="positions">{this.props.players[2]}</div><button className="winner">Winner</button>
                <div className="positions">{this.props.players[3]}</div><button className="winner">Winner</button>
            </div> <div className="box">
                <div className="positions">{this.props.players[4]}</div><button className="winner">Winner</button>
                <div className="positions">{this.props.players[5]}</div><button className="winner">Winner</button>
            </div> <div className="box">
                <div className="positions">{this.props.players[6]}</div><button className="winner">Winner</button>
                <div className="positions">{this.props.players[7]}</div><button className="winner">Winner</button>
            </div>
         
        
        </div>
        <div className="row2">
                 <div className="box2">
                <div className="positions">pos9</div><button className="winner">Winner</button>
                <div className="positions">pos10</div><button className="winner">Winner</button>
            </div>
            <div className="box2">
                <div className="positions">pos11</div><button className="winner">Winner</button>
                <div className="positions">pos12</div><button className="winner">Winner</button>
            </div> 
        </div>
        <div className="row3">row3</div>
        <div className="row4">row4</div>
    </div>
  );
}}

export default Body;
import React from 'react';
import './Body.css';

class Body extends React.Component {

    render() {
  return (
    <div className="Body">
        <div className="row1">
            <div className="box">
                <div className="positions">pos1</div>
                <div className="positions">pos2</div>
            </div>
            <div className="box">
                <div className="positions">pos3</div>
                <div className="positions">pos4</div>
            </div> <div className="box">
                <div className="positions">pos5</div>
                <div className="positions">pos6</div>
            </div> <div className="box">
                <div className="positions">pos7</div>
                <div className="positions">pos8</div>
            </div>
         
        
        </div>
        <div className="row2">
                 <div className="box2">
                <div className="positions">pos9</div>
                <div className="positions">pos10</div>
            </div>
            <div className="box2">
                <div className="positions">pos11</div>
                <div className="positions">pos12</div>
            </div> 
        </div>
        <div className="row3">row3</div>
        <div className="row4">row4</div>
    </div>
  );
}}

export default Body;
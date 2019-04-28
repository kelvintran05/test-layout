import React, {Component} from 'react';
import './style.scss';
import advertisement from "../../../assets/advertisement.png";


class Advertisement extends Component {
  render() {
    return (
      <div className="advertisement">
        <div className="row">
            <div className="col-lg-6">
               <div className="caption">
                <div className="title">Play.Challenge.Achieve</div>
                <div className="description">The most joyable game platform with your friend</div>
                <button className="button-download"><span>Download Zingplay</span></button>
               </div>
            </div>
            <div className="col-lg-6">
                <img className="advertisement-game" src={advertisement} alt=""/>
            </div>
        </div>     
      </div>
    );
  }
}

export default Advertisement;
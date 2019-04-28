import React, {Component} from 'react';
import './style.scss';
import banner from "../../../assets/banner.png";
import icon_play from "../../../assets/icon_play.png";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
            <img src={banner} alt=""/>
            <div className="caption">
                <div className="title">Samus Aran</div>
                <div className="sub-title">Tribute</div>
                <div className="function">
                    <div className="line"/>
                    <div className="details">
                        {/* <img src={rectangle} alt=""/> */}
                        <button className="title-details">LEARN MORE</button>
                        <i className="icon-right fas fa-angle-right"/>
                    </div>
                    <div className="play">
                        <img src={icon_play} alt=""/>
                        <button className="title-play">Watch gameplay</button>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Banner;
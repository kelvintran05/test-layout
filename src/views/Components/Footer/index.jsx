import React, {Component} from 'react';
import logo_footer from '../../../assets/logo_footer.png';
import icon_coin1 from '../../../assets/icon-coin1.png';
import icon_coin2 from '../../../assets/icon-coin2.png';
import icon_card from '../../../assets/icon-card.png';
import icon_z from '../../../assets/icon-z.png';

import './style.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo-footer">
            <img src={logo_footer} alt=""/>                     
        </div> 
        <div className="footer-menu">
            <a href="#">GAMES</a>
            <a href="#">PAYMENT</a>
            <a href="#">VIDEOS</a>
            <a href="#">NEWS</a>
            <a href="#">ABOUT</a>
        </div>
        <div className="copyright">
            <div>&copy;2019 ZING PLAY.ALL RIGHT RESERVED</div>
            <div>All trademark referenced herein are properties of their respective owners.</div>
        </div>
        <img className="icon-coin1" src={icon_coin1} alt=""/>
        <img className="icon-coin2" src={icon_coin2} alt=""/>
        <img className="icon-card" src={icon_card} alt=""/>
        <img className="icon-z" src={icon_z} alt=""/>

      </div>
    );
  }
}

export default Footer;
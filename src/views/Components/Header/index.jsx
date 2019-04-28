import React, {Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import icon_VN from '../../../assets/icon_VN.png';
import icon_search from '../../../assets/icon_search.png';
import line from '../../../assets/line.png';


import './style.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Brand href="#home">
                <span className="logo">
                    <img src={logo} alt=""/>               
                </span>
            </Navbar.Brand>
            <Navbar.Collapse className="header-page justify-content-center">
                <Nav.Link href="#">HOME</Nav.Link>
                <Nav.Link href="#">GAMES</Nav.Link>
                <Nav.Link href="#">PAYMENT</Nav.Link>
                <Nav.Link href="#">VIDEOS</Nav.Link>
                <Nav.Link href="#">NEWS</Nav.Link>
                <Nav.Link href="#">ABOUT</Nav.Link>
            </Navbar.Collapse>
            <div className="header-option">
                <img src={icon_search} alt=""/>
                <img src={line} alt=""/>
                <img src={icon_VN} alt=""/>
            </div> 
        </Navbar>
      </div>
    );
  }
}

export default Header;
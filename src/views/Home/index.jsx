import React, { Component } from "react";
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Body from '../Components/Body';
import Footer from '../Components/Footer';



import './style.scss';



class Home extends Component {
  render() {
    return (
        <div className="fluid home-page" >
            <Header/>
            <Banner/>
            <Body/>
            <Footer/>
            <div className="arrow">ABC</div>
        </div>
    );
  }
}

export default Home;

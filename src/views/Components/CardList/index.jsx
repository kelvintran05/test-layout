import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './style.scss';
import Game1 from "../../../assets/Game1.png";
import Game2 from "../../../assets/Game2.png";
import Game3 from "../../../assets/Game3.png";
import Game4 from "../../../assets/Game4.png";



class CardList extends Component {
  render() {
    const data = [
      {
        title: "League of Legends",
        description: "League of Legends is a Riot Games-developed inspired by the Defense of the Ancients mod for video games Warcraft III: Frozen Throne.",
        image: Game1
      },
      {
        title: "Angry Birds",
        description: "The game is released by CLickgamer and Rovio. The game is released exclusively through the Getjar server.",
        image: Game2
      },
      {
        title: "Angry Birds: EPIC",
        description: "Angry Birds Epic is the ninth free adventure game bt producer Rovio Entertainment, distributed by Chimera Entertainment.",
        image: Game3
      },
      {
        title: "Ratchet & Clank All 4 One",
        description: "Ratchet & Clank: All 4 One developed by Insomniac Games and released by Sony Computer Entertainment in October 2011.",
        image: Game4
      },
    ];
    return (
      <div className="card-list">
        <Tabs>
          <TabList>
            <Tab>Casual Game</Tab>
            <Tab>Card Games</Tab>
            <button className="view">view all games +</button>
          </TabList>

          <TabPanel>
            <div className="row">
              {data.map((item, key) => (
                <div className="col-lg-3">
                  <div className="card-item">
                    <img src={item.image} alt=""/>
                    <div className="caption">
                      <div className="title">{item.title}</div>
                      <div className="descripton">{item.description}</div>
                    </div>
                    <button className="button-details">Learn more</button>
                  </div>
                </div>
              ))}
            </div>
           
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CardList;
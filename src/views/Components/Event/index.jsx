import React, {Component} from 'react';
import './style.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import event from "../../../assets/event.png";
import event1 from "../../../assets/event1.png";
import event2 from "../../../assets/event2.png";



class Event extends Component {
  render() {
    const data = [
        {
          description: "PUNCH TO WIN - Join the event with thousands of rewards at Zing Play",
          image: event1
        },
        {
          description: "[Search for Golden Eggs List of event winners]",
          image: event2
        }];
    return (
        <div className="event">
            <Tabs>
            <TabList>
                <Tab>Events</Tab>
                <Tab>News</Tab>
                <button className="view">view all games +</button>
            </TabList>
            <TabPanel>
                <div className="row">
                  <div className="col-md-6 no-padding">
                    <img className="image-event" src={event} alt=""/>
                  </div>
                {data.map((item, key) => (
                    <div className="col-md-3">
                      <div className="card-event">
                          <img src={item.image} alt=""/>
                          <div className="descripton">{item.description}</div>
                          <div className="details">
                            <button className="details-title">Learn more</button>
                            <i className="icon-right fas fa-angle-right"/>
                          </div>
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

export default Event;
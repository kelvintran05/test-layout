import React, {Component} from 'react';
import './style.scss';
import CardList from '../CardList';
import Advertisement from '../Advertisement';
import Event from '../Event';

class Body extends Component {
  render() {
    return (
      <div className="body-content">
        <CardList/>
        <Advertisement/>
        <Event/>
      </div>
    );
  }
}

export default Body;
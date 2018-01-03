import React, { Component } from 'react';
import CoinTileList from '../components/Coin_tile_list';

class MyPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div>
        <h1>My Portfolio</h1>
        <CoinTileList
          coins={this.props.coins}
          />
      </div>
    );
  }
}

export default MyPortfolio;

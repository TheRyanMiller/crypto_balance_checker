import React, { Component } from 'react';
import CoinTileList from '../components/Coin_tile_list';
import CoinDetails from '../components/Coin_detail';
//import Axios from 'axios';

class MyPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCoinDetails: false,
      selectedCoin: null

    }
  }

  addressAddHandler = (adress) => {

  }

  componentDidMount(){
    //blockchain.info/q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj?confirmations=6
    /*
    Axios.get('https://blockchain.info/q/addressbalance/3Jp7Sb5TN7HZbfQsCchLAhXPvCPjt6wLi3')
      .then(response =>{
        console.log("Balance = "+response.data / 100000000 +" BTC");
      });

      */
  }

  selectCoinHandler = (id) => {
    let coinIdx = this.props.coins.findIndex(c=>{
      return c.id === id;
    });

    const coins = [...this.props.coins];
    const coin = coins[coinIdx];
    //const person = [...this.state.person][personIdx];

    coins[coinIdx] = coin;
    this.setState({
      selectedCoin:coin,
      showCoinDetails:true}
    );
  }

  render() {
    let portfolioDisplay = null;
    if(this.state.showCoinDetails===false){
      portfolioDisplay = (
        <CoinTileList
          coins={this.props.coins}
          click={this.selectCoinHandler}
        />)
    }
    else{
      portfolioDisplay = (
        <CoinDetails
          coin={this.state.selectedCoin}
          addressAdd={this.props.addressAdd}
          addressDelete={this.props.addressDelete}
        />
      )
    }

    return (
      <div>
        <h1>My Portfolio</h1>
        {portfolioDisplay}
      </div>
    );
  }
}

export default MyPortfolio;

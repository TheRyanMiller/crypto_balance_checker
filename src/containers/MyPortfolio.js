import React, { Component } from 'react';
import CoinTileList from '../components/Coin_tile_list';
import CoinDetails from '../components/Coin_detail';
import Modal from 'react-responsive-modal';

class MyPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCoinDetails: false,
      selectedCoin: null,
      showModal: false

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
      showCoinDetails:false,
      showModal: true
    });
  }

  handleModalClose = () =>{
    this.setState({showModal:false});
  }

  render() {
    let portfolioDisplay = null;

    return (
      <div>
        <h1>My Portfolio</h1>
        <Modal
          open={this.state.showModal}
          onClose={this.handleModalClose}
        >
        <CoinDetails
          coin={this.state.selectedCoin}
          addressAdd={this.props.addressAdd}
          addressDelete={this.props.addressDelete}
        />
        </Modal>
        <CoinTileList
          coins={this.props.coins}
          click={this.selectCoinHandler}
        />
      </div>
    );
  }
}

export default MyPortfolio;

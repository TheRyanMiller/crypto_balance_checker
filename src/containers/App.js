import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navigation/navbar';
import MyPortfolio from './MyPortfolio';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioCoins: [
        { id: '1', name: 'Monero', abbr: 'XMR', addresses:[], imgUrl: "https://lh3.googleusercontent.com/dPT4kQIF5Ee6UTZ5QPXMmlBt3IGp60oHCaqlcVBaraxRcn-yVaKqPXOg5onUw1eCnnc=w300" },
        { id: '2', name: 'Ethereum', abbr: 'ETH', addresses:[], imgUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"},
        { id: '3', name: 'Bitcoin', abbr: 'BTC', addresses:[], imgUrl:"https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png"},
        { id: '4', name: 'Bitcoin Cash', abbr: 'BCH', addresses:[], imgUrl:"https://ih1.redbubble.net/image.410523143.6103/sticker,375x360-bg,ffffff.u1.png"}
      ],
      otherState: 'Some other value'
    }
  }

  addressAdd = (addressVal,coinId) =>{
    console.log("AddressAdd1: ",addressVal);
    console.log("AddressAdd2: ",coinId);
    if (addressVal !== "") {
      let coinIdx = this.state.portfolioCoins.findIndex(c=>{
        return c.id === coinId;
      });
      let newPortfolioCoins = [...this.state.portfolioCoins];
      newPortfolioCoins[coinIdx].addresses.push(addressVal);
      this.setState({portfolioCoins : newPortfolioCoins})
    }
    console.log("NEW STATE: ",this.state.portfolioCoins);
  }

  render() {

    return (
      <div>
        <Navbar buttonText="HOME"/>
        <MyPortfolio
          coins={this.state.portfolioCoins}
          addressAdd={this.addressAdd}
          />
      </div>
    );
  }
}

export default App;

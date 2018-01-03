import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navigation/navbar';
import MyPortfolio from './MyPortfolio';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioCoins: [
        { id: '1', name: 'Monero', abbr: 'XMR', imgUrl: "https://lh3.googleusercontent.com/dPT4kQIF5Ee6UTZ5QPXMmlBt3IGp60oHCaqlcVBaraxRcn-yVaKqPXOg5onUw1eCnnc=w300" },
        { id: '2', name: 'Ethereum', abbr: 'ETH',  imgUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"},
        { id: '3', name: 'Bitcoin', abbr: 'BTC',  imgUrl:"https://seeklogo.com/images/B/bitcoin-logo-DDAEEA68FA-seeklogo.com.png"},
        { id: '4', name: 'Bitcoin Cash', abbr: 'BCH',  imgUrl:"https://ih1.redbubble.net/image.410523143.6103/sticker,375x360-bg,ffffff.u1.png"}
      ],
      otherState: 'Some other value'
    }
  }
  render() {

    return (
      <div>
        <Navbar buttonText="HOME"/>
        <MyPortfolio
          coins={this.state.portfolioCoins}
          />
      </div>
    );
  }
}

export default App;

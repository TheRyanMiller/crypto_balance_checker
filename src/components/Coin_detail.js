import React, { Component } from "react";
import AddressAdder from './Address_adder';
import AddressList from './Address_list';

class CoinDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.coin.name}</h1>
        <AddressAdder
          addressAdd={this.props.addressAdd}
          coin={this.props.coin}
          />
        <AddressList
          coin={this.props.coin}
        />
      </div>
    );
  }
}

export default CoinDetails;

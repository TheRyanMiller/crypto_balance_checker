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
      <div className="CoinDetailsDiv">
        <h1>{this.props.coin.name}</h1>
        <AddressAdder
          addressAdd={this.props.addressAdd}
          coin={this.props.coin}
          />
        <AddressList
          coin={this.props.coin}
          addressDelete={this.props.addressDelete}
        />
      </div>
    );
  }
}

export default CoinDetails;

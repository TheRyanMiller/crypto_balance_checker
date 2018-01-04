import React, { Component } from "react";
import './Address_adder.css';
import './Address_list.css';
import AddressList from './Address_list';

class addressAdder extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
    }
  }

  addItem(e) {

  }

  render() {
    return (
      <div className="addressListMain">
        <div className="header">
            <input placeholder="Enter task"
              ref={(a) => this._inputElement = a}>
            </input>
            <button
              onClick={()=>this.props.addressAdd(this._inputElement.value,this.props.coin.id)}>
              Add
            </button>
        </div>
        <AddressList />
      </div>
    );
  }
}

export default addressAdder;

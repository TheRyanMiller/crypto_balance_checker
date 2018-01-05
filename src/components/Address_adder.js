import React from "react";
import './Address_adder.css';
import './Address_list.css';
import AddressList from './Address_list';

const addressAdder = (props) => {
    return (
      <div className="addressListMain">
        <div className="header">
            <input placeholder="Enter task"
              ref={(a) => this._inputElement = a}>
            </input>
            <button
              onClick={()=>props.addressAdd(this._inputElement.value,props.coin.id)}>
              Add
            </button>
        </div>
        <AddressList />
      </div>
    );
}

export default addressAdder;

import React from "react";
import './Address_list.css';

const addressList = (props) =>{

  console.log("about to iterate",props.coin)//,props.coin.addresses)
  let addressItems = null;
  if(props.coin!==undefined){
    addressItems = props.coin.addresses.map(a=>{
      return (
        <li>
          {a}
        </li>
      )
    });
  }

  console.log("theLIST",addressItems);

  return (
    <div className="AddressListDiv">
      <ul className="theList">
        {addressItems}
      </ul>
    </div>
  );
}

export default addressList;

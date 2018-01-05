import React from "react";
import './Address_list.css';

const addressList = (props) =>{

  console.log("about to iterate",props.coin)//,props.coin.addresses)
  let addressItems = null;
  let i=0;
  if(props.coin!==undefined){
    addressItems = props.coin.addresses.map(a=>{

      return (
        <li onClick={()=>props.addressDelete(a.address,props.coin.id)} key={i++} >
          {a.address}
        </li>
      )
    });
  }

  return (
    <div className="AddressListDiv">
      <ul className="theList">
        {addressItems}
      </ul>
    </div>
  );
}

export default addressList;

import React from 'react';
import './Coin_tile.css';

const coinImgHolder = (props) =>{
  return (
    <div className="tile">
    <img src={props.coin.imgUrl} alt={props.coin.name} height="50" width="50"/>
    <div className="textcontainer">
    <h4>{props.coin.name}</h4>
    </div>
    </div>
  )
}

export default coinImgHolder;

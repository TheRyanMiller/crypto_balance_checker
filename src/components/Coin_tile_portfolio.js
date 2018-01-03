import React from 'react';
import CoinImgHolder from './Coin_img_holder';
//import './Coin_tile.css';

const coinTile = (props) =>{
  return (
    <div>
      <CoinImgHolder coin={props.coin}/>
    </div>
  )
}


export default coinTile;

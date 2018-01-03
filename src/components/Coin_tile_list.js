import React from 'react';
import CoinTile from './Coin_tile_portfolio';

const coinTileList = (props) =>{
  let coinList = props.coins.map(
    (coin,index) => {
      return (
        <CoinTile
          coin={coin}
          change={(e) => props.changed(e,coin.id)}
          click={() => props.clicked(index)}
          key={coin.id}
          />
      )
    }
  )

  return coinList;

}

export default coinTileList;

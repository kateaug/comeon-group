import React, { useState, useEffect } from 'react';
import { string, arrayOf, number, shape} from 'prop-types';
import css from './GameCard.module.scss'

function GameCard({ game }) {

    console.log(game)

 return (
    <div className={css.GameCard}>
         <img
         src={game.icon}
		 alt={game.name}
		/>
        <div className={css.GameCardDetails}>
            <p>{game.name}</p>
            <p>{game.description}</p>
            <button>Play</button>
        </div>
    </div>
 )
}

export default GameCard;

GameCard.propTypes = shape({
  name: string,
  description: string,
  code: string,
  icon: string,
  categoryIds: arrayOf(number)
}).isRequired;
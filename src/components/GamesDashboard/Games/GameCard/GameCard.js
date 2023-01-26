import React from 'react';
import { useNavigate } from 'react-router-dom';

import { string, arrayOf, number, shape} from 'prop-types';
import css from './GameCard.module.scss'

function GameCard({ game }) {
    const navigate = useNavigate();

 return (
    <div className={css.GameCard}>
         <img
         src={game.icon}
		 alt={game.name}
		/>
        <div className={css.GameCardDetails}>
            <p>{game.name}</p>
            <p>{game.description}</p>
          
              <button onClick={() => navigate(`${game.code}`)}>Play</button>
       
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
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { string, arrayOf, number, shape} from 'prop-types';
import css from './GameCard.module.scss'
import Button from '../../shared/Button/Button';

function GameCard({ game }) {
    const navigate = useNavigate();

 return (
    <div className={css.GameCard}>
              <img
              src={game.icon}
              alt={game.name}
          />
        <div className={css.GameCardDetails}>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <Button iconForward onClick={() => navigate(`${game.code}`)} type='submit' kind='secondary' text='play' />
        </div>
    </div>
 )
}

export default GameCard;

GameCard.propTypes = {
  game: shape({
    name: string,
    description: string,
    code: string,
    icon: string,
    categoryIds: arrayOf(number)
  }).isRequired
}
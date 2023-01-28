import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import css from './SelectedGame.module.scss';

function SelectedGame () {
    const { code } = useParams();
    const navigate = useNavigate();

    useEffect(() => 
      window.comeon.game.launch(code)
    , [code]);

    return (
      <div className={css.SelectedGame}>
          <Button iconBack onClick={() => navigate(-1)} type='submit' kind='secondary' text='go back' />
          <div className={css.SelectedGameContainer}>
             <div id='game-launch' />
          </div>
		 </div>
    )
}

export default SelectedGame;
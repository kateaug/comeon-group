import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import css from './SelectedGame.module.scss';

function SelectedGame () {
    const { code } = useParams();
    const navigate = useNavigate();

    useEffect(() => 
      window.comeon.game.launch(code),
	[code]);

    console.log('code', code)
    return (
        <div className={css.SelectedGame}>
				<button onClick={() => navigate(-1)}>Go back</button>
			<div className={css.SelectedGameContainer}>
				<div id='game-launch' />
        	</div>
		</div>
    )
}

export default SelectedGame;
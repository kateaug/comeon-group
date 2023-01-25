import React, { useState, useEffect } from 'react';
import * as games from '../../../api/games';
import GameCard from './GameCard/GameCard';


function Games () {

    const [allGames, setAllGames] = useState()

    useEffect(() => {
        games.getAllGames()
        .then(data => {
          setAllGames(data)
        })
        .catch(error => console.log(error))
    }, [])
      
    return (
        <div>
        {allGames && allGames.map(game => (
          <GameCard game={game} key={game.name} />
        ))} 
         </div>    
    )
}

export default Games;
import React, { useState, useEffect, useMemo } from 'react';
import * as games from '../../api/games';
import GameCard from './GameCard/GameCard';
import GamesCategories from './GamesCategories/GamesCategories';
import UserProfile from './../UserProfile/UserProfile';
import GamesSearch from './GamesSearch/GamesSearch';
import css from './Games.module.scss';
import { isEmptyArray } from '../../helpers';



function Games () {
    const [allGames, setAllGames] = useState([])
    const [categoryId, setCategoryId] = useState('');
    const [searchTerm, setSearchTem] = useState('');
     
    useEffect(() => {
        games.getAllGames()
        .then(data => {
          setAllGames(data)
        })
        .catch(error => console.log(error))
    }, [])

    const filteredGames = useMemo(() => {
        if (categoryId === '') {
            if (searchTerm === '') {
                return allGames;
            } else {
                return allGames.filter((game) => {
                const searchFields = game.name.toLowerCase();
                return searchFields.includes(searchTerm.toLowerCase());
                });
            }
        }

        return allGames.filter((game) => {
          const gameCategory = game.categoryIds.map((val) => val.toString());
          return gameCategory.includes(categoryId);
        });

    }, [categoryId, searchTerm, allGames]);

    useEffect(() => {
        if (searchTerm !== '') {
            setCategoryId('');
        }
    }, [searchTerm]);

    return (
        <div className={css.Games}>
           <div className={css.GamesProfile}>
                <UserProfile /> 
                <GamesSearch searchGames={(e) => setSearchTem(e.target.value)} searchTerm={searchTerm} />
           </div>
           <div className={css.GamesDashboard}> 
                <div className={css.GamesCards}>
                <h2>Games</h2>
                    {filteredGames && filteredGames.map(game => (
                    <GameCard game={game} key={game.name} />
                    ))}
                    {isEmptyArray(filteredGames) && <span>There are no games to display.</span>}
                </div>   
                <GamesCategories selectCategoryType={(e) => setCategoryId(e.target.id)} categoryType={categoryId}/> 
          </div> 
        </div>    
    )
}

export default Games;
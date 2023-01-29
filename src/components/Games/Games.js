import React, { useState, useEffect, useMemo } from 'react';
import * as games from '../../api/games';
import GameCard from './GameCard/GameCard';
import GamesCategories from './GamesCategories/GamesCategories';
import UserProfile from './../UserProfile/UserProfile';
import GamesSearch from './GamesSearch/GamesSearch';
import css from './Games.module.scss';
import { isEmptyArray } from '../../helpers';
import Spinner from '../shared/Spinner/Spinner';
import Message from '../shared/Message/Message';


function Games () {
    const [allGames, setAllGames] = useState([])
    const [categoryId, setCategoryId] = useState('');
    const [searchTerm, setSearchTem] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
     
    useEffect(() => {
        games.getAllGames()
        .then(data => {
          setLoading(true)  
          setAllGames(data)
          setLoading(false)
        })
        .catch(error => setError(true))
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
                    {loading && <Spinner />}
                    {filteredGames && filteredGames.map(game => (
                    <GameCard game={game} key={game.name} />
                    ))}
                    {error && <Message kind='error' children='Something went wrong.' noicon /> }
                    {isEmptyArray(filteredGames) && !error && <span>We're sorry. We were not able to find a match. <br/>Try another search?</span>}
                </div>   
                <GamesCategories selectCategoryType={(e) => setCategoryId(e.target.id)} categoryType={categoryId}/> 
          </div> 
        </div>    
    )
}

export default Games;
import React, { useState, useEffect } from 'react';
import { string, func} from 'prop-types';
import css from './GamesCategories.module.scss';
import * as games from '../../../api/games';

function GamesCategories({ categoryType, selectCategoryType }) {
	const [gamesCategories, setGamesCategories] = useState([]);

	useEffect(() => {
        games.getGamesCategories()
        .then(data => {
            setGamesCategories(data)
        })
        .catch(error => console.log(error))
    }, [])

    console.log('gamesCategories', gamesCategories)

	return (
		<div className={css.GamesCategories}>
			<h2>Categories</h2>
            {gamesCategories && gamesCategories.map(category => (
               <button key={category.name}
                id={category.id}
                value={categoryType}
                type='button'
                className={css.GamesCategoriesBtn}
                onClick={selectCategoryType}
                >
                 {category.name}
               </button>
            ))}
		</div>
	);
}

export default GamesCategories;

GamesCategories.propTypes = {
   categoryType: string.isRequired,
   selectCategoryType: func.isRequired,
};
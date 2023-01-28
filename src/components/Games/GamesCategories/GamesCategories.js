import React, { useState, useEffect } from 'react';
import { string, func, bool} from 'prop-types';
import css from './GamesCategories.module.scss';
import Spinner from '../../shared/Spinner/Spinner';
import Message from '../../shared/Message/Message';
import * as games from '../../../api/games';

function GamesCategories({ categoryType, selectCategoryType, disabled = false }) {
	const [gamesCategories, setGamesCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

	useEffect(() => {
        
        games.getGamesCategories()
        .then(data => {
            setLoading(true);
            setGamesCategories(data)
            setLoading(false);
        })
        .catch(error => setError(true)); 
    }, []);

	return (
		<div className={css.GamesCategories}>
			<h2>Categories</h2>
            <div className={css.GamesCategoriesWrapper}>
                {loading && <Spinner />}
                {gamesCategories && gamesCategories.map(category => (
                <button 
                    key={category.name}
                    id={category.id}
                    value={categoryType}
                    type='button'
                    className={css.GamesCategoriesBtn}
                    onClick={selectCategoryType}
                    disabled={disabled}
                    >
                    {category.name}
                </button>
                ))}
                {error && <Message kind='error' children='Something went wrong.' noicon />}
            </div>
		</div>
	);
}

export default GamesCategories;

GamesCategories.propTypes = {
   categoryType: string.isRequired,
   selectCategoryType: func.isRequired,
   disabled: bool.isRequired
};
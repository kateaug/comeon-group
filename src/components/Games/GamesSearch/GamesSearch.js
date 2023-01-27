import React from 'react'
import { string, func} from 'prop-types';
import css from './GamesSearch.module.scss';

function GamesSearch ({ searchTerm, searchGames}) {
    return (
        <div className={css.GamesSearch}>
            <input
                type='text'
                name='searchGame'
                placeholder='Search Game'
                value={searchTerm}
                onChange={searchGames}
            />
        </div>
    )
};

export default GamesSearch;

GamesSearch.propTypes = {
    searchTerm: string.isRequired,
    searchGames: func.isRequired,
};
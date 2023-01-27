import React from 'react'
import { string, func} from 'prop-types';
import css from './GamesSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function GamesSearch ({ searchTerm, searchGames}) {
    return (
        <div className={css.GamesSearch}>
            <label htmlFor='searchGame'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    type='text'
                    name='searchGame'
                    placeholder='Search Game'
                    value={searchTerm}
                    onChange={searchGames}
                />
            </label>
        </div>
    )
};

export default GamesSearch;

GamesSearch.propTypes = {
    searchTerm: string.isRequired,
    searchGames: func.isRequired,
};
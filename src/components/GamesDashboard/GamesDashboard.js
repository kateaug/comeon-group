import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import Games from './Games/Games'
import css from './GamesDashboard.module.scss'

function GamesDashboard () {
    return (
        <div className={css.Games}>
           <UserProfile /> 
           <Games />
        </div>
    )
};

export default GamesDashboard;
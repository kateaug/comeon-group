import React from 'react';
import useAuth from '../../context/AuthContext';
import css from './UserProfile.module.scss'


function UserProfile () {

    const { logout, authData, username } = useAuth();

    const handleLogout = e => {
        e.preventDefault();
        logout(username)
    };

    return (
        <div className={css.UserProfile}>
         <div className={css.UserProfileDetails}>
            <img
                src={authData.player.avatar}
                alt={authData.player.name}
            />
            <h3>{authData.player.name}</h3>
            <p>{authData.player.event}</p>
		 </div>
            <button type='submit' onClick={handleLogout}>logout</button>
        </div>
    )
}

export default UserProfile;
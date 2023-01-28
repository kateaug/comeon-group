import React from 'react';
import useAuth from '../../context/AuthContext';
import css from './UserProfile.module.scss'
import Button from '../shared/Button/Button';


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
            <div>
                <h2>{authData.player.name}</h2>
                <p>{authData.player.event}</p>
            </div>
		 </div>
         <Button iconBack kind='primary' type='submit' onClick={handleLogout} text='log out' />
        </div>
    )
}

export default UserProfile;
import React from 'react';
import useAuth from '../../context/AuthContext';


function UserProfile () {

    const { logout, authData, username } = useAuth();

    const handleLogout = e => {
        e.preventDefault();
        logout(username)
    };

    return (
        <div>
         <img
             //src={`../../${authData.player.avatar}`}
             src={authData.player.avatar}

			 alt={authData.player.name}
		 />
		 <div>
			<h3>{authData.player.name}</h3>
			<p>{authData.player.event}</p>
		 </div>
            <button type='submit' onClick={handleLogout}>logout</button>
        </div>
    )
}

export default UserProfile;
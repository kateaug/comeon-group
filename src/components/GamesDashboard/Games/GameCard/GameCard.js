import React, { useState, useEffect } from 'react';

function GameCard({ game }) {

 return (
    <div>
        <img
         src={game.icon}
		 alt={game.name}
		/>
        <p>{game.name}</p>
        <p>{game.description}</p>
    </div>
 )
}

export default GameCard;
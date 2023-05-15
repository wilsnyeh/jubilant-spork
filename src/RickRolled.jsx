import React from "react";

const RickRolled = ({character}) => {
    
    return(
        <div>
            <h1>Its Pickle Rick</h1>
            <img src={character.image} alt='its pickle rick'/>
            <h2>{character.name}</h2>
        </div>
    )
}
export default RickRolled
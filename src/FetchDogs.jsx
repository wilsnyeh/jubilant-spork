import React from "react";

const FetchDogs = ({imageUrl}) => {
    const standard = {
        maxWidth: '500px',
        maxHeight: '500px',
        width:'auto',
        height:'auto'
    }
    return (
        <div>
            <h1>Fetch!</h1>
            <img src={imageUrl} style={standard} alt='its dog' />
        </div>
    )
}

export default FetchDogs
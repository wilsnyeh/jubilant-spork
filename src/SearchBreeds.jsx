import React from "react";


function SearchBreeds({token}){

    const realSearchBreed = () =>{

    let breedSearchUrl ='https://api.petfinder.com/v2/types/dog/breeds';
    let breedSearchOptions = {     
        method: 'GET',
        headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      }

    }
    fetch(breedSearchUrl, breedSearchOptions)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
    console.log('now what is token?:', token)
}

    return(
        <div style={{paddingBottom:50}}>
            <button  onClick={realSearchBreed}>get breeds</button>
        </div>
    )
}


export default SearchBreeds
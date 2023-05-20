// import React, { useEffect } from "react";

// const RickRolled = ({character, setCharacter}) => {

//     useEffect(() => {
//         getRick();
//       }, []);
    

//     const getRick = () => {
//         let url2 = "https://rickandmortyapi.com/api/character";
//         fetch(url2)
//           .then((response) => response.json())
//           .then((data) => {
//             const allChars = data.info.count;
//             const randId = Math.floor(Math.random() * allChars) + 1;
//             fetchChar(randId);
//           })
//           .catch((error) => console.error("err", error));
//       };
    
//       const fetchChar = (id) => {
//         fetch(`https://rickandmortyapi.com/api/character/${id}`)
//           .then((response) => response.json())
//           .then((data) => setCharacter(data))
//           .catch((error) => console.error("err:", error));
//       };
//     console.log('what character is this?', character.image, character.name)
//     console.log('why does this work, but the bottom doesnt?')
//     return(
//         <div>
//             <h1>Its Pickle Rick</h1>
//             {/* <img src={character.image} alt='its pickle rick'/> */}
            
//             {/* <h2>{character.name}</h2> */}

//             <div>
//     {/* {character ? {character.image} : <p>burrrp</p>} */}
//   </div>
  
//   <button onClick={getRick}>burrrp!</button>
//         </div>
//     )
// }
// export default RickRolled
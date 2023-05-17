import React, { useState, useEffect } from "react";
import FetchDogs from "./FetchDogs.jsx";
import RickRolled from "./RickRolled.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PetFinderLogin from "./PetFinderLogin.jsx";
import GetAuthed from "./GetAuthed.js";

function App() {
  const [doggo, setDoggo] = useState(null);
  const [character, setCharacter] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    getImage();
    getRick();
  }, []);


  const getImage = () => {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDoggo(data.message))
      .catch((error) => console.error("err:", error));
  };

  const getRick = () => {
    let url2 = "https://rickandmortyapi.com/api/character";
    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        const allChars = data.info.count;
        const randId = Math.floor(Math.random() * allChars) + 1;
        fetchChar(randId);
      })
      .catch((error) => console.error("err", error));
  };

  const fetchChar = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("err:", error));
  };

  // useEffect(() => {
  //   if(token){
  //     localStorage.setItem('token', data)
  //     console.log('hello1')
  //     .then(setToken)
  //     .catch(error => console.error('err', error))
  //   }
  // })

  // if(!token) {
  //   return <PetFinderLogin setToken={setToken}/>
  // }



  const buttonStyle = {
    minHeight: "500px",
  };

  return (
    <div className="App">
      <div style={buttonStyle}>
        {doggo ? <FetchDogs imageUrl={doggo} /> : <p>looking for treats</p>}
      </div>
      <button onClick={getImage}>Throw the ball!</button>
      <div>
        {character ? <RickRolled character={character} /> : <p>burrrp</p>}
      </div>
      <button onClick={getRick}>burrrp!</button>
      <div>
        <PetFinderLogin />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAuthed />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

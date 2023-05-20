import React, { useState, useEffect } from "react";
import FetchDogs from "./FetchDogs.jsx";
// import RickRolled from "./RickRolled.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PetFinderLogin from "./PetFinderLogin.jsx";
// import SearchBreeds from "./SearchBreeds.jsx";
import SearchDogs from "./SearchDogs.jsx";

function App() {
  const [doggo, setDoggo] = useState(null);
  // const [character, setCharacter] = useState(null);
  // const [token, setToken] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchDogs imageUrl={doggo} setDoggo={setDoggo}/>} />
          {/* <Route path="/morty" element={<RickRolled character={character} setCharacter={setCharacter}/>} /> */}
          <Route path="/login" element={<PetFinderLogin />} />
          <Route  path="/searchdogs" element={<SearchDogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

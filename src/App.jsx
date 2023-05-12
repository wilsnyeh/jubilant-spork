import React, { useState, useEffect} from 'react';
import FetchDogs from './FetchDogs.jsx';
import RickRolled from './RickRolled.jsx'
import './App.css';

function App() {
  const [doggo, setDoggo] = useState(null);
  const [rick, setRick] = useState(null)

  const getImage = () => {
    let url1 = 'https://dog.ceo/api/breeds/image/random'
    let url2 = 'https://rickandmortyapi.com/api/character/2'
    Promise.all([
      fetch(url1)
      .then(response => response.json())
      .then(data => setDoggo(data.message))
    .catch(error => console.error('err:', error)),
    fetch(url2)
    .then(response => response.json())
    .then(data => setRick(data.message))
    .catch(error => console.error('burp:', error))
    ])
    // fetch(url1)
    // .then(response => response.json())
    // .then(data => setDoggo(data.message))
    // .catch(error => console.error('err:', error));
    // fetch(url2)
    // .then(response => response.json())
    // .then(data => setRick(data.message))
    // .catch(error => console.error('burp:', error));
  }
  // const randInt = () =>  Math.floor(Math.random(20))

  // const getRicked = () => {
  //   fetch(`https://rickandmortyapi.com/api/character/avatar/1.jpeg`)
  //   .then(response => response.json())
  //   .then(data => setRick(data.message))
  //   .catch(error => console.error('burp:', error));
  // }

  useEffect(() => {
    getImage();
    // getRicked();
  }, []);

  const buttonStyle = {
    minHeight: '500px'
  }

  return (
    <div className="App">
      <div style={buttonStyle}>
     {doggo ? <FetchDogs imageUrl={doggo}/> : <p>looking for treats</p>}
     </div>
     <div>
      {rick ? <RickRolled imageRick={rick}/> : <p>burrrp</p>}
     </div>
     <button onClick={getImage}>Throw the ball!</button>
     <button onClick={getImage}>burrrp!</button>
    </div>

  );
}

export default App;

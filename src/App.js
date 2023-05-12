import React, { useState, useEffect} from 'react';
import FetchDogs from './FetchDogs.jsx';
import './App.css';

function App() {
  const [doggo, setDoggo] = useState(null);

  const getImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setDoggo(data.message))
    .catch(error => console.error('err:', error));
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="App">
     {doggo ? <FetchDogs imageUrl={doggo}/> : <p>loads</p>}
     <button onClick={getImage}>Throw the ball!</button>
    </div>
  );
}

export default App;

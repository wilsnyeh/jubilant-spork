import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SearchDogs({token}) {
  const [dogCoat, setDogCoat] = useState("");
  const [dogColor, setDogColor] = useState("");

  const handleDogCoatChange = (e) => {
    if (e.target.checked) {
        setDogCoat();
    }
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login/`;
    navigate(path);
  };
  const buttonStyle = {
    minHeight: "25px",
    paddingbottom: "100px",
  };

  const columns = {
    columnCount: "2",
    columnGap: "10px",
  };

  const params = {
    coats: ["Hairless", "Short", "Medium", "Long", "Wire", "Curly"],
    colors: [
      "Apricot / Beige",
      "Bicolor",
      "Black",
      "Brindle",
      "Brown / Chocolate",
      "Golden",
      "Gray / Blue / Silver",
      "Harlequin",
      "Merle (Blue)",
      "Merle (Red)",
      "Red / Chestnut / Orange",
      "Sable",
      "Tricolor (Brown, Black, & White)",
      "White / Cream",
      "Yellow / Tan / Blond / Fawn",
    ],
  };
const SearchForDogs = () => {

  let breedSearchUrl =`https://api.petfinder.com/v2/types/animals?type=dog&coat=short&colors=black`;
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
  console.log('now what is token?: line 64', token)
}

  return (
    <div>
      <h1>test</h1>
      <div>
        <h2>coat</h2>
      </div>
      <div style={columns}>
        {params.coats.map((coat) => (
          <div>
            <label for="coat">{coat}</label>
            <input type="checkbox" id="coat"></input>
          </div>
        ))}
      </div>
      <div>
        <h2>color</h2>
      </div>
      <div style={columns}>
        {params.colors.map((color) => (
          <div>
            <label for="coat">{color}</label>
            <input type="checkbox" id="coat"></input>
          </div>
        ))}
      </div>
      <button style={buttonStyle} type="submit"
      onClick={SearchForDogs}>
        find my dog
      </button>
      <button onClick={routeChange}>back</button>
    </div>
  );
}

export default SearchDogs;

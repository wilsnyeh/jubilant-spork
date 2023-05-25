import React, { useEffect, useState } from "react";
import SearchBreeds from "./SearchBreeds";
import SearchDogs from "./SearchDogs";
import "./App.css";

const PetFinderLogin = () => {
  const [token, setToken] = useState("");
  const [data, setaData] = useState(null);
  const [searchDog, setSearchDog] = useState("");
  const [searchLocation, setSearchLocation] = useState('')
  const [searchContent, setSearchContent] = useState([]);

  var UsaStates = require('usa-states').UsaStates;
  // console.log('where does this show up??', UsaStates)
  var usStates = new UsaStates();
  var statesAbbreviation = usStates.arrayOf('abbreviations')
  // console.log('where do these abbreviations show up? ', statesAbbreviation)

  const handleSearchChange = (e) => {
    setSearchDog(e.target.value);
    setSearchLocation(e.target.value)
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    //need ternary for location
    const petFinderSearchUrl = `https://api.petfinder.com/v2/animals?type=${searchDog}&location=${searchLocation}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(petFinderSearchUrl, options);
    const content = await res.json();
    let animals = []

    for (let i = 0; i < content['animals'].length; i++ ){

      const name = content['animals'][i]['name']
      const animalBreed = content['animals'][i]['breeds']['primary']
      const animalCity =  content['animals'][i]['contact']['address']['city']
      const animalState =  content['animals'][i]['contact']['address']['state']

      let animal = {
        name: name,
        breed: animalBreed,
        city: animalCity,
        state: animalState
      }

      animals.push(animal)
    }

    console.log(content);
    console.log(animals)
    setSearchContent(animals);
  };

  const animalTypes = ["cat", "dog", "bird"];

  async function loginUser() {
    let petFinderUrl = "https://api.petfinder.com/v2/oauth2/token";

    fetch(petFinderUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: "cWJAoFN567mRPOc10isZZMomu17mBvGlbEyRrSZOYLJZspuR0w",
        client_secret: "N59RE4DeVfX9pCLIUBzR66nwXpxqGU0kGCbsV126",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.access_token);
      })
      .catch((err) => console.error("!!loginUser Error!!", err));
    console.log("is this the token? line37", token);
  }

  const SearchForDogs = () => {
    let breedSearchUrl = `https://api.petfinder.com/v2/animals?type=dog&colors=black&coat=short`;
    let breedSearchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(breedSearchUrl, breedSearchOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("how do i capture this data?", json, JSON.stringify(json));
        setaData(json);
      })
      .catch((err) => console.error("error:" + err));
    console.log("this line is setdata", data);
  };

  // const searchInput = () => {
  //   let breedSearchUrl = `https://api.petfinder.com/v2/animals?type=dog&location=california&breed=bulldog`;
  //   let breedSearchOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   fetch(breedSearchUrl, breedSearchOptions)
  //     .then((res) => res.json())
  //     .then((json) => console.log("this is the json", json))
  //     .catch((err) => console.error("error:" + err));
  // };

  return (
    <div>
      <div>
        <button
          // onClick={() => login(userName, password)}
          type="submit"
          onClick={() => {
            loginUser();
            // routeChange();
          }}
        >
          gib token
        </button>
        <SearchBreeds token={token} />

        <form onSubmit={handleSearchSubmit}>
          {/* <input 
          type='text'
          placeholder='search pet type'
          value={searchDog}
          onChange={handleSearchChange}
          /> */}
          <label htmlFor="animaltypes">choose animal type</label>
          <select
            id="animaltypes"
            value={searchDog}
            onChange={handleSearchChange}
            name="animaltypes"
          >
            {animalTypes.map((animal) => {
              return <option>{animal}</option>;
            })}
          </select>
          <select
          value={searchLocation}
          onChange={handleSearchChange}
          >
            {statesAbbreviation.map((abb) => {
              return <option>{abb}</option>
            })}
          </select>
          <button type="submit">find your pet type</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Animal Name</th>
              <th>Animal Breed</th>
              <th>Animal Location</th>
            </tr>
          </thead>
          <tbody>
            {searchContent && searchContent.map((x) => {
              return (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.breed}</td>
                  <td>{x.city} {x.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
        <button onClick={SearchForDogs}>this is search for dogs</button>
        <div></div>
      </div>
    </div>
  );
};

export default PetFinderLogin;

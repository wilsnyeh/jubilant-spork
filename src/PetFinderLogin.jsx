import React, { useState } from "react";
import SearchBreeds from "./SearchBreeds";
// import SearchDogs from "./SearchDogs";
import "./App.css";

const PetFinderLogin = () => {
  const [token, setToken] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchContent, setSearchContent] = useState([]);
  const [breedList, setBreedList] = useState([]);
  const [selectedDogBreed, setSelectedDogBreed] = useState("");

  var UsaStates = require("usa-states").UsaStates;
  var usStates = new UsaStates();
  var statesAbbreviation = usStates.arrayOf("abbreviations");

  const handleSearchChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSelectedDogBreedChange = (e) => {
    setSelectedDogBreed(e.target.value);
  };


  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    //need ternary for location https://api.petfinder.com/v2/animals?type=${searchDog}&{${}}

    let petFinderSearchUrl = `https://api.petfinder.com/v2/animals`;

    petFinderSearchUrl += `?type=${searchType}`;

    if (selectedDogBreed) {
      petFinderSearchUrl += `&breed=${selectedDogBreed}`;
    }

    // is there a more eloquent way to write this?

    if (searchLocation.length > 0) {
      petFinderSearchUrl += `&location=${searchLocation}`;
      // console.log('what does the url look like here? line 38', petFinderSearchUrl)
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(petFinderSearchUrl, options);
    const content = await res.json();
    // console.log('let see what content looks like here line50', content['pagination']['current_page'][2])
    let animals = [];
    let animalContent = content["animals"];

    for (let i = 0; i < content["animals"].length; i++) {
      const name = animalContent[i]["name"];
      const animalBreed = animalContent[i]["breeds"]["primary"];
      const animalCity = animalContent[i]["contact"]["address"]["city"];
      const animalState = animalContent[i]["contact"]["address"]["state"];

      let animal = {
        name: name,
        breed: animalBreed,
        city: animalCity,
        state: animalState,
      };

      animals.push(animal);
    }

    // console.log(content);
    // console.log(animals);
    setSearchContent(animals);
  };

  const animalTypes = [
    "",
    "Cat",
    "Dog",
    "Bird",
    "Rabbit",
    "Horse",
    "Scales-Fins-Other",
    "Barnyard",
  ];

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

  const SearchForDogs = async (e) => {
    e.preventDefault();
    // let breedSearchUrl = `https://api.petfinder.com/v2/animals?types=dog`;
    let breedSearchUrl = `https://api.petfinder.com/v2/types/dog/breeds`;
    let specificBreedSearchUrl = `https://api.petfinder.com/v2/animals?type=dog&breed=pug,german Shepherd dog`;
    let breedSearchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(
      breedSearchUrl,
      breedSearchOptions,
      specificBreedSearchUrl
    );
    const content = await res.json();

    const searchDogBreeds = [];
    const dogBreeds = content["breeds"];
    for (let i = 0; i < dogBreeds.length; i++) {
      const dogBreedList = dogBreeds[i]["name"];
      searchDogBreeds.push(dogBreedList);
    }
    console.log(
      "what is being returned here? line 134",
      content["breeds"][1]["name"], // afgan hound
      searchDogBreeds, // actual breeds list
      specificBreedSearchUrl
    );
  };

  const breedInput = () => {
    if (searchType === "Dog") {
      return (
        <select
          onChange={handleSelectedDogBreedChange}
          element={<realSearchBreed breedList={breedList} />}
        >
          {breedList.map((bl) => {
            return <option>{bl}</option>;
          })}
        </select>
      );
    }
  };

  return (
    <div>
      <div>
        <button
          type="submit"
          onClick={() => {
            loginUser();
          }}
        >
          gib token
        </button>
        <br></br>
        <SearchBreeds token={token} setBreedList={setBreedList} />
        {/* <button onClick={selectingDogBreeds}>get breeds</button> */}
        <form onSubmit={handleSearchSubmit}>
          <label htmlFor="animaltypes">choose animal type</label>
          <select
            id="animaltypes"
            value={searchType}
            onChange={handleSearchChange}
            name="animaltypes"
          >
            {animalTypes.map((animal) => {
              return <option>{animal}</option>;
            })}
          </select>
          {breedInput()}

          <select value={searchLocation} onChange={handleLocationChange}>
            <option></option>
            {statesAbbreviation.map((abb) => {
              return <option>{abb}</option>;
            })}
          </select>
          <button type="submit">Search for an animal near you!</button>
        </form>
        <table className="table-center">
          <thead>
            <tr>
              <th>Animal Name</th>
              {/* <th>Animal Type</th> */}
              <th>Animal Breed</th>
              <th>Animal Location</th>
            </tr>
          </thead>
          <tbody>
            {searchContent &&
              searchContent.map((x) => {
                return (
                  <tr>
                    <td>{x.name}</td>
                    {/* <td>something</td> */}
                    <td>{x.breed}</td>
                    <td>
                      {x.city} {x.state}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button>&lt;&lt;</button> <button>&gt;&gt;</button>
        <br></br>
        <button onClick={SearchForDogs}>this is search for dogs</button>
        <div></div>
      </div>
    </div>
  );
};

export default PetFinderLogin;

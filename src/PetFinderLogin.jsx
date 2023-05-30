import React, { useEffect, useState } from "react";
import SearchBreeds from "./SearchBreeds";
// import SearchDogs from "./SearchDogs";
import "./App.css";
import AnimalTableData from "./AnimalTableData";

const PetFinderLogin = () => {
  const [token, setToken] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchContent, setSearchContent] = useState([]);
  const [breedList, setBreedList] = useState([]);
  // const [showBreedList, setShowBreedList] = useState(true)
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

    if (selectedDogBreed && searchType === "Dog") {
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
      const animalContentIdx = animalContent[i]
      const name = animalContent[i]["name"];
      const animalBreed = animalContentIdx["breeds"]["primary"];
      const secondBreed = animalContentIdx["breeds"]["secondary"];
      const animalCity = animalContentIdx["contact"]["address"]["city"];
      const animalState = animalContentIdx["contact"]["address"]["state"];
      const animalPhoto = animalContentIdx['primary_photo_cropped']
      const organizationId = animalContentIdx['organization_id']
      const organizationAnimalId = animalContentIdx['organization_animal_id']
      const organizationEmail = animalContentIdx['contact']['email']
      console.log('what does this look like?', animalPhoto)

      // let animalsPhotoUrl = animalPhoto
      // if (animalsPhotoUrl) {
      //   return animalsPhotoUrl['small']
      // }

      let animal = {
        name: name,
        breed: animalBreed,
        breed2: secondBreed,
        city: animalCity,
        state: animalState,
        photo: animalPhoto,
        organization: organizationId,
        orgAnimalId: organizationAnimalId,
        email: organizationEmail
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

  useEffect(() => {
    if(token) {
      localStorage.setItem('token', JSON.stringify(token))
    }
  },[token])

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setToken(token)
    }
  },[])

  const breedInput = () => {
    if (searchType === "Dog") {
      return (
        <select
          onChange={handleSelectedDogBreedChange}
          // element={<realSearchBreed breedList={breedList} />}
        >
          <option></option>
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
        <AnimalTableData searchContent={searchContent}/>
        <button>&lt;&lt;</button> <button>&gt;&gt;</button>
        <br></br>
        {/* <button onClick={SearchForDogs}>this is search for dogs</button> */}
        <div></div>
      </div>
    </div>
  );
};

export default PetFinderLogin;

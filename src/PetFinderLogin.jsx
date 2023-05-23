import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBreeds from "./SearchBreeds";
import SearchDogs from "./SearchDogs";

const PetFinderLogin = () => {
  const [token, setToken] = useState("");
  // const [colors, setColors] = useState("");
  // const [coats, setCoats] = useState("");
  const [data, setaData] = useState([]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/searchdogs/`;
    navigate(path);
  };

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
      .then((json) =>
        console.log("how do i capture this data?", json, JSON.stringify(json)))
      // .then((data) => )
      .catch((err) => console.error("error:" + err));

    // let content =
  };

  // let navigate = useNavigate();
  // const routeChange = () => {
  //     let path = `/signup/`
  //     navigate(path)
  // }

  // const handleSubmit = async e => {
  //     e.preventDefault();
  //     const token = await loginUser({
  //         userName,
  //         password
  //     });
  //     setToken(token)
  // }

  const searchInput = () => {
    let breedSearchUrl = `https://api.petfinder.com/v2/animals?type=dog&location=california&breed=bulldog`;
    let breedSearchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(breedSearchUrl, breedSearchOptions)
      .then((res) => res.json())
      .then((json) => console.log("this is the json", json))
      .catch((err) => console.error("error:" + err));
  };

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
        {/* <SearchDogs token={token}/> */}

        <input type="search" placeholder="location" />
        <br></br>
        <input type="search" placeholder="dog breed" />
        <button type="submit" onClick={searchInput}>
          submit
        </button>
        <br></br>

        <button onClick={SearchForDogs}>this is search for dogs</button>
        <div>
          {/*
          we want to check for token here, if token is available, we can begin render data
          for user 
          */}
          {/* {data ? (
            <div>
              {data.animals.map((animal) => {
                return (
                  <div>
                    <div>{animal.location}</div>
                    <div>{animal.breed}</div>
                    
                  </div>
                );
              })}
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default PetFinderLogin;

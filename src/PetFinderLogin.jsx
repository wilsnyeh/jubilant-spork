import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBreeds from "./SearchBreeds";
import SearchDogs from "./SearchDogs";
// import Cookies from "js-cookie";
import "./App.css"

const PetFinderLogin = () => {
  const [token, setToken] = useState("");
  // const [colors, setColors] = useState("");
  // const [coats, setCoats] = useState("");
  const [data, setaData] = useState(null);
  const [searchDog, setSearchDog] = useState('');

const handleSearchChange = (e) => {
  setSearchDog(e.target.value);
}

const handleSearchSubmit = async (e) => {
  e.preventDefault();
  const petFinderSearchUrl = `https://api.petfinder.com/v2/animals?type=${searchDog}`

  const options = {
    method: 'GET',
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${token}`
    }
  }

  const res = await fetch(petFinderSearchUrl, options);
  const data = await res.json()

  console.log(data)
}


  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/searchdogs/`;
  //   navigate(path);
  // };

  // const getSession = () => {
  //   const authToken = Cookies.get("__session");
  //   let session;
  //   try {
  //     if (authToken) {
  //       const base64Url = authToken.split(".")[1];
  //       const base64 = base64Url.replace("-", "+").replace("_", "/");
  //       session = JSON.parse(window.atob(base64));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return session;
  // };

  // const logOut = () => {
  //   Cookies.remove("__session");
  // };

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
      console.log('this line is setdata', data)
  };
  // useEffect(() => {
    
  // });


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
          <input 
          type='text'
          placeholder='search pet type'
          value={searchDog}
          onChange={handleSearchChange}
          />
          <button type='submit'>find your pet type</button>
        </form>
        {/* <SearchDogs token={token}/> */}

        {/* <input type="search" placeholder="location" />
        <br></br>
        <input type="search" placeholder="dog breed" />
        <button type="submit" onClick={searchInput}>
          submit
        </button> */}
        <br></br>

        <button onClick={SearchForDogs}>this is search for dogs</button>
        <div>
          {/* <div className='dropdown-container'>
            <div className='dropdown-input'>
              <div className='dropdown-menu'>
                {data.animals.map((animal) => (
                  <div key={data.animals.id} className='dropdown-item'>
                    {animal.name}
                    </div>
                ))}
              </div>
            </div>
          </div> */}
{/* 
{data && data.animals && data.animals.map((animal, i) => (

<p key={i}>breed: {data.animals[i].breeds.primary}</p>))} */}

          {/* {data && data.animals && data.animals[0] && 
            <p>breed: {data.animals[0].breeds.primary}</p>
          } */}
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

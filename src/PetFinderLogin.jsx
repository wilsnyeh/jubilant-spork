import React, { useState } from "react";
import { json, useNavigate } from 'react-router-dom'
import SearchBreeds from "./SearchBreeds";
import SearchDogs from "./SearchDogs";



const PetFinderLogin = () => {
  const [token, setToken] = useState('');


  let navigate = useNavigate();
  const routeChange = () => {
      let path = `/searchdogs/`
      navigate(path);
  }


  async function loginUser() {
    let petFinderUrl = "https://api.petfinder.com/v2/oauth2/token";
    // console.log('what is this? line20 process.env', process.env)
  
    fetch(petFinderUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"grant_type":"client_credentials","client_id": "cWJAoFN567mRPOc10isZZMomu17mBvGlbEyRrSZOYLJZspuR0w","client_secret":"N59RE4DeVfX9pCLIUBzR66nwXpxqGU0kGCbsV126"})
    })
      .then((res) => {
        return res.json()
    })
      .then((json) => {
        console.log('this is the json line 32',json);
        setToken(json.access_token);
    })
      .catch((err) => console.error("!!loginUser Error!!", err));
      console.log('is this the token? line37', token)
  }

  const SearchForDogs = () => {

    let breedSearchUrl =`https://api.petfinder.com/v2/animals?type=dog&colors=black&coat=short`;
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
    .then(res => console.log('this is line55', JSON.stringify(res)))
    .catch(err => console.error('error:' + err));
    console.log('now what is token?: line 64', token)
    console.log('is this the list of search results?', )

    // let content = res.json()
  }


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



  return (
    <div>
      <div>
        <button
          // onClick={() => login(userName, password)}
          type="submit"
          onClick={()=> {
            loginUser();
            // routeChange();
          }}>
          gib token
        </button>
        <SearchBreeds token={token}/>
        {/* <SearchDogs token={token}/> */}
        <button onClick={SearchForDogs}>click this for other dogs</button>
      </div>
    </div>
  );
};

export default PetFinderLogin;

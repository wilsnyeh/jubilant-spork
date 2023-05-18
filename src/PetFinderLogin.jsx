import React, { useState } from "react";
// import { Navigate, useNavigate} from 'react-router-dom'
import { useToken } from "./AuthToken";
import SearchBreeds from "./SearchBreeds";



const PetFinderLogin = () => {
  // some jsx here
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');
  // some state that manages token usage
  // const [, login] = useToken();

  async function loginUser() {
  
    
    let petFinderUrl = "https://api.petfinder.com/v2/oauth2/token";
  
    fetch(petFinderUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"grant_type":"client_credentials","client_id":"cWJAoFN567mRPOc10isZZMomu17mBvGlbEyRrSZOYLJZspuR0w","client_secret":"N59RE4DeVfX9pCLIUBzR66nwXpxqGU0kGCbsV126"}'
    })
      .then((res) => {
        return res.json()
    })
      .then((json) => {
        console.log('this is the json line 32',json);
        setToken(json.access_token);
    })
      .catch((err) => console.error("!!loginUser Error!!", err));
      console.log('is this the token?', token)
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
      {/* <div>
                <label>Username</label>
                <input
                onChange={e=> setUserName(e.target.value)}
                value={userName}
                placeholder='Username'
                type='text'
                required
                />
            </div> */}
      {/* <div>
                <label>Password</label>
                <input
                onChange={e=> setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                type='text'
                required
                />
            </div> */}
      <div>
        <button
          // onClick={() => login(userName, password)}
          type="submit"
          onClick={loginUser}
        >
          Login
        </button>
        <SearchBreeds token={token}/>
      </div>
    </div>
  );
};

export default PetFinderLogin;

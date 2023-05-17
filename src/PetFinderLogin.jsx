import React, { useState } from "react";
// import { Navigate, useNavigate} from 'react-router-dom'
import { useToken } from './AuthToken'

const PetFinderLogin = () => {
    // some jsx here
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // some state that manages token usage 
    // const [, login] = useToken();

    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = `/signup/`
    //     navigate(path)
    // }
    return (
        <form>
            <div>
                <label>Username</label>
                <input
                onChange={e=> setUserName(e.target.value)}
                value={userName}
                placeholder='Username'
                type='text'
                required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                onChange={e=> setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                type='text'
                required
                />
            </div>
            <div>
                <button
                // onClick={() => login(userName, password)} 
                type='submit'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default PetFinderLogin
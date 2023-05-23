import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav(){
    return (
        <div>
            <div>
                <button><NavLink to='/login'>get authed</NavLink></button><br></br>
                <button> <NavLink to='/'>go back</NavLink></button>
            </div>
        </div>
    )
}

export default Nav
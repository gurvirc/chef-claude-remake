import chefClaudeLogo from "./images/ChefClaudeIcon.png"
import { Link } from "react-router-dom"
import React from 'react'
import { authContext } from "./AuthContextProvider"
export default function Header(){

    const { name, setName } = React.useContext(authContext)
    return(
        <header>
            <div className="center">
                <img src={chefClaudeLogo}></img>
                <h1>Chef Claude V2</h1>
                <p>{name? `Welcome, ${name}`:""}</p>
            </div>
            <div className="login-signup">
                <Link to="/Login" className="login-signup">
                    {!name &&<button >Log in</button>}
                </Link>
                {name && <button>Log out</button>}
                <Link to="/Signup" className="login-signup">
                    {!name && <button>Sign up</button>}
                </Link>
            </div>
        </header>
    )
}
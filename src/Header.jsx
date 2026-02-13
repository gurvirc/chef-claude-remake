import chefClaudeLogo from "./images/ChefClaudeIcon.png"
import { Link } from "react-router-dom"
import React from 'react'
import { authContext } from "./AuthContextProvider"
import { useNavigate } from 'react-router-dom' 
export default function Header(){

    const { name, setName } = React.useContext(authContext)

    const navigate = useNavigate() 


    async function handleLogout(){

        try {
            const res = await fetch('http://localhost:3000/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json'
                },  
            })
            const data = await res.json()

            if(res.ok){
                setName("")
                console.log(data.message)
                navigate('/login')
                


            }
        } catch (error) {
            console.log("error in logout request")
        }
    }

    return(
        <header>
            <Link to="/" className="link-home">
            <div className="center">
                <img src={chefClaudeLogo}></img>
                <h1>Chef Claude V2</h1>
                
            </div>
            </Link>
            <div className="login-signup">
                <Link to="/Login" className="login-signup">
                    {!name &&<button >Log in</button>}
                </Link>
                {name && 
                <>
                    <Link to="/savedRecipes"><button className="My-recipes">My recipes</button></Link>
                    <button onClick={handleLogout}>Log out</button>
                    
                </>
                }
                <Link to="/Signup" className="login-signup">
                    {!name && <button>Sign up</button>}
                </Link>
            </div>
        </header>
    )
}
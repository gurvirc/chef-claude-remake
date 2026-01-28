import ChefClaudeLogo from './images/ChefClaudeIcon.png'
import { useNavigate } from 'react-router-dom' 
import React from 'react'
import { authContext } from './AuthContextProvider'

export default function Login(){
    const [loginError, setLoginError] = React.useState("")
    const navigate = useNavigate()
    const { name, setName } = React.useContext(authContext)

    async function handleLogin(e){
        e.preventDefault()

        const formData = new FormData(e.target)

        const username = formData.get("username")
        const password = formData.get("password")


        try{
            const res = await fetch('http://localhost:3000/api/auth/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({username, password})
            })

            const data = await res.json()

            if(res.ok){
                navigate('/')
                setName(data.name)
                console.log(name)
            }else{
                setLoginError(data.error)
            }

        }catch(err){
            console.log('Login error: ', err)
        }

    }


    return(
        
        <div className="login-page">
            <form className="login-form" onSubmit={handleLogin}>
                <img src={ChefClaudeLogo}></img>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                
                <button type="submit">Login</button>
                <p className="signUp-error">{loginError}</p>

            </form>
            
        </div>
    )
}
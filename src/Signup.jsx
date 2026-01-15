import ChefClaudeLogo from './images/ChefClaudeIcon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' 
import React from 'react'
export default function Signup(){

    const [signUpError, setSignUperror ] = React.useState("")

    const navigate= useNavigate()
    async function signUp(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        

        const name= formData.get("name")
        const email= formData.get("email")
        const username= formData.get("username")
        const password= formData.get("password")
        
       try{
            const res= await fetch('http://localhost:3000/api/auth/register' ,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, username, password})
            }) 
                const data= await res.json()

                if(res.ok){
                    navigate('/')
                    
                }else{
                    setSignUperror(data.error)
                }
                
                
                /*add else statement to handle a registration error*/
                

            }catch(err){
                console.log('Network error ', err)
            }
        
    }



    return(
        <div className="login-page">
            <form className="login-form" onSubmit={signUp}>
                <img className="signup-logo" src={ChefClaudeLogo}></img>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="name" name="name" placeholder="Full Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" name="email" placeholder="Email Address" required/>
                </div>
                <div className="input-box">
                    
                    <input 
                    type="username" 
                    pattern="^[a-zA-Z0-9_-]{1,20}$"  
                    name="username" 
                    placeholder="Username" 
                    required/>

                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Password" required/>
                </div>
                
                <button type="submit">Create Account</button>
                <p>Already registered?<Link className="Login-link" to="/Login"> Sign in here</Link></p>
                <p className="signUp-error">{signUpError}</p>

            </form>
            
        </div>
    )
}
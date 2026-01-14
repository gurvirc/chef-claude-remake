import ChefClaudeLogo from './images/ChefClaudeIcon.png'
import { Link } from 'react-router-dom'
export default function Signup(){
    return(
        <div className="login-page">
            <form className="login-form" action="">
                <img className="signup-logo" src={ChefClaudeLogo}></img>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="name" placeholder="Full Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email Address" required/>
                </div>
                <div className="input-box">
                    <input type="username" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                
                <button type="submit">Create Account</button>
                <p>Already registered?<Link className="Login-link" to="/Login">Sign in here</Link></p>

            </form>
            
        </div>
    )
}
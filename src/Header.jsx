import chefClaudeLogo from "./images/ChefClaudeIcon.png"
import { Link } from "react-router-dom"
export default function Header(){
    return(
        <header>
            <div className="center">
                <img src={chefClaudeLogo}></img>
                <h1>Chef Claude V2</h1>
            </div>
            <div className="login-signup">
                <Link to="/Login" className="login-signup">
                    <button >Log in</button>
                </Link>
                <Link to="/Signup" className="login-signup">
                    <button>Sign up</button>
                </Link>
            </div>
        </header>
    )
}
import chefClaudeLogo from "./images/ChefClaudeIcon.png"
export default function Header(){
    return(
        <header>
            <div className="center">
                <img src={chefClaudeLogo}></img>
                <h1>Chef Claude V2</h1>
            </div>
            <div className="login-signup">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </header>
    )
}
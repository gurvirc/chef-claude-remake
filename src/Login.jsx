import ChefClaudeLogo from './images/ChefClaudeIcon.png'
export default function Login(){
    return(
        
        <div className="login-page">
            <form className="login-form" action="">
                <img src={ChefClaudeLogo}></img>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email Address" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                
                <button type="submit">Login</button>

            </form>
            
        </div>
    )
}
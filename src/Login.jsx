export default function Login(){
    return(
        
        <div className="login-page">
            <form className="login-form" action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email Address" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <label><input type="checkbox"/>Remember me</label> 
                </div>
                
                <button type="submit">Login</button>

            </form>
            
        </div>
    )
}
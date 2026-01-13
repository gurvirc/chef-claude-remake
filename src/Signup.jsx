export default function Signup(){
    return(
        <div className="login-page">
            <form className="login-form" action="">
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

            </form>
            
        </div>
    )
}
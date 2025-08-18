import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Firebasecontext } from '../contexts/Firebase'

function Login() {

    const {login_mailpass, login_google, isLoggedIn}=useContext(Firebasecontext)
    const navigate=useNavigate()
    // console.log(signup_mailpass);
    


      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
      const [error,seterror]=useState("")


      const handleForm=async (e)=>{
        seterror("")
        e.preventDefault()
        if(!email || !password){
            console.log('incomplete data');
            return;
            
        }
        // console.log({email,password});
        try {
            const user=await login_mailpass(email,password)
            if(user){
                console.log("login successful");
                
                console.log(user);
                setpassword("")
                setemail("")
                
            }else{
                seterror("Invalid email or password")
            }
           
            
        } catch (err) {
            console.log(err);
            seterror(err.message)
            
            
        }
        

      }

      const handleGooglelogin=async ()=>{
        seterror("")
        console.log('google login initiated');
        
        try {
            const user=await login_google()
            console.log("google user is", user.user);
            
          
        } catch (error) {
          console.log('error occured',error);
          seterror(error)
          
          
        }

      }

      useEffect(()=>{
        if(isLoggedIn) 
          navigate("/")

      },[navigate,isLoggedIn])

    
    
    
      return (
        <div className="signup-container">
          <h2>Login to your account</h2>
          <form onSubmit={handleForm}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength="6"
              />
            </div>
    
            {/* You'll add your submit logic here later */}
            <button type="submit" className="login-button">
              Login
            </button>

            <button  onClick={handleGooglelogin}>SignIn with GOOGLE</button>
          </form>
    
          <p className="login-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>

          {error && (
            <h1>{error}</h1>
          )}
        </div>
      );
  
}

export default Login
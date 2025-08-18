import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Firebasecontext } from '../contexts/Firebase'
function Login() {

    const {login_mailpass}=useContext(Firebasecontext)
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
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Firebasecontext } from '../contexts/Firebase'

function Signup() {

    const {signup_mailpass, isLoggedIn}=useContext(Firebasecontext)
    const navigate=useNavigate()
    // console.log(signup_mailpass);

    


      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")


      const handleForm=async (e)=>{
        e.preventDefault()
        if(!email || !password){
            console.log('incomplete data');
            return;
            
        }
        // console.log({email,password});
        const newuser=await signup_mailpass(email,password)
        if(newuser){
            console.log(newuser);
            setpassword("")
            setemail("")
            
        }else{
            console.log("error occured while making new user ");
            
        }
        

      }

    
      useEffect(()=>{
        if(isLoggedIn) 
          navigate("/")

      },[navigate,isLoggedIn])
    
      return (
        <div className="signup-container">
          <h2>Create Your Account</h2>
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
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
    
          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      );
  
}

export default Signup
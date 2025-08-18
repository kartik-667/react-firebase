import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'

export const Firebasecontext=createContext()

const firebaseConfig = {
    apiKey: "AIzaSyAsHpMaQ7HTrX1Uh7B9nttH-_4fplW_DJU",
    authDomain: "newproj-cfebd.firebaseapp.com",
    projectId: "newproj-cfebd",
    storageBucket: "newproj-cfebd.firebasestorage.app",
    messagingSenderId: "124306315954",
    appId: "1:124306315954:web:4924e777a5976ae19587ab",
    measurementId: "G-854HBGPTT3"
  };

const app = initializeApp(firebaseConfig);
const firebaseauth=getAuth(app)


const analytics = getAnalytics(app);

export const FirebaseProvider=({children})=>{
    const [name, setname] = useState("kartik")

    const [currUser, setcurrUser] = useState(null)

    useEffect(() => {
      onAuthStateChanged(firebaseauth,(user)=>{
        // console.log("curruser is ",user);
        if(user){
            setcurrUser(user)
        }
        
      })
    
      
    }, []) // means on load
    
    const isLoggedIn= currUser ? true : false;

    const signup_mailpass=async (email,password)=>{
        try {
            let userdata= await createUserWithEmailAndPassword(firebaseauth,email,password)
            return userdata
            
        } catch (error) {
            console.log("error occured",error);
            
            
            
        }

    }

    const login_mailpass=async (email, password)=>{
        try {
            let user=await signInWithEmailAndPassword(firebaseauth,email,password)
            return user
            
        } catch (error) {
            console.log("error occured",error);
            
            
        }

    }

    const login_google=async ()=>{
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            const result = await signInWithPopup(firebaseauth, provider);

            if(result){
                return result
            }

            
        } catch (error) {
            console.log('some error occured',error);
            
            
        }
    }



    return (
        <Firebasecontext.Provider value={{name,setname, signup_mailpass, login_mailpass, login_google, isLoggedIn}} >
            {children}

        </Firebasecontext.Provider>



    )

}
import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'

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

    const signup_mailpass=async (email,password)=>{
        try {
            let userdata= await createUserWithEmailAndPassword(firebaseauth,email,password)
            return userdata
            
        } catch (error) {
            console.log("error occured",error);
            return null
            
            
        }

    }



    return (
        <Firebasecontext.Provider value={{name,setname, signup_mailpass}} >
            {children}

        </Firebasecontext.Provider>



    )

}
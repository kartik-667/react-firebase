import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export const FirebaseProvider=({children})=>{
    const [name, setname] = useState("kartik")



    return (
        <Firebasecontext.Provider value={{name,setname}} >
            {children}

        </Firebasecontext.Provider>



    )

}
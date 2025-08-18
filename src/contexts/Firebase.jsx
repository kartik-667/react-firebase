import { createContext, useState } from "react";

export const Firebasecontext=createContext()


export const FirebaseProvider=({children})=>{
    const [name, setname] = useState("kartik")



    return (
        <Firebasecontext.Provider value={{name,setname}} >
            {children}

        </Firebasecontext.Provider>



    )

}
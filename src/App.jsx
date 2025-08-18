import React, { useContext } from 'react'
import { Firebasecontext } from './contexts/Firebase'
function App() {
  const {name,setname}=useContext(Firebasecontext)

  

  return (
    <div>App
      <h1 className=''>hello wassup dude, username is {name ? name:"null" } </h1>
      <button onClick={()=> setname("2nd name ")}>Click me</button>



    </div>

  )
}

export default App
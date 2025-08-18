import React, { useContext } from 'react'
import { Firebasecontext } from './contexts/Firebase'
import { Route, Routes, Link } from 'react-router-dom'
import Page1 from './pages/Page1'
function App() {
  const {name,setname}=useContext(Firebasecontext)

  

  return (
    <div>App
      <h1 className=''>hello wassup dude, username is {name ? name:"null" } </h1>
      <button onClick={()=> setname("2nd name ")}>Click me</button>

      <Link to="/page1">Go to page 1</Link>

      <Routes>
      <Route path='/page1' element={<Page1></Page1>} > </Route>

      </Routes>



    </div>

  )
}

export default App
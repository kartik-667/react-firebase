import React, { useContext } from 'react'
import { Firebasecontext } from './contexts/Firebase'
import { Route, Routes, Link } from 'react-router-dom'
import Page1 from './pages/Page1'
import Signup from './pages/Signup'
import Login from './pages/Login'
function App() {
  const {name,setname}=useContext(Firebasecontext)

  

  return (
    <div>
      

      

      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/page1' element={<Page1></Page1>} > </Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>

      </Routes>



    </div>

  )
}

function Home(){


  return (
    <>
      <h1>Home page </h1>
      <Link to="/page1">Go to page 1</Link>
      <br />
      <Link to="/signup">Signup here</Link>
    </>
  )
}

export default App
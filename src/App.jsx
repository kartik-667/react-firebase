import React, { useContext } from 'react'
import { Firebasecontext } from './contexts/Firebase'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Page1 from './pages/Page1'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import List from './pages/List'
function App() {
  const {name,setname, isLoggedIn , currUser}=useContext(Firebasecontext)

  

  return (
    <div>
      

      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/page1' element={<Page1></Page1>} > </Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/addlist' element={<List></List>}></Route>

      </Routes>



    </div>

  )
}

function Home(){
  const { isLoggedIn, logout, currUser}=useContext(Firebasecontext)
  const navigate=useNavigate()

  const handleLogout=()=>{
    logout()
    navigate(0) //refresh curr page 
    


  }

  return (
    
    <>
      <div>
        <h1 className='text-red-500 text-3xl'>Home page </h1>
        {currUser && (
          <h1 className='text-4xl'>Hello {currUser.displayName}</h1>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout}>Logout</button>
        )}


      </div>
      <Link to="/page1">Go to page 1</Link>
      <br />
      <Link to="/signup">Signup here</Link>
    </>
  )
}

export default App
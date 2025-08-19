import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex w-full bg-black text-white p-4 '>
        <div className="left ">
            <h1 className='text-3xl'>Firebase App</h1>
        </div>
        <div className="right flex gap-3 ml-10 text-2xl">
            <Link to="/" className='hover:text-red-400 transition all'>Home</Link>
            <Link to='/addlist' className='hover:text-red-400 transition all'>Add Listing</Link>
            
        </div>

    </nav>
  )
}

export default Navbar
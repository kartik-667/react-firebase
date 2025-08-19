import React, { useContext, useState } from 'react'
import { Firebasecontext } from '../contexts/Firebase'

function List() {
    const {createNewList}=useContext(Firebasecontext)
    const [name, setname] = useState("")
    const [isbn, setisbn] = useState("")
    const [price, setprice] = useState("")
    const [file,setfile]=useState(null)

    async function handleForm(e){
        e.preventDefault()
        // console.log('form clicked ', {name,isbn,price,file});

        try {
            await createNewList({name,isbn,price,file})
            // console.log();
            

            
        } catch (error) {
            console.log(error);
            
        }

        

    }
  return (
    <div>
        <h1>Add a new item</h1>
        <form action="" className='mt-4 p-4 border ' onSubmit={handleForm} >
            <div className='flex flex-col gap-2'>
            <label htmlFor="">Enter book name</label>
            <input type="text" name="" id="" placeholder='Book name' className='w-44 border-black   '  value={name} onChange={(e)=> setname(e.target.value)} />

            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="">Enter ISBN No. </label>
            <input value={isbn} onChange={(e)=> setisbn(e.target.value)}  type="text" name="" id="" placeholder='ISBN' className='w-44 border-black   ' />

            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="">Enter Price</label>
            <input value={price} onChange={(e)=> setprice(e.target.value)} type="text" name="" id="" placeholder='Price ' className='w-44 border-black   ' />

            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="">Image</label>
            <input  onChange={(e)=> setfile(e.target.files[0])} type="file" name="" id=""  className='w-44 border-black   ' accept='image/*' />

            </div>

            <button type='submit' className='p-2  border hover:bg-red-300 rounded-md  transition all'>Create</button>
        </form>

    </div>
  )
}

export default List
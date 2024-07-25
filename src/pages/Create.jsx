import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState(null);
    const endPoint = "http://localhost:3000/blogs"
    // yoruba variable
    const padasile = useNavigate()

    const addBlog = async (e) => {
      e.preventDefault()

      if(!title || !body || !author){
        alert("Fill in all fields")
        // setError('please enter your details')
      }
      try {
        const newBlog = {
          title, body, author
        }
        const response = await fetch(endPoint, {
          method: "POST", 
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(newBlog)
        })


        if(!response.ok){
         alert ("failed to add blog")
        }

        // alert ("blog added successfully")
        padasile("/")

      } catch (error) {
        console.error(error)
      }
    }

    


  return (
   <>
    <div className='min-h-screen flex flex-row items-center justify-center'>

   <form onSubmit={addBlog} className='max-w-[600px] w-full' action="">
    <div>
        {/* {error && <div className='text-red-500'>{error}</div>} */}
    <label  className='text-xl flex flex-row' htmlFor="">
        Blog Title
    </label>
    <br />
    <input onChange={(e) => setTitle(e.target.value)} className='border border-black rounded  p-4 w-full ring-gray-950' type="text" placeholder='title' />
    </div>
    <br /> <br />
   <div>
   <label htmlFor="">
        Blog Body
    </label>
    <br />
    <textarea  onChange={(e) => setBody(e.target.value)} name="" id="" rows={10} cols={40} className='w-full border border-black'></textarea>
   </div>
   <br /><br />
    <div>
    <label htmlFor="">
        Author
    </label>
    <br />
    <input  onChange={(e) => setAuthor(e.target.value)} className=' w-full border-2 p-4 border-black' type="name" placeholder='name of author' />

    </div>
    <button className='bg-green-900 p-5 flex w-[100%]  text-center justify-center border ring-yellow-600 text-white'>Add new Blog</button>
   </form>
    </div>
   </>
  )
}

export default Create

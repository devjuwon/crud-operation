import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Update = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const {id} = useParams()
  const navigate = useNavigate()

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`)
      if(!response.ok){
        throw new Error("failed to fetch blog")
      }
      const data = await response.json()
      setTitle(data.title);
      setBody(data.body);
      setAuthor(data.author)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [id])

  const updateBlog = async (e) => {
    e.preventDefault()

    try {
      const updatedBlog = {title, body, author}

      const response = await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PUT", 
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedBlog)
      }) 
      if(!response.ok){
        throw new Error("failed to update blog");
      }

        alert("blog updated succesfully")
       navigate("/")
    } catch (error) {
      
    }
  }
  



  return (
    <>
    <div className='min-h-screen flex flex-row items-center justify-center'>

   <form onSubmit={updateBlog} className='max-w-[600px] w-full' action="">
    <div>
        {/* {error && <div className='text-red-500'>{error}</div>} */}
    <label  className='text-xl flex flex-row' htmlFor="">
        Blog Title
    </label>
    <br />
    <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-black rounded  p-4 w-full ring-gray-950' type="text" placeholder='title' />
    </div>
    <br /> <br />
   <div>
   <label htmlFor="">
        Blog Body
    </label>
    <br />
    <textarea value={body}  onChange={(e) => setBody(e.target.value)} name="" id="" rows={10} cols={40} className='w-full border border-black'></textarea>
   </div>
   <br /><br />
    <div>
    <label htmlFor="">
        Author
    </label>
    <br />
    <input  onChange={(e) => setAuthor(e.target.value)} value={author} className=' w-full border-2 p-4 border-black' type="name" placeholder='name of author' />

    </div>
    <button className='bg-green-900 p-5 flex w-[100%]  text-center justify-center border ring-yellow-600 text-white'>Update Blog</button>
   </form>
    </div>
   </>
  )
}

export default Update






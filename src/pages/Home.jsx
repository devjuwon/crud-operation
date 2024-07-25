import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";

const Home = () => {
  const endPoint = "http://localhost:3000/blogs"
  const [blogs, setBlogs] = useState([])

  const fetchBlog = async () => {
    try {
      const response = await fetch(endPoint)
      const convertedResponse = await response.json()
      setBlogs(convertedResponse)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE"
         
      })
      if(!response.ok){
        throw new Error("failed to delete blog")
      }
      setBlogs((previousBlogs) => previousBlogs.filter((blog)=> blog.id !== id))
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className="px-[200px]">
        {
          blogs && blogs.map((blog) => (
            <Blog  key={blog.id} id={blog.id} titleProp={blog.title} bodyProp={blog.body} authorProp={blog.author} deleteProp={ () => deleteBlog(blog.id)}/>
          ))
        }
      </div>
    </div>
  );
};

export default Home;

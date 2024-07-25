import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({deleteProp, id, titleProp, bodyProp, authorProp }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if(words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";


  }

  return (
    <>
      <Link to={`/blogs/${id}`}>
      <div className="container bg-yellow-200  border rounded p-5  mt-6">
        <h1>{titleProp}</h1>
        <p>{truncateText(bodyProp, 50)}</p>

        <div className="flex justify-between">
          <p>{authorProp}</p>
          <div className="icons-container flex gap-2">
            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
             <Link to={`/update/${id}`}>
             <CiEdit />
             </Link>
            </div>
            <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-red-600 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <CiTrash onClick={deleteProp}/>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Blog;









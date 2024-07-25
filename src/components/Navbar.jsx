import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[10vh] bg-green-900 flex justify-between items-center p-8">
        
          <div className="text-3xl text-white italic font-bold">DevJuwon Blog</div>
          <div className="text-xl text-white space-x-10">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/update">Update</Link>
            <Link to="blogpage">Blogpage</Link>
          </div>

          <div>
            <FaSearch className="text-white"/>
          </div>
     
      </nav>
    </>
  );
};

export default Navbar;

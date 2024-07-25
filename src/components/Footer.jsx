import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-green-900 bg-cover max-w-screen-2xl  container mx-auto ">
      <div className="px-4 py-12 flex justify-between">
      <div>
      <div className="text-4xl text-white italic font-bold">DevJuwon Blog</div>
      <div className="flex  items-center text-white gap-3 justify-between mt-[20px]">
        <FaFacebookF className="w-5 h-5 cursor-pointer  hover:opacity-30" />
        <FaTwitter className="w-5 h-5 cursor-pointer hover:opacity-30" />
        <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:opacity-30" />
        <FaInstagram className="w-5 h-5 cursor-pointer hover:opacity-30" />
      </div>
      </div>
        <div>
            <h1 className="text-xl text-white font-semibold">Email Address</h1>
            <h1 className="text-white">devjuwonkuzoma@gmail.com</h1>
        </div>
        <div>
            <h1 className="text-xl text-white font-semibold">Address</h1>
            <h1 className="text-white">Gomycode Nigeria, at Yaba hackerspace.</h1>
        </div>

      </div>

      <hr  className="opacity-100 w-1/2 mx-[350px]"/>
      <div className="bg-Black">
        <p className=" text-center items-center py-3 text-white">
         
          © {currentYear} DevJuwon. All rights reserved | Privacy Policy
        </p>
      </div>
      </footer>
    </>
  );
};

export default Footer;

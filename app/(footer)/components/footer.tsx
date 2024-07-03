import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className=" flex justify-center items-center mt-20">
      <div>
        <h2 className=" underline text-xl text-center my-5 font-semibold text-green-500">
          2024 made By TechNerd
        </h2>
        <p className=" text-center hover:text-green-500 selection:bg-green-500 text-sm mx-5 w-[90%] m-auto lg:w-[60%] text-green-500  selection:text-black text-balance  justify-center lg:mx-auto">
          {" "}
          I'd love to hear from you! Whether you have a project in mind, need
          help with development, or just want to connect and chat about
          technology, feel free to reach out. You can email me at
          <span className=" underline font-bold px-2">
            yeabnoah5@gmail.com
          </span>{" "}
          or connect with me on telegram{" "}
          <span className=" underline font-bold px-2">@technerd345.</span>
          Let's collaborate and create something amazing together!
        </p>
        <h2 className=" underline text-sm text-center my-10 font-semibold text-green-500">
          2024 made By TechNerd
        </h2>
      </div>
    </div>
  );
}

export default Footer;

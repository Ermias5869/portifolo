import Image from "next/image";
import React from "react";
import profile from "../../../public/photo_2024-06-21_12-27-49.jpg";
import {
  SiGithub,
  SiInternetarchive,
  SiLinkedin,
  SiTelegram,
  SiX,
} from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import "./styles.css";
import line from "../../../public/llline.svg";

function Navbar() {
  const socialMediaLinks = [
    {
      name: "telegram",
      link: "https://t.me/selfmadecoder",
      icon: SiTelegram,
    },

    {
      name: "Github",
      link: "https://github.com/yeabnoah",
      icon: SiGithub,
    },
    {
      name: "X",
      link: "https://x.com/technerd345",
      icon: SiTelegram,
    },
    {
      name: "personal",
      link: "https://x.com/technerd556",
      icon: TbWorld,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/",
      icon: SiLinkedin,
    },
  ];

  return (
    <div className=" flex justify-center p-5 pt-10">
      <div className=" flex flex-col ">
        <Image
          className=" h-[150px] w-[150px] mt-14 mx-auto rounded-md mb-5  hover:grayscale-0 -translate-y-4 hover:transition-all  hover:-rotate-6 hover:transition-y-0"
          alt="Tech Nerd profile picture"
          src={profile}
        />
        <h2
          className=" text-xl text-center text-green-500 font-semibold selection:text-black  
        selection:bg-green-500 mb-2 hover:text-green-500"
        >
          yeabsra Ashebir | Tech Nerd 📟
        </h2>

        <div
          className=" flex gap-5 justify-center items-center mt-2 mb-5
        "
        >
          {socialMediaLinks.map((link, index) => {
            return (
              <Link
                className=" hover:scale-150 hover:text-green-500 transition-all text-green-500"
                key={index}
                href={link.link}
              >
                <link.icon className=" text-3xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

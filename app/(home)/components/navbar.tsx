import Image from "next/image";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import "./styles.css";

function Navbar() {
  const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/Ermias5869",
      icon: SiGithub,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ermias-amare/",
      icon: SiLinkedin,
    },
  ];

  return (
    <div className="flex justify-center p-5 pt-10">
      <div className="flex flex-col">
        <Image
          src="/profile.png" // <-- fixed: use public path instead of import
          alt="Tech Nerd profile picture"
          width={150} // required for next/image
          height={150} // required for next/image
          className="mt-14 mx-auto mb-5 rounded-md hover:grayscale-0 -translate-y-4 hover:transition-all hover:-rotate-6"
        />
        <h2 className="text-xl text-center text-blue-500 font-semibold selection:text-black selection:bg-blue-500 mb-2 hover:text-blue-500">
          Ermias Amare 💻
        </h2>

        <div className="flex gap-5 justify-center items-center mt-2 mb-5">
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hover:scale-150 hover:text-blue-500 transition-all text-blue-500"
            >
              <link.icon className="text-3xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

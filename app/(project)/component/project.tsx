import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FiArrowUpRight } from "react-icons/fi";
import { MdBrokenImage } from "react-icons/md";
import { FaClipboard, FaSignature } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";

import "../../globals.css";
type ProjectImageProps = {
  src: string;
  alt: string;
};

// ✅ Use public paths instead of importing image files
// (Next.js automatically optimizes from /public)
const projects = [
  {
    link: "https://github.com/Ermias5869/BDU-Connect",
    title: "BDU-Connect",
    description:
      "A social networking platform tailored for university students to connect, share resources, and collaborate on projects within their academic community.",
    image: "/bduconnect.jpg",
    icon: <FaClipboard className="h-4 w-4 text-blue-500" />,
  },
  {
    link: "https://github.com/BoostifyTech",
    title: "BoostifyTech",
    description:
      "A Telegram bot that provides social media followers, likes, views, and other services to help users grow their social presence.",
    image: "/telegram.jpg",
    icon: <MdBrokenImage className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/Ermias5869/WasheraVideoCall",
    title: "Washera Video Call",
    description:
      "A video calling application designed to facilitate seamless communication between university students.",
    image: "/washera.png",
    icon: <FaSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/Ermias5869/ABStore-user",
    title: "ABstore",
    description:
      "A fast and intuitive e-commerce web app designed for seamless product discovery and smooth checkout experience.",
    image: "/abstore.png",
    icon: <FiArrowUpRight className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/Ermias5869/NeoLearn",
    title: "NeoLearn (still in development)",
    description:
      "A learning management system (LMS) designed to facilitate online education and training with tools for course creation, content delivery, and student assessment.",
    image: "/neo.png",
    icon: <AiOutlineColumnWidth className="h-4 w-4 text-neutral-500" />,
  },
];

export function Project() {
  return (
    <div className="my-14">
      <h2 className="underline text-2xl text-center font-semibold text-blue-500">
        Projects
      </h2>

      <BentoGrid className="max-w-4xl mx-5 lg:mx-auto mt-10 mb-32 my-10">
        {projects.map((item, i) => (
          <BentoGridItem
            key={i}
            link={item.link}
            title={item.title}
            description={item.description}
            header={<ProjectImage src={item.image} alt={item.title} />}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// ✅ Clean reusable component for project image blocks
const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      className="w-full h-full object-cover rounded-md"
      priority
    />
  </div>
);

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FiArrowUpRight } from "react-icons/fi";
import { MdAlignHorizontalRight, MdBrokenImage } from "react-icons/md";
import { FaClipboard, FaSignature } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import Image from "next/image";
import myspace from "../../../public/bduconnect.jpg";
import anon from "../../../public/telegram.jpg";
import hms from "../../../public/washera.png";
import xplor from "../../../public/neo.png";
import xx from "../../../public/abstore.png";
import "../../globals.css";

export function Project() {
  return (
    <div className=" my-14">
      <h2 className=" underline text-2xl text-center font-semibold text-blue-500">
        Projects
      </h2>
      <BentoGrid className="max-w-4xl mx-5 lg:mx-auto mt-10 mb-32 my-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            link={item.link}
            title={item.title}
            description={item.description}
            header={item.header}
            // icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={anon}
      alt="BDU-Connect"
      className=" w-ful h-full rounded-md custom-background"
    />
  </div>
);

const Test = () => (
  <div className="flex flex-1 overflow-y-hidden w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 custom-background">
    <Image src={xx} alt="myspace" className=" w-ful h-full rounded-md" />
  </div>
);

const Myspace = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={myspace} alt="myspace" className=" w-ful h-full rounded-md" />
  </div>
);

const Hms = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={hms} alt="myspace" className=" w-ful h-full rounded-md" />
  </div>
);

const Xplore = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={xplor} alt="myspace" className=" w-ful h-full rounded-md" />
  </div>
);

const items = [
  {
    link: "https://github.com/Ermias5869/BDU-Connect",
    title: "BDU-Connect",
    description:
      "A social networking platform tailored for university students to connect, share resources, and collaborate on projects within their academic community.",
    header: <Myspace />,
    icon: <FaClipboard className="h-4 w-4 text-blue-500" />,
  },
  {
    link: "https://github.com/BoostifyTech",
    title: "BostifyTech",
    description:
      "a telegram bot that provides social meadia flowers, likes, views, subscribers and other social media services for users to grow their social media accounts.",
    header: <Skeleton />,
    icon: <MdBrokenImage className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/Ermias5869/WasheraVideoCall",
    title: "Washera Video Call",
    description:
      "A video calling application designed to facilitate seamless communication between university students.",
    header: <Hms />,
    icon: <FaSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    link: "https://github.com/Ermias5869/ABStore-user",
    title: "ABstore",
    description:
      "A fast and intuitive e-commerce web app designed for seamless product discovery and smooth checkout experience",
    header: <Test />,
    icon: <FiArrowUpRight className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/Ermias5869/NeoLearn",
    title: "NeoLearn(still in development)",
    description:
      "an learning management system (LMS) designed to facilitate online education and training, providing tools for course creation, content delivery, and student assessment.",
    header: <Xplore />,
    icon: <AiOutlineColumnWidth className="h-4 w-4 text-neutral-500" />,
  },
];

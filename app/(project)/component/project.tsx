import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FiArrowUpRight } from "react-icons/fi";
import { MdAlignHorizontalRight, MdBrokenImage } from "react-icons/md";
import { FaClipboard, FaSignature } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import Image from "next/image";
import myspace from "../../../public/myspace.png";
import anon from "../../../public/anonTransaction.png";
import hms from "../../../public/Ginosis.png";
import xplor from "../../../public/xplore.png";
import nerdspace from "../../../public/nerdspace.png";
import "../../globals.css";

export function Project() {
  return (
    <div className=" my-14">
      <h2 className=" underline text-2xl text-center font-semibold text-green-500">
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
      alt="myspace"
      className=" w-ful h-full rounded-md custom-background"
    />
  </div>
);

const Test = () => (
  <div className="flex flex-1 overflow-y-hidden w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 custom-background">
    {/* <Image src={nerdspace} alt="myspace" className="rounded-md h-[100%]  " /> */}
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
    link: "https://github.com/yeabnoah/My_space",
    title: "My space [ side ]",
    description:
      "a Diary, thought and note sharing platform aiming to help give users actual experience of writting journals and Diaries online.",
    header: <Myspace />,
    icon: <FaClipboard className="h-4 w-4 text-green-500" />,
  },
  {
    link: "https://github.com/yeabnoah/fincraze",
    title: "Anonymous Transaction App  [client]",
    description:
      "Designed and created to create a safe and anonymous transaction. for a company specific operation to manage secure money flow.",
    header: <Skeleton />,
    icon: <MdBrokenImage className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/yeabnoah/hyland",
    title: "Ginosis Desktop App",
    description:
      "a Desktop app designed to help students in their studies, lofi, integrated Reader, ai support, time table and todos, vision board, video player and others.",
    header: <Hms />,
    icon: <FaSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    link: "https://github.com/yeabnoah/NerdSpace_CodeBase",
    title: "Nerd space",
    description:
      "a social networking platform to let peoples with same interest and passion meet, colaborate, work on open source projects, crowd fun projects, share project, taughts and other posts with others, forums and chat rooms and more",
    header: <Test />,
    icon: <FiArrowUpRight className="h-4 w-4 text-neutral-500" />,
  },
  {
    link: "https://github.com/yeabnoah/xplor",
    title: "Xplore Entertainment App",
    description:
      "a mobile app to find and book different occasion events and places in Addis. Dating, movies, event, places, vacations, and a lot more.",
    header: <Xplore />,
    icon: <AiOutlineColumnWidth className="h-4 w-4 text-neutral-500" />,
  },
];

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import "./styles.css";

import Image from "next/image";
import fincraze from "../../../public/frist.png";
import nerdpace from "../../../public/second.png";

function Experience() {
  const content = [
    {
      title: "Full stack Developer",
      description:
        "I worked as a fullstack for a saiket, focusing on developing and maintaining fullstack application using react nextjs node js and mongodb",
      content: (
        <div className="border-blue-500 border-b-2 p-2 rounded-md shadow-b-lg shadow-blue-500 ml-20 mt-14 flex items-center justify-center">
          <div>
            <Image
              src={fincraze}
              alt="react icon"
              className="ml-3 max-h-[80%] w-[80%]  hover:grayscale-0"
            />
            <h2 className=" text-center">react nextjs node js and mongodb </h2>
          </div>
        </div>
      ),
    },
    {
      title: "Full stack Developer",
      description:
        "I worked as a full-stack web and mobile developer, building a comprehensive cloudly for an saas startup . The project encompassed  mobile apps for project upload  along with an project static dashboard.",
      content: (
        <div className="border-blue-500 border-b-2 p-2 rounded-md shadow-b-lg shadow-blue-500 ml-20 mt-14 flex items-center justify-center">
          <div>
            <Image
              src={nerdpace}
              alt="react icon"
              className=" scale-50 mb-[-40px]  hover:grayscale-0"
            />
            <h2 className=" text-center">
              react native - Expo + next js + nest js + postgresql
            </h2>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" mt-40">
      <h2 className=" underline text-2xl text-center font-semibold text-blue-500">
        Experience
      </h2>
      <StickyScroll
        content={content}
        contentClassName={" bg-black overflow-hidden text-blue-500"}
      />{" "}
    </div>
  );
}

export default Experience;

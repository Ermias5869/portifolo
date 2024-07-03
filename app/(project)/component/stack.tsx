import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import "./styles.css";
import xplore from "../../../public/xplorStack.png";
import Image from "next/image";
import fincraze from "../../../public/fincrazeStack-removebg-preview.png";
import nerdpace from "../../../public/jj.png";

function Experience() {
  const content = [
    {
      title: "Mobile Developer",
      description:
        "I worked as a mobile developer for a startup called Explore, focusing on developing a mobile application and integrating it with the Firebase backend.",
      content: (
        <div className="border-green-500 border-b-2 p-2 rounded-md shadow-b-lg shadow-green-500 ml-20 mt-14 flex items-center justify-center">
          <div>
            <Image
              src={xplore}
              alt="react icon"
              className=" max-h-[100%] w-[100%]  hover:grayscale-0"
            />
            <h2 className=" text-center">react native with expo + firebase </h2>
          </div>
        </div>
      ),
    },
    {
      title: "Full stack Developer",
      description:
        "I worked as a full-stack web and mobile developer, building a full-stack anonymous transaction app for an individual client. The project included three mobile apps for sender, receiver, and supervisor, as well as an admin dashboard.",
      content: (
        <div className="border-green-500 border-b-2 p-2 rounded-md shadow-b-lg shadow-green-500 ml-20 mt-14 flex items-center justify-center">
          <div>
            <Image
              src={fincraze}
              alt="react icon"
              className=" scale-125  hover:grayscale-0"
            />
            <h2 className=" text-center">
              Next js + Express js + react native - Expo{" "}
            </h2>
          </div>
        </div>
      ),
    },
    {
      title: "Full stack Developer",
      description:
        "I worked as a full-stack web and mobile developer, building a comprehensive anonymous transaction app for an individual client. The project encompassed three mobile apps for sender, receiver, and supervisor, along with an admin dashboard.",
      content: (
        <div className="border-green-500 border-b-2 p-2 rounded-md shadow-b-lg shadow-green-500 ml-20 mt-14 flex items-center justify-center">
          <div>
            <Image
              src={nerdpace}
              alt="react icon"
              className=" scale-125  hover:grayscale-0"
            />
            <h2 className=" text-center">react native - Expo + Express js </h2>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" mt-40">
      <h2 className=" underline text-2xl text-center font-semibold text-green-500">
        Experience
      </h2>
      <StickyScroll
        content={content}
        contentClassName={" bg-black overflow-hidden text-green-500"}
      />{" "}
    </div>
  );
}

export default Experience;

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import "./styles.css";
import react from "../../../../public/icons/react.png";
import Image from "next/image";
import javascript from "../../../../public/icons/javascript (1).png";

function Stack() {
  const content = [
    {
      title: "React Js",
      description: "JavaScript",
      content: (
        <div className="">
          <Image
            src={javascript}
            alt="react icon"
            className=" h-20 w-20 grayscale hover:grayscale-0"
          />
        </div>
      ),
    },
    {
      title: "React Js",
      description:
        "The sun dipped below the horizon, casting a warm, golden glow over the tranquil lake. Birds chirped softly in the distance, creating a harmonious symphony that complemented the serene setting. A gentle breeze rustled the leaves of the towering oak trees, adding a soothing whisper to the evening air. As the sky transitioned to a deep, twilight blue, stars began to twinkle, promising a peaceful night ahead.",
      content: (
        <div>
          <Image src={react} alt="react icon" className=" h-20 w-20" />

          <p>React is a JavaScript library for building user interfaces...</p>
        </div>
      ),
    },
  ];

  return (
    <div className=" mt-10">
      {" "}
      <StickyScroll
        content={content}
        contentClassName={" bg-black overflow-hidden"}
      />{" "}
    </div>
  );
}

export default Stack;

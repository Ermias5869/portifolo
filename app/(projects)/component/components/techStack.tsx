"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto my-20 px-5 mt-20">
      <h2 className=" text-green-500 text-2xl text-center font-semibold">
        Programming Languages
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Javascript",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/icons/javascript.svg",
  },
  {
    title: "Typescript",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, ",
    link: "/icons/typescript.svg",
  },
  {
    title: "Python",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/icons/python.svg",
  },
  {
    title: "Php",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/icons/c++.svg",
  },
  {
    title: "Go lang",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/icons/go.svg",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer ",
    link: "/icons/php.png",
  },
];

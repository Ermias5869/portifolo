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
      "I leverage JavaScript to create dynamic web experiences and interactive user interfaces, enhancing the functionality of websites and web applications.",
    link: "/icons/javascript.svg",
  },
  {
    title: "Typescript",
    description:
      "With TypeScript, I ensure robust and maintainable code by adding static types to JavaScript, improving scalability and reducing errors in complex projects.",
    link: "/icons/typescript.svg",
  },
  {
    title: "Python",
    description:
      "Python is my go-to for scripting, data analysis, and web development, utilizing frameworks like Django and Flask to build powerful and scalable applications.",
    link: "/icons/python.svg",
  },
  {
    title: "Php",
    description:
      "I use PHP to develop robust server-side applications, leveraging its compatibility with databases and flexibility in web development.",
    link: "/icons/php.png",
  },
  {
    title: "Go lang",
    description:
      "Golang empowers me to build efficient and scalable applications, particularly in concurrent environments and microservices architecture.",
    link: "/icons/go.svg",
  },
  {
    title: "Microsoft",
    description:
      "or high-performance and system-level programming needs, I rely on C++ to create software that demands precise control over hardware resources and complex computations.",
    link: "/icons/c++.svg",
  },
];

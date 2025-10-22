"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto my-20 px-5 mt-20">
      <h2 className=" text-blue-500 text-2xl text-center font-semibold">
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
    title: "Sql",
    description:
      "SQL is essential for managing and querying relational databases, allowing me to efficiently handle data and perform complex queries.",
    link: "/icons/sql.png",
  },
  {
    title: "Dart",
    description:
      "I use Dart to build high-performance mobile apps with Flutter, taking advantage of its fast compile times and expressive syntax to deliver smooth, cross-platform experiences.",
    link: "/icons/dart.svg",
  },
  {
    title: "Java",
    description:
      "With Java, I build robust backend systems and Android applications, leveraging its strong ecosystem and scalability for reliable, enterprise-grade solutions.",
    link: "/icons/java.svg",
  },
];

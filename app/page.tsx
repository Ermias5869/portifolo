import Image from "next/image";
import Navbar from "./(home)/components/navbar";
import Hero from "./(home)/components/hero";
import Stack from "./(projects)/component/components/stack";
import { CardHoverEffectDemo } from "./(projects)/component/components/techStack";
import "./globals.css"; // Ensure to import the global styles
import Terminal from "./(projects)/component/components/terminal";
import Framework from "./(projects)/component/components/framework";
import { Project } from "./(project)/component/project";

export default function Home() {
  return (
    <div className="grid-dot-background w-[100%] mx-auto overflow-x-hidden">
      <section className="min-h-screen flex justify-center items-center">
        <div>
          <Navbar />
          <Hero />
        </div>
      </section>
      <section className="">
        <CardHoverEffectDemo />
      </section>
      <section className=" mt-32">
        <Framework />
        <Project />
      </section>
    </div>
  );
}

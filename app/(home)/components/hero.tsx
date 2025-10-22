import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="">
          <p className="text-center hover:text-blue-500 selection:bg-blue-500 text-sm mx-5 w-[90%] m-auto lg:w-[60%] text-blue-500 selection:text-black text-balance justify-center lg:mx-auto">
            {" "}
            👋 Hello! I&apos;m Ermias 💇‍♂️, a web and mobile developer from
            Ethiopia. I taught myself how to build websites and apps, and I
            enjoy using technology to solve problems and bring ideas to life.
            I&apos;m meticulous in my work, paying close attention to small
            details and finding creative solutions when challenges arise. When
            I&apos;m not coding, I&apos;m always exploring new technologies and
            learning something new.
          </p>

          <p className="selection:bg-blue-500 hover:text-blue-500 text-sm mx-5 m-auto w-[90%] lg:w-[60%] text-blue-500 lg:mx-auto selection:text-black text-balance text-center mt-5">
            {" "}
            I&apos;m passionate about building projects and sharing them with
            others. I thrive on collaboration and love working with others to
            create innovative solutions and make cool stuff happen. Whether
            it&apos;s a complex web application or a sleek mobile app, I&apos;m
            excited to bring your ideas to life. Let&apos;s connect and work
            together to achieve something amazing!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

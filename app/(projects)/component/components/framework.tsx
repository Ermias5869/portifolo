import Image from "next/image";
import React from "react";
import laravel from "../../../../public/icons/laravel.svg";
import typescript from "../../../../public/icons/typescript.svg";
import react from "../../../../public/icons/react.svg";
import nodejs from "../../../../public/icons/node.png";
import tailwind from "../../../../public/icons/tailwind-css.1024x615.png";
import mongoDB from "../../../../public/icons/mongodb-original.460x1024.png";
import electron from "../../../../public/icons/kisspng-electron-javascript-node-js-vue-js-5b09493268c199.1738976915273352184291.png";
import nest from "../../../../public/icons/file-type-nest-middleware-js.1022x1024.png";
import postgresql from "../../../../public/icons/pngegg.png";
import reactnative from "../../../../public/icons/pngegg (1).png";
import hono from "../../../../public/icons/download-removebg-preview.png";
import prisma from "../../../../public/icons/prisma.848x1024.png";
import graphql from "../../../../public/icons/graphql.png";
import expo from "../../../../public/icons/file-type-light-expo.904x1024.png";
import express from "../../../../public/icons/1b54708c5b1e6e4e5957c2967afe9d2c.png";
import socket from "../../../../public/icons/socket.png";
import zustand from "../../../../public/icons/zustand-removebg-preview.png";
import redux from "../../../../public/icons/redux.svg";
import nextjs from "../../../../public/icons/next-js-icon-logo-EE302D5DBD-seeklogo.com-removebg-preview.png";

function Framework() {
  return (
    <div className=" flex justify-center items-center mt-48">
      <div>
        <h2 className=" underline text-2xl text-center font-semibold text-blue-500">
          Stacks and Frameworks
        </h2>
        <div className=" flex mt-10 mb-32 gap-5 items-center mx-auto flex-wrap w-[60%] justify-center">
          <div className=" hover:scale-150 transition-all">
            <Image src={react} className="w-16" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={nodejs} className=" w-16" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={electron} className=" w-16" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={tailwind} className=" w-16" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={mongoDB} className=" w-6" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={nest} className=" w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={postgresql} className=" w-20" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={reactnative} className=" w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={expo} className=" w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={express} className=" w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={socket} className=" w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={zustand} className="w-20" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={prisma} className="w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={graphql} className="w-12" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={redux} className="w-16" alt="icon_name" />
          </div>
          <div className=" hover:scale-150 transition-all">
            <Image src={nextjs} className=" w-14" alt="icon_name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Framework;

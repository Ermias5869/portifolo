import Image from "next/image";
import React from "react";

function Framework() {
  const frameworks = [
    { name: "React", src: "/icons/react.svg", width: 64 },
    { name: "Node.js", src: "/icons/node.png", width: 64 },
    {
      name: "Electron",
      src: "/icons/kisspng-electron-javascript-node-js-vue-js-5b09493268c199.1738976915273352184291.png",
      width: 64,
    },
    { name: "Tailwind", src: "/icons/tailwind-css.1024x615.png", width: 64 },
    { name: "MongoDB", src: "/icons/mongodb-original.460x1024.png", width: 48 },
    {
      name: "Nest.js",
      src: "/icons/file-type-nest-middleware-js.1022x1024.png",
      width: 48,
    },
    { name: "PostgreSQL", src: "/icons/pngegg.png", width: 80 },
    { name: "React Native", src: "/icons/pngegg (1).png", width: 48 },
    {
      name: "Expo",
      src: "/icons/file-type-light-expo.904x1024.png",
      width: 48,
    },
    {
      name: "Express",
      src: "/icons/1b54708c5b1e6e4e5957c2967afe9d2c.png",
      width: 48,
    },
    { name: "Socket.io", src: "/icons/socket.png", width: 48 },
    { name: "Zustand", src: "/icons/zustand-removebg-preview.png", width: 80 },
    { name: "Prisma", src: "/icons/prisma.848x1024.png", width: 48 },
    { name: "GraphQL", src: "/icons/graphql.png", width: 48 },
    { name: "Redux", src: "/icons/redux.svg", width: 64 },
    {
      name: "Next.js",
      src: "/icons/next-js-icon-logo-EE302D5DBD-seeklogo.com-removebg-preview.png",
      width: 56,
    },
    { name: "Laravel", src: "/icons/laravel.svg", width: 64 },
    { name: "TypeScript", src: "/icons/typescript.svg", width: 64 },
  ];

  return (
    <div className="flex justify-center items-center mt-48">
      <div>
        <h2 className="underline text-2xl text-center font-semibold text-blue-500">
          Stacks and Frameworks
        </h2>

        <div className="flex mt-10 mb-32 gap-5 items-center mx-auto flex-wrap w-[60%] justify-center">
          {frameworks.map((item, index) => (
            <div key={index} className="hover:scale-150 transition-all">
              <Image
                src={item.src}
                alt={item.name}
                width={item.width}
                height={item.width}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Framework;

import Image from "next/image";
import React from "react";

function Framework() {
  const icons = [
    { src: "/icons/react.svg", w: 16, alt: "React" },
    { src: "/icons/node.png", w: 16, alt: "Node.js" },
    {
      src: "/icons/kisspng-electron-javascript-node-js-vue-js-5b09493268c199.1738976915273352184291.png",
      w: 16,
      alt: "Electron",
    },
    { src: "/icons/tailwind-css.1024x615.png", w: 16, alt: "Tailwind" },
    { src: "/icons/mongodb-original.460x1024.png", w: 6, alt: "MongoDB" },
    {
      src: "/icons/file-type-nest-middleware-js.1022x1024.png",
      w: 12,
      alt: "NestJS",
    },
    { src: "/icons/pngegg.png", w: 20, alt: "PostgreSQL" },
    { src: "/icons/pngegg (1).png", w: 12, alt: "React Native" },
    { src: "/icons/file-type-light-expo.904x1024.png", w: 12, alt: "Expo" },
    {
      src: "/icons/1b54708c5b1e6e4e5957c2967afe9d2c.png",
      w: 12,
      alt: "Express",
    },
    { src: "/icons/socket.png", w: 12, alt: "Socket.io" },
    { src: "/icons/zustand-removebg-preview.png", w: 20, alt: "Zustand" },
    { src: "/icons/prisma.848x1024.png", w: 12, alt: "Prisma" },
    { src: "/icons/graphql.png", w: 12, alt: "GraphQL" },
    { src: "/icons/redux.svg", w: 16, alt: "Redux" },
    {
      src: "/icons/next-js-icon-logo-EE302D5DBD-seeklogo.com-removebg-preview.png",
      w: 14,
      alt: "Next.js",
    },
    { src: "/icons/laravel.svg", w: 16, alt: "Laravel" },
    { src: "/icons/typescript.svg", w: 16, alt: "TypeScript" },
  ];

  return (
    <div className="flex justify-center items-center mt-48">
      <div>
        <h2 className="underline text-2xl text-center font-semibold text-blue-500">
          Stacks and Frameworks
        </h2>
        <div className="flex mt-10 mb-32 gap-5 items-center mx-auto flex-wrap w-[60%] justify-center">
          {icons.map((icon, idx) => (
            <div key={idx} className="hover:scale-150 transition-all">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.w * 16} // approximate pixel width
                height={icon.w * 16} // approximate pixel height
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Framework;

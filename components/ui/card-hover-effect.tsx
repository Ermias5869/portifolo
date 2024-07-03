import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import javascript from "../../public/icons/javascript (1).png";
import Image from "next/image";
import typescript from "../../public/icons/typescript.png";
import reactjs from "../../public/icons/react.png";
import nodejs from "../../public/icons/nodejs.png";
import { url } from "inspector";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 md:gap-2  py-3 mt-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href="#"
          key={idx}
          className="relative group  block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className=" absolute inset-0 h-full w-full bg-neutral-200 dark:bg-green-500/[0.8]  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <Card className=" w-auto">
            <Image
              src={item.link}
              alt="test"
              height={100}
              width={100}
              className=" h-20 w-20 group-hover:grayscale-0"
            />
            {/* <CardTitle className="">{item.title}</CardTitle> */}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full border-2 shadow-xs shadow-green-500  overflow-hidden  bg-transparent  border-transparent dark:border-green-500/[0.2] group-hover:border-green-500 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-500 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-green-500  tracking-wide  mx-2 text-sm group-hover:text-green-500",
        className
      )}
    >
      {children}
    </p>
  );
};

import Image from 'next/image';
import React from 'react';
import {
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiSwift,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
} from 'react-icons/si';

import { motion } from 'framer-motion';

const stack = [
  {
    name: 'TypeScript',
    icon: (
      <SiTypescript className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'React',
    icon: (
      <SiReact className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <SiNextdotjs className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <SiTailwindcss className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  // {
  //   name: 'React Native',
  //   icon: (
  //     <SiReact className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
  //   ),
  // },
  // {
  //   name: 'Swift',
  //   icon: (
  //     <SiSwift className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
  //   ),
  // },
  {
    name: 'Firebase',
    icon: (
      <SiFirebase className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Figma',
    icon: (
      <SiFigma className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Photoshop',
    icon: (
      <SiAdobephotoshop className="text-8xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
];

function Stack() {
  return (
    <div
      id="stack"
      className="mx-auto h-full w-screen max-w-screen-xl bg-transparent px-4"
    >
      <div className="flex flex-col items-start justify-center space-y-4">
        <h1 className="text-xl font-thin uppercase text-white">Stack</h1>
        <p className="text-3xl font-black uppercase text-white">
          The stack I use
        </p>
        <div className="item-start flex w-full flex-col justify-between space-x-4 md:flex-row md:items-center">
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {stack.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center space-y-4"
              >
                <div className="text-xl text-white group-hover:text-secondary">
                  {item.icon}
                </div>
                <p className="text-md font-light text-white transition-all duration-500 group-hover:text-secondary lg:text-lg">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <motion.div
            className="h-96 w-96"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              src="/stack.svg"
              alt="Code"
              width={500}
              height={500}
              className="z-0 h-full w-full -skew-y-12"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-x-4">
        <div className="h-[200px] w-[1px] bg-gradient-to-b from-transparent to-secondary" />
      </div>
    </div>
  );
}

export default Stack;

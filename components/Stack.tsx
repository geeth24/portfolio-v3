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
  SiSketch,
} from 'react-icons/si';

import { motion } from 'framer-motion';

const stack = [
  {
    name: 'TypeScript',
    icon: (
      <SiTypescript className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'React',
    icon: (
      <SiReact className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <SiNextdotjs className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <SiTailwindcss className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  // {
  //   name: 'React Native',
  //   icon: (
  //     <SiReact className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
  //   ),
  // },
  // {
  //   name: 'Swift',
  //   icon: (
  //     <SiSwift className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
  //   ),
  // },
  {
    name: 'Firebase',
    icon: (
      <SiFirebase className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Photoshop',
    icon: (
      <SiAdobephotoshop className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Figma',
    icon: (
      <SiFigma className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
    ),
  },
  {
    name: 'Sketch',
    icon: (
      <SiSketch className="text-4xl text-white transition-all duration-500 group-hover:text-secondary" />
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
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
          {stack.map((item) => (
            <div className="flex flex-row items-center" key={item.name}>
              <div className=" mr-2 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <p className="text-lg font-bold text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-x-4">
        <div className="h-[200px] w-[1px] bg-gradient-to-b from-transparent to-secondary" />
      </div>
    </div>
  );
}

export default Stack;

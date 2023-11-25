import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    name: 'MyPanchang',
    image: '/mypanchang.svg',
    url: 'https://mypanchang.app/',
  },
  {
    name: 'Dumka',
    image: '/dumka.svg',
    url: 'https://dumkacalgary.com/',
  },
  {
    name: 'Pista House Irving',
    image: '/pistahouse.svg',
    url: 'https://pistahouseirving.com/',
  },
  {
    name: 'Reactive Shots',
    image: '/reactiveshots.svg',
    url: 'https://reactiveshots.com/',
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="mx-auto mt-8 h-full w-screen max-w-screen-xl bg-transparent px-4 lg:mt-16"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center mb-8">
            <h1 className="text-xl font-semibold  text-white">Projects</h1>
            <p className="text-3xl font-light  text-white">Recent projects</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                className="group bg-gradient-to-br from-transparent/10 to-secondary/50 h-20 px-8 rounded-full shadow-2xl shadow-secondary/100 transition-all duration-500"
              >
                <Image
                  src={project.image}
                  width={175}
                  height={175}
                  alt="Project"
                  className="h-full w-40 transition-all duration-500 group-hover:scale-110"
                />
              </Link>
            ))}
          </div>
          <p className="text-xl font-thin italic text-white">
            And many more...
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-y-4">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-row items-center justify-between space-x-4">
            <div className="h-[120px] w-[1px] -rotate-180 transform bg-transparent" />
            <div className="h-[120px] w-[1px] -rotate-180 transform bg-gradient-to-t from-transparent to-white" />
          </div>
          <div className="h-[1px] w-full bg-white" />
          <div className="flex w-full flex-row items-center justify-between space-x-4">
            <div className="h-[60px] w-[1px] -rotate-180 transform bg-gradient-to-t from-white to-transparent" />
            <div className="h-[60px] w-[1px] -rotate-180 transform bg-transparent" />
          </div>
        </div>
        <div className="flex w-full flex-row items-start justify-between space-x-4"></div>
      </div>
    </div>
  );
}

export default Projects;

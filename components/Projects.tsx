import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    name: 'Dumka',
    image: '/dumka.svg',
    url: 'https://dumkacalgary.com/',
  },
  {
    name: 'Pista Express',
    image: '/pistaexpress.svg',
    url: 'https://pistaexpress.com/',
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
          <h1 className="text-xl font-thin uppercase text-white">Projects</h1>
          <p className="text-3xl font-black uppercase text-white">
            Recent projects
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex h-16 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-background to-secondary p-0.5 shadow-2xl transition-all duration-500"
              >
                <Link
                  key={project.name}
                  className="flex h-full flex-col items-center justify-center space-y-4 rounded-lg  bg-gradient-to-br from-background to-background/50 py-1 px-10 transition-all duration-500"
                  href={project.url}
                >
                  <Image
                    src={project.image}
                    width={175}
                    height={175}
                    alt="Project"
                    className="h-full w-40 transition-all duration-500 group-hover:scale-125 group-hover:transform"
                  />
                </Link>
              </div>
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
            <div className="h-[120px] w-[1px] -rotate-180 transform bg-gradient-to-t from-transparent to-primary" />
          </div>
          <div className="h-[1px] w-full bg-primary" />
          <div className="flex w-full flex-row items-center justify-between space-x-4">
            <div className="h-[60px] w-[1px] -rotate-180 transform bg-gradient-to-t from-primary to-transparent" />
            <div className="h-[60px] w-[1px] -rotate-180 transform bg-transparent" />
          </div>
        </div>
        <div className="flex w-full flex-row items-start justify-between space-x-4"></div>
      </div>
    </div>
  );
}

export default Projects;

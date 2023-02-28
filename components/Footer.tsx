import React from 'react';
import Image from 'next/image';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';
import { Link as RLink } from 'react-scroll';
import Link from 'next/link';
function Footer() {
  return (
    <footer className="rounded-lg p-4 py-[13px]  px-[16px] md:px-[4vw] lg:mt-5 lg:pt-[35px]">
      <div className="sm:flex sm:items-center sm:justify-between">
        <RLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            className="mb-3 h-10 w-10 transition-all duration-1000 hover:rotate-[360deg] sm:mb-0"
            alt="Dumka Logo"
            width={140}
            height={40}
          />
        </RLink>

        <ul className="flex flex-wrap items-center text-sm uppercase text-primary">
          <li>
            <RLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-4 hover:underline md:mr-6 "
            >
              Projects
            </RLink>
          </li>
          <li>
            <RLink
              to="stack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-4 hover:underline md:mr-6"
            >
              Stack
            </RLink>
          </li>
          <li>
            <RLink
              to="pricing"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-4 hover:underline md:mr-6 "
            >
              Pricing
            </RLink>
          </li>
          <li>
            <RLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:underline"
            >
              Contact
            </RLink>
          </li>
        </ul>
      </div>

      <hr className="my-3 border-primary sm:mx-auto lg:my-4" />
      <span className="block text-sm text-primary sm:text-center">
        © {new Date().getFullYear()} Geeth Gunnampalli. All rights reserved.
      </span>
      <span className="block text-sm text-primary sm:text-center">
        Built with{' '}
        <Link href="https://nextjs.org/" className="hover:underline">
          <SiNextdotjs className="inline-block h-4 w-4" />
        </Link>{' '}
        <Link href="https://tailwindcss.com/" className="hover:underline">
          <SiTailwindcss className="inline-block h-4 w-4" />
        </Link>{' '}
        <Link href="https://www.framer.com/motion/" className="hover:underline">
          <SiFramer className="inline-block h-4 w-4" />
        </Link>{' '}
        by Me :)
      </span>
    </footer>
  );
}

export default Footer;

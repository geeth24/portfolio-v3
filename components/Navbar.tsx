import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as RLink } from 'react-scroll';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import MenuButton from './MenuButton';

const tabs = [
  {
    name: 'Projects',
  },
  {
    name: 'Stack',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Contact',
  },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  //get scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`shadow-md shadow-black/5 fixed top-0 left-0 z-50  flex w-full flex-wrap justify-between py-[13px] px-[16px] text-[#222222] backdrop-blur-3xl md:px-[4vw] lg:-mt-5 lg:pt-[35px] ${
        isMenu
          ? 'h-screen items-start bg-transparent'
          : 'h-auto items-center bg-transparent'
      }
        ${
          scrollPosition > 0
            ? `${isMenu ? 'bg-transparent' : 'bg-background/50'}`
            : ''
        }
      
      `}
      style={{
        borderImage:
          'linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(255, 255, 255, 0) 2.7%, rgba(255, 255, 255, 0.21) 50.12%, rgba(255, 255, 255, 0) 96.58%)',
        borderImageSlice: 1,
        borderBottomWidth: '1.5px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
      }}
    >
      <div className="flex flex-row items-center  justify-center space-x-4">
        <Image
          src="/logo.svg"
          className="transition-all duration-1000 hover:rotate-[360deg] lg:h-[50px] lg:w-[50px]"
          alt="Geeth Logo"
          width={50}
          height={50}
          loading="eager"
        />
      </div>
      <div
        className={`fixed top-0 left-0 flex h-screen w-screen flex-col justify-center gap-[40px] px-[59px]  text-center text-[45px] font-light text-primary transition-all duration-300 lg:hidden lg:-translate-x-[78px] lg:px-0 ${
          !isMenu && 'pointer-events-none -z-50 -translate-y-20 opacity-0'
        } ${isMenu && '-z-10'}`}
      >
        {tabs.map((tab, index) => (
          <RLink
            key={index}
            className="w-full cursor-pointer text-white hover:text-background transition-all duration-300 lg:hidden"
            style={{
              borderImage:
                ' linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(255, 255, 255, 0) 2.7%, rgba(255, 255, 255, 0.21) 50.12%, rgba(255, 255, 255, 0) 96.58%)',
              borderImageSlice: 1,
              borderBottomWidth: '1.5px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
            }}
            to={tab.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setIsMenu(false)}
          >
            {tab.name}
          </RLink>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center gap-[47px] text-white">
        {tabs.map((tab, index) => (
          <RLink
            key={index}
            className="hidden cursor-pointer text-[14.7px] font-light text-white transition-all duration-300 hover:text-background lg:block lg:text-[21px]"
            to={tab.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {tab.name}
          </RLink>
        ))}
      </div>
      <div className="flex flex-row space-x-2">
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-white to-secondary">
          <Link
            href="https://twitter.com/geethsg7"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background transition-all duration-500 hover:bg-background/50"
          >
            <FaXTwitter color="white" />
          </Link>
        </div>
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-white to-secondary">
          <Link
            href="https://instagram.com/geethsg7/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background transition-all duration-500 hover:bg-background/50"
            aria-label="Open user menu"
          >
            <FaInstagram color="white" />
          </Link>
        </div>
        <MenuButton isMenu={isMenu} setIsMenu={setIsMenu} />
      </div>
    </nav>
  );
}

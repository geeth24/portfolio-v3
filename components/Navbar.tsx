import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as RLink } from 'react-scroll';
import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
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
      className={`fixed top-0 left-0 z-50  flex w-full flex-wrap justify-between py-[13px] px-[16px] text-[#222222] backdrop-blur-xl md:px-[4vw] lg:-mt-5 lg:pt-[35px] ${
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
          'linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)',
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
        className={`fixed top-0 left-0 flex h-screen w-screen flex-col gap-[40px] px-[59px] pt-[100px]  text-center text-[45px] font-light uppercase text-primary transition-all duration-300 lg:hidden lg:-translate-x-[78px] lg:px-0 ${
          !isMenu && 'pointer-events-none -z-50 -translate-y-20 opacity-0'
        } ${isMenu && '-z-10'}`}
      >
        {tabs.map((tab, index) => (
          <RLink
            key={index}
            className="w-full cursor-pointer hover:text-secondary"
            style={{
              borderImage:
                'linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)',
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
            className="hidden cursor-pointer text-[14.7px] font-light uppercase text-primary transition-all duration-300 hover:text-secondary lg:block lg:text-[21px]"
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
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-primary via-secondary to-background">
          <Link
            href="https://twitter.com/geethsg7"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background"
          >
            <FaTwitter color="white" />
          </Link>
        </div>
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-bl from-primary via-secondary to-background">
          <Link
            href="https://instagram.com/geethsg7/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background"
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

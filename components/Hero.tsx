import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [browser, setBrowser] = React.useState('chrome');

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('safari') !== -1) {
      if (userAgent.indexOf('chrome') > -1) {
        setBrowser('chrome');
      } else {
        setBrowser('safari');
      }
    }
  }, []);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center space-y-4 bg-[url(/blob2.svg)] bg-cover bg-center bg-no-repeat ">
        <Image
          src="/grid.svg"
          width={100}
          height={100}
          alt="Grid"
          className="z-0  h-screen w-screen object-cover object-center "
        />
        <div className="absolute z-10 flex flex-col items-center justify-center space-y-4 bg-transparent">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/logo-white.png"
              width={175}
              height={175}
              alt="Logo"
              className="z-20 transition-all duration-1000 hover:rotate-[360deg]"
              loading="eager"
            />
          </motion.div>
          <h1 className="text-6xl font-semibold tracking-tighter text-white lg:text-8xl">
            Geeth
          </h1>
          <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl lg:text-6xl">
            Developer / Designer
          </h3>
          <p className="text-lg font-light tracking-normal text-white md:text-3xl lg:text-4xl">
            Crafting the web through design and code.
          </p>
          <div className="relative flex flex-col items-center justify-center space-x-4">
            <motion.div
              className="absolute top-0 left-0 h-[200px] w-[1px] bg-gradient-to-b from-transparent to-secondary"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true, amount: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Stack from '@/components/Stack';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 -z-20 h-full w-full bg-[url(/blob.svg)] bg-cover bg-no-repeat"
      />
      <Head>
        <title>Geeth | Developer / Designer</title>
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;

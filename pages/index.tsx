import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Head from 'next/head';
import React from 'react';

function Home() {
  return (
    <div className="overflow-hidden  bg-[url(/blob.svg)] bg-cover bg-center bg-no-repeat">
      <Head>
        <title>Geeth | Developer / Designer</title>
      </Head>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;

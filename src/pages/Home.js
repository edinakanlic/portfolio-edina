import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Button from 'react-bootstrap/Button';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default Home;

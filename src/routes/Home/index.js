import React from 'react';
import Testimonials from './Testmonials';
import Projects from './Projects';
import Skills from './Skills';
import Footer from '../../components/Footer';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
const Home = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
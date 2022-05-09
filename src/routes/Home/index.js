import React from 'react';
import Testimonials from './Testmonials';
import Projects from './Projects';
import Skills from './Skills';
import Footer from '../../components/Footer';
import Welcome from './Welcome';
const Home = () => {
  return (
    <>
      <Welcome />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
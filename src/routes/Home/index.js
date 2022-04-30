import React from 'react';
import Testimonials from '../Testmonials';
import Projects from './Projects';
import Skills from './Skills';
import styles from './styles.module.css';

const Home = () => {
  return (
    <>
      <Skills />
      <Projects />
      <Testimonials />
    </>
  )
}

export default Home
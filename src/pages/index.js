import React from 'react'
import '../styles/global.css'

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
    </>
  );
}
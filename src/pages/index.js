import React from 'react'
import '../styles/global.css'

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <head>
        <meta name="google-site-verification" content="8t45mHEs8ghUYnhcXGYHNu-UT8qHdvgZE3vydkBbZeQ" />
      </head>
      <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}
import React from 'react'
import '../styles/global.css'

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

import Helmet from 'react-helmet';
<Helmet>
  <html lang="en" />
  <title>Luqman Zaceria</title>
  <meta name="google-site-verification" content="8t45mHEs8ghUYnhcXGYHNu-UT8qHdvgZE3vydkBbZeQ" />
</Helmet>

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
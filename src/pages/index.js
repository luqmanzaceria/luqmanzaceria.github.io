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

import { Helmet } from 'react-helmet';
import favicon from "../images/favicon.ico"


export default function Home() {
  return (
    <>
      <Helmet>
          <link rel="icon" type="image/x-icon" href={favicon}></link>
          <title>Luqman Zaceria</title>
          <meta name="google-site-verification" content="8t45mHEs8ghUYnhcXGYHNu-UT8qHdvgZE3vydkBbZeQ" />
          <meta name="description" content="Luqman Zaceria Personal Website"></meta>
      </Helmet>
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
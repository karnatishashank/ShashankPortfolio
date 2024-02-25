import React from 'react';
import './App.css';
import './components/navbar/navbar'
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Footer from './components/Footer/footer';

function App() {
  return (
   <>
   <Navbar/>
   <Intro/>
   <Skills/>
   <Works/>
   <Footer/>
   
   </>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Project01 from './pages/Project01/Project01';
import Project02 from './pages/Project02/Project02';

export default function App() {
    return (
      <>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path='/projects/p001' element={ <Project01 /> } />
            <Route path='/projects/p002' element={ <Project02 /> } /> 
            <Route path="/experience" element={ <Experience /> } />
          </Routes>
          <Footer />
      </>
    );
}
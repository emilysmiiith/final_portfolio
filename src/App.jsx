// src/App.jsx - CORRECTED VERSION
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Media from './pages/Media';
import GraphicDesign from './pages/GraphicDesign';
import UxUiDesign from './pages/UxUiDesign';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/ux-ui-design" element={<UxUiDesign />} />
      </Routes>
    </>
  );
}

export default App;
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProjectNavbar from "./components/ProjectNavbar";
import Pencursor from "./components/Pencursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import GraphicDesign from "./pages/GraphicDesign";
import UxUiDesign from "./pages/UxUiDesign";

function App() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  const projectPages = ["/projects", "/media", "/graphic-design", "/ux-ui-design"];
  const regularPages = ["/", "/about"];
  const darkPages = ["/projects", "/media", "/graphic-design", "/ux-ui-design"];

  return (
    <>
      <Pencursor light={darkPages.includes(pathname)} />

      {projectPages.includes(pathname) && <ProjectNavbar />}
      {regularPages.includes(pathname) && <Navbar />}

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

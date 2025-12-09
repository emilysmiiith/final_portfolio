// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProjectNavbar from "./components/ProjectNavbar";
import PenCursor from "./components/Pencursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import GraphicDesign from "./pages/GraphicDesign";
import UxUiDesign from "./pages/UxUiDesign";

function App() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();

  // Pages that use the project-style navbar
  const projectPages = [
    "/projects",
    "/media",
    "/graphic-design",
    "/ux-ui-design"
  ];

  // Pages that use the regular navbar
  const regularPages = [
    "/",
    "/about"
  ];

  // Pages with dark backgrounds that need light pen
  const darkPages = [
    "/projects",
    "/media",
    "/graphic-design",
    "/ux-ui-design"
  ];

  // ---- Determine which navbar to show ----
  const useProjectNavbar = projectPages.includes(pathname);
  const useRegularNavbar = regularPages.includes(pathname);
  const useLightPen = darkPages.includes(pathname);

  return (
    <>
      {/* Pen Cursor - light version on dark pages */}
      <Pencursor light={useLightPen} />

      {/* Correct Navbar Rendering */}
      {useProjectNavbar && <ProjectNavbar />}
      {useRegularNavbar && <Navbar />}

      {/* App Routing */}
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
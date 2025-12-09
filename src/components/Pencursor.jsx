import React, { useEffect, useState } from 'react';
import './Pencursor.css';
import penIcon from '../assets/images/pen.svg';
import penLightIcon from '../assets/images/penlight.svg';

const Pencursor = ({ light = false }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setCursorPos({ x: -100, y: -100 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="pen-cursor"
      style={{ left: cursorPos.x, top: cursorPos.y }}
    >
      <img src={light ? penLightIcon : penIcon} alt="" className="pen-icon" />
    </div>
  );
};

export default Pencursor;

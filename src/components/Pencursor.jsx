import React, { useEffect, useState } from 'react';
import './PenCursor.css';
import penIcon from '../assets/images/pen.svg';
import penLightIcon from '../assets/images/penlight.svg';

const PenCursor = ({ light = false }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Hide cursor when leaving window
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
      style={{ 
        left: cursorPos.x, 
        top: cursorPos.y 
      }}
    >
      <img src={light ? penLightIcon : penIcon} alt="" className="pen-icon" />
    </div>
  );
};

export default PenCursor;
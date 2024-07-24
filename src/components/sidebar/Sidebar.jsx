// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const directories = new Array(5).fill(null);

  return (
    <div className="sidebar">
      {directories.map((_, index) => (
        <div
          key={index}
          className={`directory ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="folder-icon">
            {/* You can use an icon library or custom SVG here */}
            📁
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

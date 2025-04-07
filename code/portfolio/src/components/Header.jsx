import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

function Header() {
  const [mode, setMode] = useState(false); // false = Light, true = Dark

  useEffect(() => {
    document.body.style.backgroundColor = mode ? '#121212' : 'white';
    document.body.style.color = mode ? 'white' : 'black';
  }, [mode]);

  function handleModeToggle() {
    setMode(!mode);
  }

  return (
    <div>
      <nav className="flex justify-between p-4 items-center bg-gray-800 text-white">
        <div className="flex gap-4">
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
          <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
        </div>
        <div className="mode">
          <button
            className={`px-4 py-2 rounded ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={handleModeToggle}
          >
            {mode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;

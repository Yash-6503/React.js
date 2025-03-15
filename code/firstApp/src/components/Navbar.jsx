import React from 'react'
import "./Navstyle.css";

const Navbar = () => {
  return (
      <>
          <nav className="navbar">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
          </nav>
      </>
  )
}

export default Navbar;

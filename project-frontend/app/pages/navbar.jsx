import React, { useState } from "react";

const Navbar = ({ setpage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageChange = (pageNum) => {
    return () => {
      setpage(pageNum);
      toggleMenu(); // Close the menu after navigation
    };
  };

  return (
    <div>
      <header>
        <a href="#" className="logo">Hackathon<span>HUB</span></a>
        <div
          id="menu"
          className={`fas fa-bars ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
        <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a exact to="/" ClassName="active" onClick={handlePageChange(1)}>home</a>
            </li>
            <li>
              <a to="/about" ClassName="active" onClick={handlePageChange(3)}>Find Contests</a>
            </li>
            <li>
              <a to="/service" ClassName="active" onClick={handlePageChange(4)}>Create Hackathon</a>
            </li>
            <li>
              <a to="/contests" ClassName="active" onClick={handlePageChange(5)}>Find Hackathon</a>
            </li>
            <li>
              <a to="/contests" ClassName="active" onClick={handlePageChange(6)}>Lb</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;


import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <a
          href="#"
          className="navbar-logo"
          onClick={closeMenu}
        >
          B.
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Dark Mode */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <span className="theme-icon" />
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? 'active' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu glass">

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>
      )}

    </header>
  );
}

export default Navbar;

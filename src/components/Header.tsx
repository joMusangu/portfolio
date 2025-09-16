import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="pixel-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="pixel-logo pixel-glow">
            PORTFOLIO
          </div>
        </Link>
        
        <nav className="pixel-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            PROJECTS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

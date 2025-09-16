import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="pixel-character-container pixel-float">
            <div className="pixel-character-sprite">
              {/* ASCII Art Character */}
              <pre className="character-art">
{`    ██╗  ██╗███████╗██╗  ██╗███████╗    ██╗  ██╗███████╗██╗  ██╗███████╗
    ██║  ██║██╔════╝██║  ██║██╔════╝    ██║  ██║██╔════╝██║  ██║██╔════╝
    ███████║█████╗  ███████║█████╗      ███████║█████╗  ███████║█████╗  
    ██╔══██║██╔══╝  ██╔══██║██╔══╝      ██╔══██║██╔══╝  ██╔══██║██╔══╝  
    ██║  ██║███████╗██║  ██║███████╗    ██║  ██║███████╗██║  ██║███████╗
    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝`}
              </pre>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="pixel-title pixel-glow">
              WELCOME YOU DONUTS TO MY
            </h1>
            <h2 className="pixel-subtitle pixel-rainbow">
              PIXEL PORTFOLIO (SHAZAM!)
            </h2>
            <p className="pixel-text">
              Come on a journey through my digital realm where creativity meets nostalgia.
              Explore my world of pixel art, code, and projects. (I'm not a donut but you are!)
            </p>
            
            <div className="hero-buttons">
              <Link to="/about" className="pixel-button pixel-bounce">
                START QUEST
              </Link>
              <Link to="/projects" className="pixel-button secondary pixel-pulse">
                VIEW PROJECTS
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pixel-stars">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="star" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              *
            </div>
          ))}
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="pixel-subtitle text-center">FEATURES</h2>
          <div className="features-grid">
            <div className="pixel-card feature-card">
              <div className="feature-icon">💻</div>
              <h3 className="pixel-text">FULL-STACK DEV</h3>
              <p className="pixel-text">
                Modern web applications built with React, Next.js, Django, and Python. From academic management systems to movie reservation apps.
              </p>
            </div>
            
            <div className="pixel-card feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="pixel-text">MACHINE LEARNING</h3>
              <p className="pixel-text">
                Data science and ML projects using Python, scikit-learn, XGBoost, and MLflow. Including Premier League title prediction models.
              </p>
            </div>
            
            <div className="pixel-card feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="pixel-text">TOOLS & AUTOMATION</h3>
              <p className="pixel-text">
                Python utilities and automation tools. Barcode scanners, inventory management, and efficiency-improving solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

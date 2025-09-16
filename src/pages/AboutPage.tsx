import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="pixel-title pixel-glow">ABOUT ME</h1>
          <div className="about-content">
            <div className="character-showcase">
              <div className="pixel-character-large pixel-float">
                <pre className="character-art-large">
{`    ████████╗███████╗██╗  ██╗██╗███████╗ █████╗ ██╗   ██╗
    ╚══██╔══╝██╔════╝██║  ██║██║██╔════╝██╔══██╗██║   ██║
       ██║   ███████╗███████║██║███████╗███████║██║   ██║
       ██║   ╚════██║██╔══██║██║╚════██║██╔══██║██║   ██║
       ██║   ███████║██║  ██║██║███████║██║  ██║╚██████╔╝
       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝
                                                           
    ███╗   ███╗██╗   ██╗███████╗ █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗
    ████╗ ████║██║   ██║██╔════╝██╔══██╗████╗  ██║██╔════╝ ██║   ██║
    ██╔████╔██║██║   ██║███████╗███████║██╔██╗ ██║██║  ███╗██║   ██║
    ██║╚██╔╝██║██║   ██║╚════██║██╔══██║██║╚██╗██║██║   ██║██║   ██║
    ██║ ╚═╝ ██║╚██████╔╝███████║██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝
    ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝`}
                </pre>
              </div>
              <div className="character-stats">
                <div className="stat-item">
                  <span className="stat-label">LEVEL:</span>
                  <span className="stat-value pixel-rainbow">55</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">CLASS:</span>
                  <span className="stat-value">FULL-STACK DEVELOPER</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">SPECIALTY:</span>
                  <span className="stat-value">ADAPTABLE DEVELOPER (i think 😊)</span>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <div className="pixel-card story-card">
                <h2 className="pixel-subtitle">MY STORY</h2>
                <p className="pixel-text">
                  Greetings, traveler! I'm a passionate aspiring software developer who fell in love with the 
                  nostalgic charm of 8-bit and 16-bit video games. My journey began in the 
                  pixelated realms of classic arcade games, and I've been crafting digital 
                  experiences ever since.
                </p>
                <p className="pixel-text">
                  I specialize in creating modern web applications, 
                and software development. My mission is to bring the 
                  magic of software development ro helping people and hopefully make a difference.
                </p>
              </div>
              
              <div className="skills-section">
                <h2 className="pixel-subtitle">SKILLS & POWERS</h2>
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-icon">⚡</div>
                    <span className="skill-name">React/TypeScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="skill-icon">🔄</div>
                    <span className="skill-name">Adaptability</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="skill-icon">😅</div>
                    <span className="skill-name">Pretending to act busy at work</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="skill-icon">💾</div>
                    <span className="skill-name">Backend Development</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="cta-buttons">
                  <Link to="/journey" className="pixel-button journey-button pixel-glow">
                    🌍 MY JOURNEY
                  </Link>
                  <a 
                    href="/portfolio/resume.pdf" 
                    download="Tshisau_Musangu_Resume.pdf"
                    className="pixel-button resume-button pixel-pulse"
                  >
                    📄 DOWNLOAD RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="timeline-section">
        <div className="container">
          <h2 className="pixel-subtitle text-center">WORK LOG</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker pixel-pulse"></div>
              <div className="timeline-content pixel-card">
                <h3 className="pixel-text">2024 - PRESENT</h3>
                <p className="pixel-text">
                  🚀 LEVEL UP! Started my coding adventure at Chick-fil-A, building apps for 5000+ users and tax tools that 
                  made accountants cry tears of joy (99.9% compliance!). Promoted to Data Engineer Co-op III - now I'm the 
                  pipeline wizard making AI adoption happen (10% increase!).
                </p>
                <p className="pixel-text">
                  🍴 Currently IT Student Assistant at Texas Tech, helping campus dining run smoothly! I speed up installs by 
                  30% and solve 15+ support tickets weekly with 95% satisfaction (faster than "turn it off and on again"!).
                </p>
                <p className="pixel-text">
                  🐔 Built ETL pipelines that saved 20+ hours monthly, boosted uptime to 99.9% (no data naps allowed 💤), 
                  created React sites for 700+ employees, and designed AWS automation that slashed manual work by 55%. 
                  Still crafting pixel art portfolios because old school + new school = awesome! 🎮✨
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker pixel-pulse"></div>
              <div className="timeline-content pixel-card">
                <h3 className="pixel-text">2022 - 2024</h3>
                <p className="pixel-text">
                Developed multiple full-stack applications and dove into software development, AI, and prompt engineering. 
                At first, I thought AI was going to be like I, Robot with Will Smith. Turns out… it’s more like having Jarvis from Iron Man. 
                Naturally, I tried building a stock predictor with 99.9% accuracy that could turn $1 into $100,000. Spoiler: it failed.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker pixel-pulse"></div>
              <div className="timeline-content pixel-card">
                <h3 className="pixel-text">2020 - 2022</h3>
                <p className="pixel-text">
                I started my coding journey with Java — printed ‘Hello World’ and thought I could do anything. Spoiler: I couldn’t. 
                Then I discovered the magic of React and modern web development. 
                My first project? A calculator with 9 at the bottom and 0 at the top… I proudly called it the Inverse Calculator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

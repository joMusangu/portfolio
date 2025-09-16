import { useState } from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'tools';
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'tools'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'BLUEPRINT',
      description: 'A comprehensive academic portfolio management system that helps students organize coursework, track grades, create flashcards, and manage academic materials.',
      technologies: ['TypeScript', 'CSS', 'Django', 'PostgreSQL'],
      image: '📚',
      githubUrl: 'https://github.com/joMusangu/blueprint-system',
      category: 'web'
    },
    {
      id: 2,
      title: 'MOVIE RESERVATION APP',
      description: 'A movie reservation application with a 5-star rating system. Features frontend built with Next.js and backend built with Django.',
      technologies: ['Next.js', 'Django', 'Python', 'React'],
      image: '🎬',
      githubUrl: 'https://github.com/joMusangu/movie-ui',
      category: 'web'
    },
    {
      id: 3,
      title: 'VEHICLE RENTAL SYSTEM',
      description: 'A full-stack rental app with trip planning and fuel-stop recommendations, Stripe payments, and persistent data storage. Reduced booking time by 30%.',
      technologies: ['Java', 'React', 'Google Maps API', 'Stripe', 'SQL/NoSQL'],
      image: '🚗',
      category: 'web'
    },
    {
      id: 4,
      title: 'WAREHOUSE BARCODE SCANNER',
      description: 'A Python tool for multi-barcode scanning, exporting structured CSVs and improving warehouse inventory accuracy by 20%, saving 5+ hours/week in manual entry.',
      technologies: ['Python', 'CSV Export', 'Barcode Scanning'],
      image: '📦',
      category: 'tools'
    },
    {
      id: 5,
      title: 'CHICK-FIL-A TRIVIA GAME',
      description: 'An interactive trivia game designed to help users learn and understand the history of Chick-fil-A in a fun, engaging way. Features multiple choice questions, scoring system, and educational content.',
      technologies: ['Python', 'AWS', 'React'],
      image: '🍗',
      category: 'web'
    },
    {
      id: 6,
      title: 'PREMIER LEAGUE TITLE PREDICTOR',
      description: 'Predicts season-end champions by simulating every remaining fixture using team strength (xG/Elo), injuries, and schedule difficulty. Outputs calibrated title odds and weekly updates.',
      technologies: ['Python', 'scikit-learn', 'statsmodels', 'XGBoost/LightGBM', 'MLflow', 'Postgres/Parquet'],
      image: '⚽',
      category: 'tools'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'ALL PROJECTS', icon: '🌟' },
    { key: 'web', label: 'WEB APPS', icon: '💻' },
    { key: 'mobile', label: 'MOBILE APPS', icon: '📱' },
    { key: 'tools', label: 'TOOLS & UTILITIES', icon: '🔧' }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="pixel-title pixel-glow">MY PROJECTS</h1>
          <p className="pixel-text text-center">
            A collection of full-stack applications, web tools, and innovative solutions.
            Each project showcases modern development practices and real-world impact.
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-button ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key as any)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card pixel-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <div className="project-icon pixel-bounce">
                    {project.image}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="pixel-subtitle">{project.title}</h3>
                  <p className="pixel-text">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link pixel-button">
                        LIVE DEMO
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link pixel-button secondary">
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="pixel-subtitle text-center">PROJECT STATS</h2>
          <div className="stats-grid">
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">6+</div>
              <div className="stat-label">PROJECTS COMPLETED</div>
            </div>
            
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">3+</div>
              <div className="stat-label">YEARS EXPERIENCE</div>
            </div>
            
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">30%</div>
              <div className="stat-label">EFFICIENCY IMPROVEMENT</div>
            </div>
            
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">5+</div>
              <div className="stat-label">HOURS SAVED/WEEK</div>
            </div>
            
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">ELATED!</div>
              <div className="stat-label">ENJOYMENT</div>
            </div>
            
            <div className="stat-card pixel-card">
              <div className="stat-number pixel-rainbow">+1250</div>
              <div className="stat-label">XP GAINED</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

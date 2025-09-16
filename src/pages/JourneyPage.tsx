import { useState, useEffect, useRef } from 'react';
import './JourneyPage.css';

interface Location {
  name: string;
  country: string;
  duration: string;
  coordinates: [number, number]; // [longitude, latitude]
  color: string;
  description: string;
}

const locations: Location[] = [
  {
    name: 'Birth',
    country: 'Congo',
    duration: 'Birth',
    coordinates: [21.7587, -4.0383],
    color: '#ff0000',
    description: 'Where my journey began'
  },
  {
    name: 'Early Years',
    country: 'Zimbabwe',
    duration: '3 years',
    coordinates: [29.1549, -19.0154],
    color: '#00ff00',
    description: 'My first memories and early childhood'
  },
  {
    name: 'Growing Up',
    country: 'Lesotho',
    duration: '3 years',
    coordinates: [28.2336, -29.6100],
    color: '#0000ff',
    description: 'Formative years and school beginnings'
  },
  {
    name: 'Teenage Years',
    country: 'South Africa',
    duration: '11 years',
    coordinates: [22.9375, -30.5595],
    color: '#ffff00',
    description: 'Elemetary school, and high school'
  },
  {
    name: 'Current',
    country: 'United States',
    duration: '5+ years',
    coordinates: [-95.7129, 37.0902],
    color: '#ff00ff',
    description: 'University, professional growth and new adventures'
  }
];

const JourneyPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isReplaying, setIsReplaying] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<any>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsReplaying(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReplay = () => {
    setIsReplaying(true);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && !isReplaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= locations.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isReplaying]);

  useEffect(() => {
    if (isReplaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= locations.length - 1) {
            setIsReplaying(false);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isReplaying]);

  // Initialize Globe.gl
  useEffect(() => {
    const initializeGlobe = () => {
      if (!globeRef.current) return;

      // Use global Globe constructor from CDN
      const world = new (window as any).Globe(globeRef.current, { animateIn: false })
        .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png');

      // Auto-rotate
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.35;

      // Add journey points
      const journeyData = locations.map(loc => ({
        lat: loc.coordinates[1],
        lng: loc.coordinates[0],
        color: loc.color,
        size: 0.5,
        label: loc.country
      }));

      world
        .pointsData(journeyData)
        .pointColor('color')
        .pointAltitude(0.01)
        .pointRadius('size')
        .pointResolution(8)

      // Add journey arcs
      const arcsData = [];
      for (let i = 0; i < locations.length - 1; i++) {
        arcsData.push({
          startLat: locations[i].coordinates[1],
          startLng: locations[i].coordinates[0],
          endLat: locations[i + 1].coordinates[1],
          endLng: locations[i + 1].coordinates[0],
          color: ['#00ff00', '#00ff00']
        });
      }

      world
        .arcsData(arcsData)
        .arcColor('color')
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000);

      worldRef.current = world;
    };

    // Wait for Globe.gl to load from CDN
    const checkGlobe = () => {
      if ((window as any).Globe) {
        initializeGlobe();
      } else {
        setTimeout(checkGlobe, 100);
      }
    };
    checkGlobe();

    return () => {
      if (worldRef.current) {
        worldRef.current._destructor();
      }
    };
  }, []);

  // Update globe when currentStep changes
  useEffect(() => {
    if (worldRef.current && isPlaying) {
      const currentLocation = locations[currentStep];
      if (currentLocation) {
        worldRef.current.pointOfView({
          lat: currentLocation.coordinates[1],
          lng: currentLocation.coordinates[0],
          altitude: 2
        }, 1000);
      }
    }
  }, [currentStep, isPlaying]);

  return (
    <div className="journey-page">
      <section className="journey-hero">
        <div className="container">
          <h1 className="pixel-title pixel-glow">MY JOURNEY</h1>
          <p className="pixel-text text-center">
            Follow my path across the globe - from birth in Congo to my current adventures in the United States.
            Each stop represents a chapter in my life story.
          </p>
        </div>
      </section>

      <section className="journey-content">
        <div className="container">
          <div className="journey-grid">
            <div className="globe-container">
              <div className="globe-wrapper">
                <div ref={globeRef} id="globeViz" className="globe-viz"></div>
              </div>
              
              <div className="controls">
                <button
                  className={`pixel-button ${isPlaying ? 'active' : ''}`}
                  onClick={isPlaying ? handlePause : handlePlay}
                >
                  {isPlaying ? '⏸️ PAUSE' : '▶️ PLAY'}
                </button>
                <button className="pixel-button secondary" onClick={handleReplay}>
                  🔄 REPLAY
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="journey-log">
        <div className="container">
          <h2 className="pixel-subtitle text-center">TRAVEL LOG</h2>
          <p className="pixel-text text-center">
            A detailed timeline of my journey across the globe, with memories and milestones from each location.
          </p>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {locations.map((location, index) => (
              <div key={index} className={`timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker-container">
                  <div 
                    className="timeline-marker-large" 
                    style={{ backgroundColor: location.color }}
                  >
                    <span className="marker-number">{index + 1}</span>
                  </div>
                  <div className="timeline-date">
                    {index === 0 ? 'Birth' : `${2000 + index * 5}+`}
                  </div>
                </div>
                
                <div className="timeline-content-card pixel-card">
                  <div className="location-header">
                    <h3 className="pixel-text location-title">{location.country}</h3>
                    <span className="duration-badge">{location.duration}</span>
                  </div>
                  
                  <p className="pixel-text location-description">
                    {location.description}
                  </p>
                  
                  <div className="location-details">
                    <div className="detail-item">
                      <span className="detail-label">Coordinates:</span>
                      <span className="detail-value">
                        {location.coordinates[1].toFixed(2)}°N, {location.coordinates[0].toFixed(2)}°E
                      </span>
                    </div>
                    
                    {index > 0 && (
                      <div className="detail-item">
                        <span className="detail-label">Distance from previous:</span>
                        <span className="detail-value">
                          {Math.round(calculateDistance(
                            locations[index - 1].coordinates,
                            location.coordinates
                          ))} km
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="memories-section">
                    <h4 className="pixel-text memories-title">Key Memories:</h4>
                    <ul className="memories-list">
                      {getMemoriesForLocation(location.country).map((memory, memIndex) => (
                        <li key={memIndex} className="pixel-text memory-item">
                          {memory}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to calculate distance between two coordinates
const calculateDistance = (coord1: [number, number], coord2: [number, number]): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
  const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Helper function to get memories for each location
const getMemoriesForLocation = (country: string): string[] => {
  const memories: { [key: string]: string[] } = {
    'Congo': [
      'Born in the heart of Africa',
      'First steps in the tropical climate',
      'Family traditions and cultural roots'
    ],
    'Zimbabwe': [
      'Early childhood adventures',
      'Learning to speak multiple languages'
    ],
    'Lesotho': [
      'Starting formal education',
      'Making new friends',
      'Experience the beautiful mountains'
    ],
    'South Africa': [
      'High school',
      'Amazing friends and excursions',
      'Exploring South Africa and its beauty',
      'Learning about technology and programming'
    ],
    'United States': [
      'Moving to a new continent',
      'Graduating high school',
      'Starting university',
      'Professional growth and opportunities',
      'Building a career in tech',
      'Creating this pixel art portfolio',
    
    ]
  };
  
  return memories[country] || ['Creating new memories every day'];
};

export default JourneyPage;
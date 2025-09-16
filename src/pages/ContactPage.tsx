import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/joMusangu', color: 'var(--pixel-text)' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/tshisau-musangu/', color: 'var(--pixel-secondary)' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'var(--pixel-primary)' },
    { name: 'Email', icon: '📧', url: 'mailto:mjtshisau@gmail.com', color: 'var(--pixel-accent)' }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="pixel-title pixel-glow">CONTACT ME</h1>
          <p className="pixel-text text-center">
            Ready to start your next pixel art adventure? Let's connect and create something amazing together!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="pixel-card info-card">
                <h2 className="pixel-subtitle">GET IN TOUCH</h2>
                <p className="pixel-text">
                  I'm always excited to work on new projects, especially those involving 
                  pixel art, retro aesthetics, or game development. Whether you need a 
                  website, a game, or some pixel art assets, I'm here to help!
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span className="contact-label">Location:</span>
                    <span className="contact-value">Digital Realm</span>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">⏰</span>
                    <span className="contact-label">Response Time:</span>
                    <span className="contact-value">Within 24 hours</span>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">💬</span>
                    <span className="contact-label">Preferred Contact:</span>
                    <span className="contact-value">Email or Discord</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3 className="pixel-text">FOLLOW MY QUEST</h3>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link pixel-button"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="pixel-card form-card">
                <h2 className="pixel-subtitle">SEND MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">NAME:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pixel-input"
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">EMAIL:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pixel-input"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">SUBJECT:</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="pixel-input"
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">MESSAGE:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pixel-input message-input"
                      rows={6}
                      required
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`pixel-button submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="submit-message success">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="submit-message error">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

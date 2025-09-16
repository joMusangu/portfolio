# 🎮 Tshisau Musangu - Pixel Art Portfolio

A nostalgic, retro-inspired portfolio website built with React and TypeScript, featuring pixel art aesthetics and 8-bit/16-bit gaming vibes. This portfolio showcases my journey as a software developer with a unique, playful twist.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## ✨ Features

### 🌟 **Interactive 3D Globe Journey**
- **Globe.gl integration** showing my life journey across 5 countries
- **Animated path** from Congo → Zimbabwe → Lesotho → South Africa → United States
- **Interactive controls** with play/pause/replay functionality
- **Real-time location tracking** with coordinates and distances

### 🎨 **Pixel Art Aesthetic**
- **Retro 8-bit/16-bit styling** throughout the entire site
- **ASCII art character displays** with custom pixel fonts
- **Animated pixel elements** with CSS animations and effects
- **Nostalgic color schemes** reminiscent of classic arcade games

### 📱 **Responsive Design**
- **Mobile-first approach** with pixel-perfect responsive layouts
- **Cross-browser compatibility** for all modern browsers
- **Touch-friendly interactions** for mobile devices
- **Optimized performance** with lazy loading and efficient rendering

## 🚀 Tech Stack

### **Frontend**
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Lightning-fast build tool
- **React Router 7.9.1** - Client-side routing
- **CSS3** - Custom pixel art styling with animations

### **3D Visualization**
- **Globe.gl** - Interactive 3D globe rendering
- **Three.js** - 3D graphics and animations
- **CDN Integration** - Optimized loading of 3D libraries

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Dev Server** - Hot module replacement and fast development

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   └── Header.css      # Header styling
├── pages/              # Main page components
│   ├── LandingPage.tsx # Homepage with hero section
│   ├── AboutPage.tsx   # About me with ASCII art
│   ├── ProjectsPage.tsx # Portfolio projects showcase
│   ├── ContactPage.tsx # Contact form and social links
│   └── JourneyPage.tsx # Interactive globe journey
├── assets/             # Static assets and images
├── App.tsx            # Main app component with routing
├── App.css            # Global styles and pixel art theme
└── main.tsx           # Application entry point
```

## 🎯 Key Projects Showcased

### 📚 **Blueprint**
- Academic portfolio management system
- **Tech:** Next.js 14, TypeScript, Django, PostgreSQL
- **Features:** Course tracking, grade management, flashcards

### 🎬 **Movie Reservation App**
- Movie booking system with 5-star rating
- **Tech:** Next.js, Django, Python, React
- **Features:** Reservation system, user ratings, admin panel

### 🚗 **Vehicle Rental System**
- Full-stack rental platform with trip planning
- **Tech:** Java, React, Google Maps API, Stripe
- **Impact:** 30% reduction in booking time

### 📦 **Warehouse Barcode Scanner**
- Python automation tool for inventory management
- **Tech:** Python, CSV Export, Barcode Scanning
- **Impact:** 20% accuracy improvement, 5+ hours saved weekly

### 🍗 **Chick-fil-A Trivia Game**
- Interactive company history learning platform
- **Tech:** Python, AWS, React
- **Features:** Educational content, scoring system

### ⚽ **Premier League Title Predictor**
- ML-powered sports prediction system
- **Tech:** Python, scikit-learn, XGBoost, MLflow
- **Features:** Fixture simulation, injury tracking, title odds

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joMusangu/tshisau-musangu-portfolio.git
   cd tshisau-musangu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🚀 GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to the main branch

3. **Your site will be available at:**
   ```
   https://jomusangu.github.io/tshisau-musangu-portfolio/
   ```

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Configuration Files

The following files are configured for GitHub Pages:

- **`vite.config.ts`** - Sets the correct base path
- **`package.json`** - Contains homepage URL and deploy scripts
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
- **`public/.nojekyll`** - Ensures GitHub Pages serves the files correctly

## 🎮 Special Features

### **Pixel Art Animations**
- **Floating elements** with CSS keyframe animations
- **Pixel bounce effects** on interactive elements
- **Rainbow text animations** for headings and highlights
- **Glow effects** with CSS box-shadow and text-shadow

### **Interactive Elements**
- **Hover effects** with pixel-perfect transitions
- **Click animations** with scale and shadow changes
- **Loading states** with pixel art spinners
- **Form validation** with retro styling

### **Performance Optimizations**
- **Lazy loading** for 3D globe components
- **CDN integration** for external libraries
- **Optimized images** and assets
- **Efficient state management** with React hooks

## 📊 Portfolio Stats

- **6+ Projects Completed**
- **3+ Years Experience**
- **30% Efficiency Improvement**
- **5+ Hours Saved/Week**
- **ELATED! Enjoyment Level**
- **+1250 XP Gained**

## 🌍 Journey Map

My life journey visualized on an interactive 3D globe:

1. **Congo** (Birth) - Where it all began
2. **Zimbabwe** (3 years) - Early childhood adventures
3. **Lesotho** (3 years) - Starting formal education
4. **South Africa** (11 years) - High school and tech discovery
5. **United States** (5+ years) - University and professional growth

## 📞 Contact & Links

- **Email:** mjtshisau@gmail.com
- **LinkedIn:** [Tshisau Musangu](https://www.linkedin.com/in/tshisau-musangu/)
- **GitHub:** [joMusangu](https://github.com/joMusangu)
- **Instagram:** [@your_instagram](https://instagram.com/your_instagram)

## 📄 Resume

Download my latest resume: [Tshisau_Musangu_Resume.pdf](/tshisau-musangu-portfolio/resume.pdf)

## 🎨 Design Philosophy

This portfolio combines **modern web development** with **nostalgic gaming aesthetics** to create a unique, memorable experience. Every pixel is crafted with care, every animation tells a story, and every interaction brings joy.

The pixel art theme represents my approach to development: **attention to detail**, **creative problem-solving**, and **bringing fun to everything I build**.

## 🚀 Future Enhancements

- [ ] **Sound effects** for interactive elements
- [ ] **More 3D animations** and particle effects
- [ ] **Dark/light theme toggle**
- [ ] **Blog section** with pixel art styling
- [ ] **Interactive mini-games** embedded in the portfolio

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Globe.gl** for the amazing 3D globe visualization
- **React community** for the excellent documentation and tools
- **Pixel art community** for inspiration and resources
- **All the developers** who made this journey possible

---

**Built with ❤️ and lots of ☕ by Tshisau Musangu**

*"Old school + new school = awesome!"* 🎮✨
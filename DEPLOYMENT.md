# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## ✅ Pre-configured Setup

Your portfolio is already configured with:

- ✅ **Vite base path** set to `/tshisau-musangu-portfolio/`
- ✅ **Package.json homepage** URL configured
- ✅ **GitHub Actions workflow** for automatic deployment
- ✅ **HashRouter** for client-side routing compatibility
- ✅ **gh-pages** package for manual deployment
- ✅ **.nojekyll** file to bypass Jekyll processing

## 🎯 Quick Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Wait for deployment:**
   - Go to **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Your site will be live at: `https://jomusangu.github.io/tshisau-musangu-portfolio/`

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages
npm run deploy
```

## 🔧 Configuration Details

### Vite Configuration (`vite.config.ts`)
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/tshisau-musangu-portfolio/', // GitHub Pages subdirectory
})
```

### Package.json Scripts
```json
{
  "homepage": "https://jomusangu.github.io/tshisau-musangu-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to main branch
- Uses Node.js 18 for compatibility
- Publishes to `gh-pages` branch

## 🐛 Troubleshooting

### Common Issues:

1. **404 on page refresh:**
   - ✅ **Fixed:** Using HashRouter instead of BrowserRouter

2. **Assets not loading:**
   - ✅ **Fixed:** Correct base path in vite.config.ts

3. **Jekyll processing issues:**
   - ✅ **Fixed:** Added `.nojekyll` file

4. **Build failures:**
   - Check Node.js version (requires 18+)
   - Run `npm ci` to ensure clean install

### Manual Verification:

```bash
# Test build locally
npm run build
npm run preview

# Check if dist folder contains all assets
ls -la dist/
```

## 📝 Next Steps

1. **Push your changes** to trigger automatic deployment
2. **Enable GitHub Pages** in repository settings
3. **Share your portfolio** at the GitHub Pages URL
4. **Monitor deployment** in the Actions tab

## 🎉 Success!

Once deployed, your portfolio will be live at:
**https://jomusangu.github.io/tshisau-musangu-portfolio/**

The site will automatically update whenever you push changes to the main branch!

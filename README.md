# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite. Features a unique loading animation, comprehensive sections, and performance optimizations.

## Features

### Design & UX
- Dark theme with gradient accents
- Responsive design for all devices
- Smooth animations and interactions
- Professional typography and spacing
- Custom UI components with shadcn/ui
- Scroll progress indicator
- Animated background elements

### Loading Animation
- Cooking-themed loading with pan tossing
- Dynamic food particles with physics
- Steam effects and bubbling animations
- Progress tracking with completion
- "COOKING YOUR RAMEN..." loading message

### Portfolio Sections
- **Hero** - Introduction with typing animation
- **About** - Personal information and background
- **Projects** - Showcase of development work
- **Skills** - Technical skills with progress indicators
- **Resume** - Downloadable PDF resume
- **Contact** - Contact form with validation
- **Footer** - Additional links and navigation

### Performance Optimizations
- Lazy loading for all major components
- Code splitting with manual chunks
- Service worker for offline caching
- Image optimization and preloading
- Scroll performance optimizations
- Bundle analysis with visualizer

### Interactive Features
- Smooth scrolling navigation
- Typing animations
- Hover effects and feedback
- Form validation
- Resume download functionality
- Mobile-friendly navigation

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router

### Styling & UI
- Tailwind CSS
- shadcn/ui
- Lucide React
- CSS Animations

### Performance
- React Query
- Service Worker
- Bundle Analyzer
- Lazy Loading

### Development
- ESLint
- Prettier
- TypeScript
- Vite HMR

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/viswe/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open your browser
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio Website/
├── public/
│   ├── index.html
│   ├── resume.pdf
│   ├── sw.js
│   └── assets/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── LoadingScreen.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── DottedLinesBackground.tsx
│   │   ├── ParticlesBackground.tsx
│   │   └── TypingText.tsx
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Key Features

### Portfolio Sections
- **Hero Section** - Introduction with typing animation and call-to-action
- **About Section** - Personal information with animated content
- **Projects Section** - Interactive showcase of development work
- **Skills Section** - Technical skills with progress indicators
- **Resume Section** - Downloadable PDF resume with preview
- **Contact Section** - Contact form with validation and social links
- **Footer Section** - Additional navigation and credits

### Performance Optimizations
- Lazy loading reduces initial bundle size
- Code splitting for vendor, UI, and router code
- Service worker caches static assets for offline access
- Preload directives for critical resources
- Scroll optimization with requestAnimationFrame
- Bundle analysis for performance monitoring

### Modern UI/UX
- Dark theme with gradient accents and neon effects
- Responsive design for all screen sizes
- Smooth animations and micro-interactions
- Professional typography and spacing
- Interactive elements with hover effects
- Accessible design following best practices

### Loading Animation
- Cooking pan with realistic tossing motion
- Food particles (noodles, vegetables, broth) with physics
- Steam effects with animated bubbles
- Progress tracking with completion
- Completion state with feedback

## Configuration

### Vite Configuration
```typescript
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@/components/ui'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
```

### Tailwind Configuration
```typescript
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
};
```

## Performance

### Core Web Vitals
- **LCP** - Optimized with preloading and lazy loading
- **FID** - Minimized with code splitting and optimized rendering
- **CLS** - Prevented with proper sizing and layout stability

### Bundle Analysis
- Vendor chunk - React and React DOM
- UI chunk - shadcn/ui components
- Router chunk - React Router
- Main chunk - Application code

### Caching
- Service worker caches static assets
- Browser caching for optimized resources
- Preload directives for critical resources

## Deployment

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Site available at `https://username.github.io/repository-name`

### Vercel
1. Connect GitHub repository to Vercel
2. Automatic deployment on push
3. Custom domain configuration

### Netlify
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- shadcn/ui for the UI components
- Lucide for the icons
- Tailwind CSS for the styling framework
- Vite for the build tool
- React for the framework

## Contact

- **GitHub**:(https://github.com/viswesh-dev)
- **Email**: visweshkesarla@gmail.com
- **LinkedIn**:(https://linkedin.com/in/visweshkesarla6)

---

⭐ Star this repository if you found it helpful!

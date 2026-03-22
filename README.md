# Vaishnavi Singh - Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing a Full Stack/Frontend Developer's skills, experience, and projects.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Toggle**: Switch between light and dark themes with persistent storage
- **Smooth Animations**: Beautiful scroll animations powered by Framer Motion
- **Modern UI**: Clean, minimalist design with glassmorphism elements
- **Sticky Navigation**: Persistent navbar with smooth scrolling
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Contact Form**: Functional contact form for visitor inquiries
- **Project Showcase**: Display of featured projects with tech stack details
- **Experience Timeline**: Visual timeline of professional experience
- **Skills Visualization**: Interactive skill proficiency bars

## 📋 Sections

1. **Hero Section**
   - Developer introduction with name and tagline
   - CTA buttons (View Projects, Contact Me)
   - Social media links (GitHub, LinkedIn, Email)

2. **About Section**
   - Professional summary
   - Key highlights and achievements
   - Statistics cards

3. **Skills Section**
   - Categorized skills (Frontend, Backend, Tools)
   - Proficiency level visualization
   - Key competencies

4. **Experience Section**
   - Timeline format
   - Detailed job descriptions
   - Key contributions and achievements

5. **Projects Section**
   - 4+ featured projects
   - Tech stack display
   - Project highlights
   - GitHub and Live demo links

6. **Contact Section**
   - Contact information cards
   - Contact form
   - Resume download button
   - Social media links

7. **Footer**
   - Quick links
   - Social connections
   - Copyright information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Node Version**: 16.0.0 or higher

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaishnavisingh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The website will open automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

   The optimized build will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useInView.js   # Intersection observer hook
│   ├── assets/            # Images and media
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🎨 Customization

### Update Personal Information
Edit the content in each component to match your information:
- `src/components/Hero.jsx` - Name, title, tagline
- `src/components/About.jsx` - About description
- `src/components/Skills.jsx` - Skills and proficiency levels
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project details
- `src/components/Contact.jsx` - Contact information

### Update Social Links
Replace the social media URLs in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Customize Colors
Edit the Tailwind configuration in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',      // Primary blue
      secondary: '#1f2937',    // Secondary dark
      accent: '#10b981',       // Accent green
    },
  },
}
```

### Update Resume
Add your resume file to the `public` folder and update the download link in `src/components/Contact.jsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and build your project
5. Your site will be live!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is now live!

### Deploy to GitHub Pages
1. Update `vite.config.js` to set the `base` option
2. Build the project: `npm run build`
3. Push the `dist` folder to your GitHub Pages branch

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ✨ Performance

- Optimized bundle size with Vite
- Lazy loading of components
- CSS minification and purging
- Image optimization
- Smooth 60fps animations

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 👋 Contact

- **Email**: vaishnavi.singh@example.com
- **LinkedIn**: [@vaishnavisingh](https://linkedin.com/in/vaishnavisingh)
- **GitHub**: [@vaishnavisingh](https://github.com/vaishnavisingh)

---

**Built with ❤️ by Vaishnavi Singh**

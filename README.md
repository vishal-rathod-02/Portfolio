# Vishal Rathod Portfolio

A modern, premium software developer portfolio built as a single page application. The portfolio is designed to feel like a polished software product: interactive, responsive, engineering-focused, and suitable for recruiters or clients reviewing full-stack development work.

## Highlights

- Premium landing-page layout with smooth section transitions
- Floating glassmorphism navbar with active section tracking
- Interactive hero section with animated developer profile card
- Engineering-focused About section with stack visualization
- Dynamic Skills dashboard grouped by real development capability
- Project showcase with architecture preview modals
- Developer Insights section for implementation-focused notes
- Mini interactive terminal for quick portfolio commands
- GitHub dashboard with live GitHub API data
- Modern contact card with clipboard-friendly contact actions
- Responsive design optimized for desktop, tablet, and mobile screens

## Tech Stack

- **Frontend:** React.js, Vite, JavaScript
- **Animation:** Framer Motion, CSS transitions
- **Icons:** Lucide React
- **Styling:** Custom CSS, glassmorphism, responsive layouts
- **Data:** Central portfolio model with reusable content objects
- **API Integration:** GitHub REST API for profile and repository data

## Project Architecture

The project follows an MVC-inspired structure for a clean portfolio codebase.

```txt
src/
  controllers/      Reusable hooks and interaction logic
  models/           Portfolio content, project data, skills, links, insights
  services/         External API services such as GitHub
  styles/           Global design system and responsive CSS
  views/
    components/     Reusable UI components
    sections/       Main portfolio page sections
```

## Main Sections

- **Home:** Developer identity, CTA actions, profile card, and current focus
- **About:** Full-stack engineering mindset, highlights, and development philosophy
- **Skills:** Frontend, UI, backend, database, language, tooling, and architecture skills
- **Projects:** SnapLink, InstaNews, AgriVision, and architecture previews
- **Insights:** Short technical notes about real implementation decisions
- **Terminal:** Small interactive command section for developer personality
- **GitHub:** Live profile/repository summary
- **Contact:** Email, LinkedIn, GitHub, and resume access

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Portfolio Data

Most editable portfolio content lives in:

```txt
src/models/portfolio.model.js
```

Update this file when you want to change:

- Personal details
- Navigation items
- About content
- Skills and technology stack
- Project descriptions and links
- Insights
- GitHub stats fallback data
- Contact links

Static assets live in:

```txt
public/assets/
```

Use that folder for your profile image, resume, project preview images, and other public portfolio assets.

## GitHub Setup

After creating a GitHub repository, connect and push this project:

```bash
git add .
git commit -m "Initial portfolio app"
git branch -M main
git remote add origin https://github.com/vishal-rathod-02/your-repository-name.git
git push -u origin main
```

If a remote already exists, replace it with:

```bash
git remote set-url origin https://github.com/vishal-rathod-02/your-repository-name.git
git push -u origin main
```

## Deployment

This portfolio can be deployed on platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Render static site hosting

Recommended build settings:

```txt
Build command: npm run build
Output directory: dist
```

## Author

**Vishal Rathod**  
Full-Stack Developer

- GitHub: [vishal-rathod-02](https://github.com/vishal-rathod-02)
- LinkedIn: [vishalrathod02](https://www.linkedin.com/in/vishalrathod02)
- Email: <vishalrathod6547@gmail.com>

# Developer Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS. Optimized for freelance developers targeting global clients.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Customization

### 1. Update Your Information

Edit `src/data/portfolio-data.ts` to customize:

- **personalInfo**: Name, title, email, social links
- **aboutMe**: Your bio and highlights
- **skills**: Technical skills grouped by category
- **projects**: Your portfolio projects with case studies

### 2. Add Project Images

Place project screenshots in `public/projects/`:
- `enterprise-platform.png`
- `saas-dashboard.png`
- `api-platform.png`
- `legacy-migration.png`

Recommended size: 800x600px

### 3. Colors & Branding

Edit `tailwind.config.ts` to change the primary color scheme:

```typescript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
}
```

## Deployment to Vercel

### Option 1: Git Integration (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Header.tsx       # Navigation
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Technical skills
│   │   ├── Projects.tsx     # Portfolio projects
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer
│   └── data/
│       └── portfolio-data.ts # All customizable content
├── public/
│   └── projects/            # Project images
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Features

- Responsive design (mobile-first)
- SEO optimized with Next.js metadata
- Smooth scroll navigation
- Clean, professional design
- Easy content customization
- Static export for any hosting
- Accessibility-friendly

## Adding More Projects

In `src/data/portfolio-data.ts`, add to the `projects` array:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  category: "Category",
  shortDescription: "Brief description",
  problem: "What problem did you solve?",
  solution: "How did you solve it?",
  techStack: ["Tech1", "Tech2"],
  highlights: ["Result 1", "Result 2"],
  role: "Your Role",
  image: "/projects/your-image.png",
  githubUrl: "https://github.com/...", // optional
  liveUrl: "https://...", // optional
}
```

## Next Steps After Setup

1. Replace placeholder content in `portfolio-data.ts`
2. Add your actual project screenshots
3. Update social media links
4. Deploy to Vercel
5. Add custom domain (optional)

## License

MIT License - feel free to use for your portfolio.

# Pravin A Mathew - Portfolio Website

A modern, responsive portfolio website showcasing cloud development, DevOps expertise, and full-stack projects. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion for stunning animations.

<<<<<<< HEAD
![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI/UX**: Sleek gradient designs with smooth animations
- **🌟 Animated Star Background**: Dynamic particle effects that respond to theme changes
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent state
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized**: Fast loading with Next.js 16 and React 19
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **📊 Interactive Sections**: 
  - About with floating profile image
  - Education timeline
  - Professional experience
  - Skills showcase with icons
  - AWS Services explorer with modal descriptions
  - Categorized projects (AWS, DevOps, Development)
  - Contact form
- **🔧 Modular Architecture**: Clean, maintainable code structure

## 🚀 Tech Stack

### Frontend
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready animation library

### Development Tools
- **ESLint** - Code linting and quality
- **Lucide React** - Beautiful icon library (500+ icons)
- **Next.js Image** - Optimized image component

## 📁 Project Structure

```
pravin-portfolio/
├── public/
│   ├── icons/              # Technology & brand icons
│   │   ├── aws/           # AWS service icons (28 services)
│   │   └── *.svg          # Framework icons (Docker, K8s, etc.)
│   ├── images/
│   │   └── profile.png    # Profile picture
│   └── resume.pdf         # Downloadable resume
├── src/
│   ├── app/
│   │   ├── layout.js      # Root layout with fonts
│   │   ├── page.js        # Main entry point
│   │   └── globals.css    # Global styles & animations
│   ├── components/
│   │   └── Portfolio.jsx  # Main portfolio component
│   ├── data/
│   │   ├── education.js   # Education data
│   │   ├── experience.js  # Work experience
│   │   ├── projects.js    # Project showcase
│   │   └── skills.js      # Skills & technologies
│   └── utils/
│       ├── animations.js  # Animation variants
│       ├── docs.js        # Documentation links
│       └── icons.js       # Icon mappings & variants
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.mjs     # PostCSS setup
└── next.config.mjs        # Next.js configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js**: v20.9.0 or higher
- **npm** or **yarn** or **pnpm**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/pravindev666/pravin-portfolio.git
cd pravin-portfolio

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Run development server
npm run dev
# or
yarn dev
# or
pnpm dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 🎨 Customization Guide

### 1. Personal Information

Edit your details in the respective data files:

**Profile & Contact** (`src/components/Portfolio.jsx`):
```javascript
// Update hero section (lines 520-570)
const name = "Your Name";
const title = "Your Title";
const description = "Your bio...";
```

**Education** (`src/data/education.js`):
```javascript
export const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    location: 'City, Country',
    period: 'YYYY - YYYY',
    grade: ''
  }
];
```

**Experience** (`src/data/experience.js`):
```javascript
export const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Month YYYY – Month YYYY',
    points: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
];
```

**Projects** (`src/data/projects.js`):
```javascript
export const projectsByCategory = {
  AWS: [...],
  DevOps: [...],
  Development: [...]
};
```

**Skills** (`src/data/skills.js`):
```javascript
export const skills = {
  cloud: [{ name: 'AWS' }],
  devops: [{ name: 'Docker' }],
  development: [{ name: 'React' }]
};
```

### 2. Theme Customization

**Colors** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        red: '#ef4444',    // Change to your brand color
        yellow: '#eab308'  // Change to your accent color
      }
    }
  }
}
```

**Gradients** (`src/app/globals.css`):
```css
/* Update gradient colors throughout */
.bg-gradient-to-r {
  from: theme('colors.primary.red');
  to: theme('colors.primary.yellow');
}
```

### 3. Add Your Icons

Place technology icons in `/public/icons/`:
```
/public/icons/
├── YourTech.svg
└── aws/
    └── YourService.svg
```

Update icon mappings in `src/utils/icons.js`:
```javascript
export const brandIconMap = {
  'Your Tech': '/icons/YourTech.svg'
};
```

### 4. Update Resume

Replace `/public/resume.pdf` with your resume file.

## 🎭 Animation Customization

All animations use Framer Motion. Customize in `src/utils/animations.js`:

```javascript
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

## 📦 Where to Find Similar Templates

### Free Modern UI Templates

#### 1. **Tailwind CSS Ecosystems** (Most Modern)
- **[Tailwind UI Components](https://tailwindui.com/components)** - Official Tailwind components
- **[Flowbite](https://flowbite.com)** - Complete UI kit
- **[HyperUI](https://hyperui.dev)** - Marketing sections
- **[Meraki UI](https://merakiui.com)** - Minimal components
- **[daisyUI](https://daisyui.com)** - Component library

#### 2. **Shadcn/ui Ecosystem** (Copy-Paste Components)
- **[Shadcn/ui](https://ui.shadcn.com)** - Official components
- **[Magic UI](https://magicui.design)** - Animated components
- **[Aceternity UI](https://ui.aceternity.com)** - Modern animations
- **[Cult UI](https://cult-ui.com)** - Beautiful templates

#### 3. **Complete Website Templates**
- **[HTML5 UP](https://html5up.net)** - Static HTML templates
- **[Start Bootstrap](https://startbootstrap.com)** - Bootstrap templates
- **[Cruip](https://cruip.com)** - Landing pages
- **[Colorlib](https://colorlib.com/wp/templates)** - Various templates

#### 4. **React/Next.js Specific**
- **[Next.js Templates by Vercel](https://vercel.com/templates)** - Official starters
- **[Creative Tim React](https://www.creative-tim.com/templates/react)** - Professional dashboards
- **[Chakra Templates](https://chakra-templates.dev)** - Chakra UI components

### Design Inspiration Sites
- **[Dribbble](https://dribbble.com)** - UI/UX designs
- **[Awwwards](https://awwwards.com)** - Award-winning sites
- **[One Page Love](https://onepagelove.com)** - Single-page sites
- **[Behance](https://behance.net)** - Professional portfolios

## 🔗 Live Demo & Repository

- **Live Site**: [Your deployed URL]
- **GitHub**: [https://github.com/pravindev666/pravin-portfolio](https://github.com/pravindev666/pravin-portfolio)

## 📸 Screenshots

### Desktop View - Dark Mode
![Desktop Dark Mode](screenshots/desktop-dark.png)

### Desktop View - Light Mode
![Desktop Light Mode](screenshots/light-mode.png)

### Mobile Responsive
![Mobile View](screenshots/mobile.png)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import your GitHub repository
2. Configure build settings (auto-detected)
3. Deploy instantly

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Environment Variables

No environment variables required for basic setup.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pravin A Mathew**
- LinkedIn: [linkedin.com/in/pravin-a-mathew-593799327](https://linkedin.com/in/pravin-a-mathew-593799327)
- GitHub: [@pravindev666](https://github.com/pravindev666)

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Powerful animation library
- **Lucide Icons** - Beautiful icon set
- **Vercel** - Seamless deployment platform

## 📚 Learning Resources

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Next.js Learn Course](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Course](https://tailwindcss.com/course)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion)
- [Animation Examples](https://www.framer.com/motion/examples)

### DevOps & Cloud
- [AWS Documentation](https://aws.amazon.com/documentation)
- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs)

## 🐛 Known Issues

- None currently. Report issues on [GitHub Issues](https://github.com/pravindev666/pravin-portfolio/issues)

## 🗺️ Roadmap

- [ ] Add blog section
- [ ] Implement CMS integration
- [ ] Add contact form backend
- [ ] Multi-language support
- [ ] Add more project categories
- [ ] Analytics integration
- [ ] SEO optimization improvements
- [ ] Accessibility audit & improvements

## 💡 Tips for Your Portfolio

1. **Keep It Updated**: Regularly update projects and experience
2. **Show, Don't Tell**: Include live demos and GitHub links
3. **Optimize Images**: Use WebP format, compress images
4. **Mobile First**: Test on real devices
5. **Fast Loading**: Aim for < 3s load time
6. **SEO Friendly**: Add meta tags, structured data
7. **Accessible**: Follow WCAG guidelines
8. **Analytics**: Track visitor behavior
9. **A/B Testing**: Test different content variations
10. **Personal Touch**: Make it unique to you!

---

**Built with ❤️ using Next.js, Tailwind CSS & Framer Motion**

*Star ⭐ this repo if you find it helpful!*
=======
## SEO and Search Indexing Guide

This section explains exactly how SEO is set up in this project, which files are responsible, and how to get your site indexed by Google step-by-step.

### What’s already implemented

- Metadata and social cards are defined in `src/app/layout.js` using Next.js App Router metadata API.
- JSON-LD structured data (Person schema) is injected in `src/app/layout.js`.
- A crawlable `robots.txt` lives in `public/robots.txt`.
- A static `public/sitemap.xml` exists and a dynamic Next.js sitemap is provided via `src/app/sitemap.js`.
- Google Analytics (gtag) is included in `src/app/layout.js`.

### Files responsible for SEO

- `src/app/layout.js`: Metadata, Open Graph, Twitter card, robots rules, JSON-LD, and Google tag.
- `public/robots.txt`: Controls crawler access and points to the sitemap URL.
- `public/sitemap.xml`: Static sitemap for immediate discovery.
- `src/app/sitemap.js`: Dynamic sitemap endpoint at `/sitemap.xml` generated by Next.js.
- `public/images/...`: Images used by Open Graph/Twitter.

### Key code references

Metadata, Open Graph, Twitter, robots in `src/app/layout.js`:
```15:80:src/app/layout.js
export const metadata = {
  title: "Pravin Mathew | DevOps Engineer | Cloud & Automation Specialist",
  description:
    "Pravin Mathew - DevOps Engineer specializing in AWS, CI/CD, Docker, Kubernetes, Terraform, and Cloud Automation. View portfolio, projects, and experience of Pravin A Mathew.",
  keywords: [
    "Pravin Mathew",
    "Pravin A Mathew",
    // ...
  ],
  authors: [{ name: "Pravin Mathew", url: "https://pravinmathew.netlify.app" }],
  metadataBase: new URL("https://pravinmathew.netlify.app"),
  openGraph: {
    title: "Pravin Mathew | DevOps Engineer | AWS, Terraform, Kubernetes",
    description:
      "Pravin Mathew - DevOps Engineer portfolio showcasing CI/CD pipelines, Kubernetes, Docker, Terraform, AWS Cloud, and automation frameworks.",
    url: "https://pravinmathew.netlify.app",
    siteName: "Pravin Mathew Portfolio",
    images: [
      { url: "https://pravinmathew.netlify.app/images/profile.png", width: 1200, height: 630, alt: "Pravin Mathew - DevOps Engineer" },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Pravin Mathew | DevOps Engineer | Cloud Automation Expert", images: ["https://pravinmathew.netlify.app/images/profile.png"] },
  alternates: { canonical: "https://pravinmathew.netlify.app" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};
```

JSON-LD Person schema in `src/app/layout.js`:
```82:101:src/app/layout.js
export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pravin Mathew",
    "alternateName": "Pravin A Mathew",
    "url": "https://pravinmathew.netlify.app",
    "image": "https://pravinmathew.netlify.app/images/profile.png",
    "jobTitle": "DevOps Engineer",
    "worksFor": { "@type": "Organization", "name": "Cloud & DevOps Engineer" },
    // ...
  };
```

`robots.txt`:
```1:5:public/robots.txt
User-agent: *
Allow: /

# Optional placeholder sitemap
Sitemap: https://pravinmathew.netlify.app/sitemap.xml
```

Dynamic sitemap endpoint (Next.js App Router):
```1:12:src/app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://pravinmathew.netlify.app';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];
}
```

### Step-by-step: Integrate SEO and get indexed

1) Set your production site URL
- Update every place that references your domain (use HTTPS):
  - In `src/app/layout.js` for `metadataBase`, `openGraph.url`, `alternates.canonical`, and image URLs.
  - In `public/robots.txt` for the `Sitemap:` line.
  - In `src/app/sitemap.js` for `baseUrl`.

2) Tune page metadata
- Adjust `title`, `description`, and `keywords` in `src/app/layout.js` to emphasize your name and primary role.
- Keep titles under ~60 chars and descriptions under ~160 chars where possible.

3) Configure social sharing images
- Ensure the Open Graph/Twitter image exists (e.g., `public/images/profile.png`). Recommended 1200×630.
- Validate with Facebook Sharing Debugger and Twitter Card Validator.

4) Add/verify structured data
- The Person JSON-LD is already included in `layout.js`. Edit the fields (name, jobTitle, sameAs, etc.) to match your details.
- Test with Google’s Rich Results Test.

5) Verify crawling settings
- `robots` meta is configured to `index, follow` in `src/app/layout.js`.
- `public/robots.txt` allows crawling and advertises your sitemap.

6) Provide a sitemap
- Static: `public/sitemap.xml` exists for immediate discovery.
- Dynamic: `src/app/sitemap.js` exposes `/sitemap.xml` that Next.js will serve in production.
- If you add more routes later, extend the array returned by `sitemap()` accordingly.

7) Deploy the site
- Build locally:
  - `npm run build`
  - `npm start` (to preview the production output)
- Deploy to Netlify (or your host) and confirm the live site loads at your domain.

8) Add to Google Search Console and submit sitemap
- Open Google Search Console and add property: `https://your-domain`.
- Verify ownership (DNS TXT record or HTML file upload per Google’s instructions).
- Submit your sitemap URL: `https://your-domain/sitemap.xml`.
- Use URL Inspection → Request Indexing for your homepage.

9) Speed up discovery
- Share the link on your LinkedIn and GitHub profiles.
- Add the URL to your email signature and resume.
- Optional: create a few quality backlinks from relevant profiles or posts.

### How to test your setup

- Check robots:
  - Visit `https://your-domain/robots.txt`. Should show `Allow: /` and your sitemap line.
- Check sitemap:
  - Visit `https://your-domain/sitemap.xml` and verify URLs.
- Check meta tags:
  - In the browser, View Source and ensure `<title>`, description, canonical, Open Graph, Twitter tags render on the live site.
- Validate structured data:
  - Use Google’s Rich Results Test and ensure no critical errors.
- Inspect in Search Console:
  - Use URL Inspection to see crawl/index status and any issues.

### Troubleshooting indexing

- Site not appearing for name searches yet:
  - New domains can take days or weeks to rank. Keep the site live and build backlinks.
- Accidentally noindexed:
  - Ensure no `noindex` meta on live. In `layout.js`, `robots.index` must be `true`.
- Wrong canonical:
  - Confirm `alternates.canonical` matches your primary HTTPS URL.
- Sitemap not found:
  - Verify `/sitemap.xml` is reachable and returns 200.
- Blocked by robots:
  - Ensure `robots.txt` has `Allow: /` and no disallow rules blocking content.

### Maintenance checklist

- Update `openGraph.images` if you change hero images.
- Keep `keywords` and descriptions aligned with your current role and skills.
- Update `sitemap.js` if you add more pages/sections that deserve dedicated URLs.
- Re-request indexing in Search Console for important changes.

### Commands

- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Start production server locally: `npm start`

---

If you need me to automate additional SEO tasks (e.g., generating OG images, adding per-section routes for deeper indexing, or adding a blog with RSS), open an issue or request and I’ll extend this guide.

>>>>>>> 821356b (Add SEO: sitemap, headers, robots updates, README guide)

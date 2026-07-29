// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pravin A Mathew | Cloud & AI Infrastructure Engineer | Solutions Architect",
  description:
    "Pravin A Mathew - AI Infrastructure & DevOps Solutions Architect specializing in Autonomous AI Agents, RAG, Kubernetes, AWS, Multi-Agent Orchestration, and DevSecOps.",
  keywords: [
    "Pravin Mathew",
    "Pravin A Mathew",
    "Cloud & AI Infrastructure Engineer",
    "AI Platform Architect",
    "DevOps Solutions Architect",
    "AI Agent Architecture",
    "LangGraph",
    "RAG Infrastructure",
    "Pravin Mathew AWS",
    "Pravin Mathew Kubernetes",
    "pravinmathew.netlify.app"
  ],
  authors: [{ name: "Pravin A Mathew", url: "https://pravinmathew.netlify.app" }],
  creator: "Pravin A Mathew",
  publisher: "Pravin A Mathew",
  metadataBase: new URL("https://pravinmathew.netlify.app"),
  openGraph: {
    title: "Pravin A Mathew | Cloud & AI Infrastructure Engineer",
    description:
      "Pravin A Mathew - AI Infrastructure & DevOps Solutions Architect portfolio showcasing autonomous multi-agent systems, RAG pipelines, Kubernetes, AWS Cloud, and DevSecOps governance.",
    url: "https://pravinmathew.netlify.app",
    siteName: "Pravin A Mathew Portfolio",
    images: [
      {
        url: "https://pravinmathew.netlify.app/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Pravin A Mathew - Cloud & AI Infrastructure Engineer"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin A Mathew | Cloud & AI Infrastructure Engineer",
    description:
      "Portfolio of Pravin A Mathew — AI Agent Systems, RAG, AWS, Docker, Kubernetes, Terraform, and DevSecOps.",
    images: ["https://pravinmathew.netlify.app/images/profile.png"],
  },
  alternates: {
    canonical: "https://pravinmathew.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pravin Mathew",
    "alternateName": "Pravin A Mathew",
    "url": "https://pravinmathew.netlify.app",
    "image": "https://pravinmathew.netlify.app/images/profile.png",
    "jobTitle": "Cloud & AI Infrastructure Engineer | Solutions Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Cruxule"
    },
    "description": "AI Platform & DevOps Solutions Architect specializing in Autonomous AI Agents, RAG, Kubernetes, AWS, and DevSecOps",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/pravin-a-mathew-593799327/",
      "https://github.com/pravindev666"
    ],
    "knowsAbout": [
      "AI Infrastructure",
      "Autonomous AI Agents",
      "RAG",
      "AWS",
      "DevOps",
      "Docker",
      "Kubernetes",
      "Terraform",
      "DevSecOps",
      "Solutions Architecture"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LSZ2NDTNKL"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LSZ2NDTNKL');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
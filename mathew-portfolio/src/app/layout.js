// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Pravin Mathew | DevOps Engineer | Cloud & Automation Specialist",
  description:
    "Pravin Mathew - DevOps Engineer specializing in AWS, CI/CD, Docker, Kubernetes, Terraform, and Cloud Automation. View portfolio, projects, and experience of Pravin A Mathew.",
  keywords: [
    "Pravin Mathew",
    "Pravin A Mathew",
    "Pravin Mathew DevOps",
    "Pravin Mathew Engineer",
    "Pravin Mathew Cloud Engineer",
    "Pravin Mathew AWS",
    "Pravin Mathew DevOps Engineer",
    "Pravin Mathew India",
    "Pravin Mathew Portfolio",
    "Pravin Mathew Resume",
    "Pravin DevOps Engineer",
    "Pravin AWS DevOps",
    "Pravin Cloud Engineer",
    "Pravin Infrastructure as Code",
    "Pravin Terraform AWS",
    "Pravin Docker Kubernetes",
    "pravinmathew.netlify.app"
  ],
  authors: [{ name: "Pravin Mathew", url: "https://pravinmathew.netlify.app" }],
  creator: "Pravin Mathew",
  publisher: "Pravin Mathew",
  metadataBase: new URL("https://pravinmathew.netlify.app"),
  openGraph: {
    title: "Pravin Mathew | DevOps Engineer | AWS, Terraform, Kubernetes",
    description:
      "Pravin Mathew - DevOps Engineer portfolio showcasing CI/CD pipelines, Kubernetes, Docker, Terraform, AWS Cloud, and automation frameworks.",
    url: "https://pravinmathew.netlify.app",
    siteName: "Pravin Mathew Portfolio",
    images: [
      {
        url: "https://pravinmathew.netlify.app/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Pravin Mathew - DevOps Engineer"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin Mathew | DevOps Engineer | Cloud Automation Expert",
    description:
      "Portfolio of Pravin Mathew — AWS, Docker, Terraform, Jenkins, Kubernetes, and CI/CD pipelines.",
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
    "jobTitle": "DevOps Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Cloud & DevOps Engineer"
    },
    "description": "DevOps Engineer specializing in AWS, CI/CD, Docker, Kubernetes, Terraform, and Cloud Automation",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/pravin-a-mathew-593799327/",
      "https://github.com/pravindev666"
    ],
    "knowsAbout": [
      "AWS",
      "DevOps",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Cloud Automation",
      "Infrastructure as Code"
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MFJS30727"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MFJS30727');
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
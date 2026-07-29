'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { brandIconMap, awsServiceIcons, skillCardVariants, awsContentVariants } from '../utils/icons';
import { getDocsUrl } from '../utils/docs';
import { Menu, X, Download, Linkedin, Github, Mail, User, MessageSquare, Send, Sun, Moon, MapPin, Calendar, Award, Briefcase, ChevronDown, ChevronUp, Cloud, Database, Terminal, Code, Box, Server, Zap, GitBranch, FileCode, BarChart, FileText, CheckCircle, XCircle, Loader } from 'lucide-react';

const StarBackground = ({ isDarkMode }) => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = `star ${isDarkMode ? 'star-dark' : 'star-light'}`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2-5s
      star.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      
      // Randomize the float-upward animation duration
      const floatDuration = Math.random() * 10 + 15; // 15-25s
      const twinkleDuration = Math.random() * 3 + 2;
      
      if (isDarkMode) {
      star.style.setProperty('animation', `
          twinkle ${twinkleDuration}s linear infinite,
        float-upward ${floatDuration}s linear infinite
      `);
      } else {
        // For light mode, use float-upward-light animation
        const lightFloatDuration = Math.random() * 5 + 10; // 10-15s
        star.style.setProperty('animation', `
          twinkle ${twinkleDuration}s linear infinite,
          float-upward-light ${lightFloatDuration}s linear infinite
        `);
      }
      
      return star;
    };

    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      // Create initial stars with more density
      // Dark mode gets more stars for a richer starry sky effect
      const initialStarCount = isDarkMode ? 350 : 150;
      const maxStarCount = isDarkMode ? 450 : 200;
      
      for (let i = 0; i < initialStarCount; i++) {
        starsContainer.appendChild(createStar());
      }

      // Add new stars periodically for a more dynamic effect
      const interval = setInterval(() => {
        if (starsContainer.children.length < maxStarCount) {
          starsContainer.appendChild(createStar());
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        if (starsContainer) {
          starsContainer.innerHTML = '';
        }
      };
    }
  }, [isDarkMode]);

  return (
    <div id="stars-container" className={`fixed inset-0 pointer-events-none overflow-hidden ${isDarkMode ? 'stars-dark' : 'stars-light'}`} />
  );
};
import { education } from '../data/education';
import { experience } from '../data/experience';
import { skills } from '../data/skills';
import { projectsByCategory } from '../data/projects';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAwsOpen, setIsAwsOpen] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Get EmailJS credentials from environment variables
      // To set up EmailJS:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create an email service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
      // 4. Get your Public Key from Account > API Keys
      // 5. Create a .env.local file with:
      //    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
      //    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
      //    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Debug logging (remove in production if needed)
      console.log('EmailJS Config:', {
        serviceId: serviceId ? '✓ Set' : '✗ Missing',
        templateId: templateId ? '✓ Set' : '✗ Missing',
        publicKey: publicKey ? '✓ Set' : '✗ Missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS configuration:', {
          serviceId: !!serviceId,
          templateId: !!templateId,
          publicKey: !!publicKey
        });
        throw new Error('EmailJS is not configured. Please set up environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Pravin Mathew',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      if (error.message && error.message.includes('not configured')) {
        setSubmitStatus({ type: 'error', message: 'Contact form is not configured yet. Please contact me directly via email or LinkedIn.' });
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly via email.' });
      }
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const awsServices = [
    'EC2',
    'IAM',
    'S3',
    'VPC',
    'RDS',
    'DynamoDB',
    'Migration',
    'Snowball',
    'Route53',
    'EBS',
    'SNS',
    'SQS',
    'CloudWatch',
    'Autoscaling',
    'ELB',
    'ALB',
    'CloudFront',
    'CloudFormation',
    'Lambda',
    'Elastic File System',
    'Elastic Beanstalk',
    'Redshift',
    'CloudTrail',
    'CodeDeploy',
    'CodePipeline',
    'ECS',
    'ECR',
    'KMS'
  ];

  const [selectedAws, setSelectedAws] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDescriptions = {
    // DevOps Tools
    Docker: 'Platform for building, shipping, and running distributed applications. Enables consistent deployment across environments using containerization.',
    Kubernetes: 'Container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    Jenkins: 'Open-source automation server for building, testing, and deploying code. Supports continuous integration and continuous delivery.',
    Git: 'Distributed version control system for tracking changes in source code during software development.',
    GitHub: 'Web-based platform for version control and collaboration using Git.',
    Linux: 'Open-source Unix-like operating system kernel, fundamental to modern cloud and server infrastructure.',
    Terraform: 'Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.',
    Ansible: 'Automation tool for configuration management, application deployment, and task automation.',
    Prometheus: 'Open-source monitoring and alerting toolkit designed for reliability and scalability.',
    Grafana: 'Analytics and visualization platform for metrics, logs, and traces.',
    
    // Development Skills
    JavaScript: 'High-level programming language for web development, enabling interactive and dynamic web applications.',
    TypeScript: 'Typed superset of JavaScript that compiles to plain JavaScript, adding optional static types.',
    Python: 'High-level programming language known for its simplicity and extensive library ecosystem.',
    React: 'JavaScript library for building user interfaces, particularly single-page applications.',
    'Next.js': 'React framework for production-grade applications with server-side rendering and static site generation.',
    'Node.js': 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side development.',
    'Express.js': 'Fast, unopinionated web framework for Node.js, designed for building web applications and APIs.',
    HTML: 'Standard markup language for documents designed to be displayed in a web browser.',
    CSS: 'Style sheet language used for describing the presentation of a document written in HTML.',
    Redux: 'Predictable state container for JavaScript apps, helping manage application state.',
    'Tailwind CSS': 'Utility-first CSS framework for rapidly building custom user interfaces.',
    MongoDB: 'NoSQL database that provides high performance, high availability, and easy scalability.',
    PostgreSQL: 'Open-source relational database system emphasizing extensibility and SQL compliance.',
    MySQL: 'Open-source relational database management system.'
  };

  const awsDescriptions = {
    EC2: 'Virtual servers in the cloud. Launch and manage compute instances.',
    IAM: 'Identity and Access Management for users, groups and roles.',
    S3: 'Object storage service for storing and retrieving any amount of data.',
    VPC: 'Virtual Private Cloud for isolated networking.',
    RDS: 'Managed relational database service for several engines.',
    DynamoDB: 'NoSQL database for single-digit millisecond performance at any scale.',
    Migration: 'AWS migration services to move applications and data to AWS.',
    Snowball: 'Physical data transport solution for large-scale data migrations.',
    Route53: 'DNS service and domain registration.',
    EBS: 'Block storage volumes for use with EC2 instances.',
    SNS: 'Simple Notification Service for pub/sub messaging.',
    SQS: 'Simple Queue Service for message queuing.',
    CloudWatch: 'Monitoring and observability for AWS resources and applications.',
    Autoscaling: 'Automatically scale resources to meet demand.',
    ELB: 'Elastic Load Balancing distributes traffic across targets.',
    ALB: 'Application Load Balancer, layer 7 load balancer.',
    CloudFront: 'Content delivery network (CDN) for fast distribution.',
    CloudFormation: 'Infrastructure as Code service to model and provision AWS resources.',
    Lambda: 'Serverless compute to run code without managing servers.',
    'Elastic File System': 'Managed NFS file system for use with AWS services.',
    'Elastic Beanstalk': 'Platform as a Service to deploy and scale web apps.',
    Redshift: 'Fully managed data warehouse for analytics.',
    CloudTrail: 'Audit log and governance for AWS account activity.',
    CodeDeploy: 'Automated code deployments to various compute services.',
    CodePipeline: 'CI/CD service for fast and reliable application updates.',
    ECS: 'Container orchestration service for Docker containers.',
    ECR: 'Container registry to store, manage, and deploy Docker images.',
    KMS: 'Key Management Service for encryption keys.'
  };

  const openAwsModal = (svc) => {
    setSelectedAws(svc);
  };

  const closeAwsModal = () => setSelectedAws(null);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeAwsModal();
    };
    if (selectedAws) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedAws]);

  const renderSkillIcon = (name) => {
    // fallback: initials in a colored circle
    const initials = name.split(/\s+/).map(s => s[0]).slice(0,2).join('').toUpperCase();
    const bg = isDarkMode ? '#1f2937' : '#f8fafc';
    const fg = isDarkMode ? '#fff' : '#111827';
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="24" cy="24" r="24" fill={isDarkMode ? '#111827' : '#ffffff'} />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fill={fg} fontWeight="700">{initials}</text>
      </svg>
    );
  };

  // getSkillIcon: prefer SVGs from utils maps (brandIconMap, awsServiceIcons), fall back to lucide icons or initials
  const getSkillIcon = (name) => {
    const normalize = (s) => String(s || '').toLowerCase().replace(/[-_\s]+/g, ' ').trim();

    // helper to find a key case-insensitively in a map
    const findKey = (map, target) => {
      const t = normalize(target);
      return Object.keys(map).find(k => normalize(k) === t || normalize(k) === t.replace(/\s+/g, ''));
    };

    // 1) AWS service icons (specific icons under /public/icons/aws)
    const awsKey = findKey(awsServiceIcons, name);
    if (awsKey) {
      const src = awsServiceIcons[awsKey];
      return (
        <motion.div whileHover={{ scale: 1.12, y: -4 }} className="mx-auto">
          {/* SVGs sometimes have non-square viewBoxes; use img with height:auto to preserve aspect */}
          <img src={src} alt={`${name} logo`} style={{ width: 40, height: 'auto' }} className="mx-auto" />
        </motion.div>
      );
    }

    // 2) Brand icons
    const brandKey = findKey(brandIconMap, name);
    if (brandKey) {
      const src = brandIconMap[brandKey];
      return (
        <motion.div whileHover={{ scale: 1.12, y: -4 }} className="mx-auto">
          <img src={src} alt={`${name} logo`} style={{ width: 40, height: 'auto' }} className="mx-auto" />
        </motion.div>
      );
    }

    // 3) fallback mapping to lucide icons for common names
    const map = {
      cloud: <Cloud size={28} />,
      aws: <Cloud size={28} />,
      netlify: <Cloud size={28} />,
      python: <Code size={28} />,
      mongodb: <Database size={28} />,
      mysql: <Database size={28} />,
      git: <GitBranch size={28} />,
      docker: <Box size={28} />,
      kubernetes: <Server size={28} />,
      terraform: <FileCode size={28} />,
      linux: <Terminal size={28} />,
      grafana: <BarChart size={28} />,
      prometheus: <BarChart size={28} />,
      splunk: <BarChart size={28} />,
      jenkins: <Zap size={28} />,
      nginx: <Server size={28} />,
      github: <Github size={28} />,
      html: <FileCode size={28} />,
      css: <FileText size={28} />
    };

    const key2 = normalize(name);
    if (map[key2]) return map[key2];

    // 4) default fallback: initials circle
    return renderSkillIcon(name);
  };

  return (
    <>
      <style>{`
    @keyframes twinkle {
      0%, 100% {
        opacity: 0;
        transform: scale(0.5);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes float-upward {
      0% {
        transform: translate(0px, 0px);
      }
      33% {
        transform: translate(15px, -20px);
      }
      66% {
        transform: translate(-10px, -35px);
      }
      100% {
        transform: translate(5px, 0px);
      }
    }
    
    @keyframes float-upward-light {
      0% {
        transform: translate(0px, 100vh);
      }
      100% {
        transform: translate(30px, -100vh);
      }
    }
    
    .star-light {
      animation: twinkle linear infinite, float-upward-light linear infinite !important;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      animation: twinkle linear infinite, float-upward linear infinite;
      pointer-events: none;
    }

    .star-dark {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
    }

    .star-light {
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }

    .star-dark:nth-child(3n),
    .star-light:nth-child(3n) {
      width: 3px;
      height: 3px;
    }

    .star-dark:nth-child(3n) {
      background: rgba(255, 255, 255, 0.7);
    }

    .star-light:nth-child(3n) {
      background: rgba(0, 0, 0, 0.6);
    }

    .star-dark:nth-child(5n),
    .star-light:nth-child(5n) {
      width: 1px;
      height: 1px;
    }

    .star-dark:nth-child(5n) {
      background: rgba(255, 255, 255, 0.3);
    }

    .star-light:nth-child(5n) {
      background: rgba(0, 0, 0, 0.2);
    }

    #stars-container.stars-dark::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
      pointer-events: none;
    }

    #stars-container.stars-light::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { 
        opacity: 0;
        transform: translateX(-50px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideInRight {
      from { 
        opacity: 0;
        transform: translateX(50px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideInUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out;
    }
    .animate-slideInLeft {
      animation: slideInLeft 0.8s ease-out;
    }
    .animate-slideInRight {
      animation: slideInRight 0.8s ease-out;
    }
    .animate-slideInUp {
      animation: slideInUp 0.6s ease-out forwards;
      opacity: 0;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>

      <div className={`min-h-screen relative ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Star Background */}
        <StarBackground isDarkMode={isDarkMode} />
        
        {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-black/95' : 'bg-yellow-50/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Pravin A Mathew
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-red-500 transition-all duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-yellow-100'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} animate-fadeIn`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
            <section id="about" className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn text-white drop-shadow-lg">
                  Hi, I'm <span className="text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Pravin A Mathew</span>
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-red-400 flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <Briefcase className="mr-2" size={24} />
                  Cloud & DevOps Engineer
                </p>
                <div className="relative">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg -z-10"></div>
                  <p className="text-lg mb-8 text-gray-100 leading-relaxed p-4 rounded-lg">
                    Passionate about Cloud, DevOps & GenAI Engineering | AWS, Kubernetes, Terraform, Docker & Python Specialist skilled in building scalable, AI-powered, and cloud-native infrastructures. Proficient in CI/CD automation using Jenkins, GitLab & GitHub Actions, container orchestration with Docker & Kubernetes, and Infrastructure as Code with Terraform & Ansible. Focused on creating secure, high-performance, and intelligent systems that merge AI innovation with modern DevOps and cloud practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf"
                  download
                  className="bg-gradient-to-r from-red-500 to-yellow-500 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
                >
                  <Download className="mr-2 animate-bounce" size={20} />
                  Download Resume
                </a>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/pravin-a-mathew-593799327/" 
                    target="_blank" 
                    rel="noreferrer"
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/pravindev666" 
                    target="_blank" 
                    rel="noreferrer"
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-slideInRight">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-500">
                  <Image 
                    src="/images/profile.png" 
                    alt="Pravin A Mathew"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Education Section */}
      <section id="education" className={`py-24 px-6 sm:px-8 lg:px-12 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gradient-to-br from-red-50 to-yellow-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent animate-fadeIn drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] brightness-110">
            Education
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} animate-fadeIn`}>
            My academic journey and qualifications
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-yellow-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 animate-slideInUp`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}{edu.grade ? ` ${edu.grade}` : ''}</h3>
                    <p className="text-yellow-600 text-lg mb-2">{edu.institution}</p>
                    <p className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-yellow-500/20 px-4 py-2 rounded-lg">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] brightness-110">
            Experience
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey and achievements
          </p>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-red-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-slideInUp`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-yellow-600 text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-yellow-500/20 px-4 py-2 rounded-lg">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 sm:px-8 lg:px-12 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gradient-to-br from-red-50 to-yellow-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] brightness-110">
            Skills & Technologies
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A snapshot of technologies and tools I work with
          </p>

          <div className="space-y-16">
            {/* Cloud Platforms */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-slideInUp`}>
              <h3 className="text-2xl font-bold mb-8 text-yellow-400 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] brightness-110">Cloud Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <AnimatePresence>
                  {skills.cloud.map((skill, index) => (
                    <motion.button
                      key={index}
                      onClick={() => window.open(getDocsUrl(skill.name), '_blank')}
                      className={`${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-red-50 to-yellow-50'} p-6 rounded-lg text-center border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:border-red-500 hover:shadow-xl hover:shadow-red-500/30 relative group`}
                      variants={skillCardVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover="hover"
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {/* Backlight glow */}
                      <motion.div
                        aria-hidden
                        className="absolute -inset-1 rounded-lg pointer-events-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ opacity: 0.9, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          filter: 'blur(10px)',
                          background: isDarkMode
                            ? 'radial-gradient(ellipse at center, rgba(239,68,68,0.15), transparent 70%)'
                            : 'radial-gradient(ellipse at center, rgba(239,68,68,0.1), transparent 70%)'
                        }}
                      />
                      <motion.div
                        className="flex flex-col items-center justify-center relative z-10"
                        variants={awsContentVariants}
                      >
                        <div className="mb-2 flex items-center justify-center">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div className="font-semibold">{skill.name}</div>
                      </motion.div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* AWS Services (separate card between Cloud Platforms and DevOps) */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-6 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md ${isDarkMode ? 'shadow-black/20' : 'shadow-gray-200'} animate-slideInUp`} style={{marginTop: '-0.5rem'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] brightness-110">AWS Services</h3>
                <button aria-expanded={isAwsOpen} onClick={() => setIsAwsOpen((s) => !s)} className="flex items-center gap-2 text-sm px-3 py-1 rounded-md hover:bg-gray-700/20">
                  {isAwsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />} <span>{isAwsOpen ? 'Collapse' : 'Expand'}</span>
                </button>
              </div>
              {isAwsOpen && (
                <AnimatePresence>
                  <motion.div
                    className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {awsServices.map((svc, i) => (
                      <motion.button
                        key={i}
                        onClick={() => openAwsModal(svc)}
                        className={`relative group ${isDarkMode ? 'bg-gradient-to-br from-yellow-500/10 to-red-500/5' : 'bg-gradient-to-br from-yellow-50 to-red-50'} rounded-lg p-4 text-center border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} shadow-sm ${isDarkMode ? 'shadow-yellow-700/10' : 'shadow-yellow-200'} hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/30`}
                        variants={skillCardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover="hover"
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                      >
                        {/* Backlight / glow that appears on hover */}
                        <motion.div
                          aria-hidden
                          className="absolute -inset-1 rounded-lg pointer-events-none"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileHover={{ opacity: 0.92, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            filter: 'blur(10px)',
                            background: isDarkMode
                              ? 'radial-gradient(ellipse at center, rgba(245,158,11,0.21), transparent 40%)'
                              : 'radial-gradient(ellipse at center, rgba(245,158,11,0.17), transparent 40%)',
                          }}
                        />
                        <motion.div
                          className="flex flex-col items-center justify-center mb-2 relative z-10"
                          variants={awsContentVariants}
                        >
                          {(() => {
                            const svcKey = Object.keys(awsServiceIcons).find(k => k.toLowerCase() === svc.toLowerCase());
                            const iconSrc = svcKey ? awsServiceIcons[svcKey] : brandIconMap.AWS;
                            return (
                              <img src={iconSrc} alt={svc} style={{ width: 36, height: 'auto' }} className="mb-2" />
                            );
                          })()}
                        </motion.div>
                        <motion.div 
                          className="text-sm font-semibold relative z-10"
                          variants={awsContentVariants}
                        >
                          {svc}
                        </motion.div>
                      </motion.button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* DevOps & Infrastructure */}
            {/* AWS Modal (shows description when an AWS tile is clicked) */}
            {selectedAws && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeAwsModal} aria-hidden />
                <div role="dialog" aria-modal="true" aria-labelledby="aws-modal-title" className={`relative max-w-lg w-full mx-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-red-100 to-yellow-100 text-gray-900'} rounded-2xl p-6 shadow-2xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 id="aws-modal-title" className="text-xl font-bold flex items-center gap-3">
                      <div className="w-6 h-6">
                        {getSkillIcon('AWS')}
                      </div>
                      {selectedAws}
                    </h4>
                    <button onClick={closeAwsModal} className="p-2 rounded-md hover:bg-gray-200/10">
                      ✕
                    </button>
                  </div>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{awsDescriptions[selectedAws] || 'Description coming soon.'}</p>
                  <div className="flex items-center justify-end space-x-3">
                    <a 
                      className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-red-500/10 to-yellow-500/10 text-yellow-600 hover:from-red-500/20 hover:to-yellow-500/20 transition-all duration-300 flex items-center gap-2" 
                      href={`https://aws.amazon.com/search/?q=${encodeURIComponent(selectedAws)}`} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <span>View Docs</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <button onClick={closeAwsModal} className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:opacity-90 transition-all duration-300">Close</button>
                  </div>
                </div>
              </div>
            )}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-slideInUp`} style={{animationDelay: '0.2s'}}>
              <div className="space-y-12">
                {/* DevOps Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] brightness-110">DevOps & Infrastructure</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <AnimatePresence>
                      {skills.devops.map((skill, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedSkill(skill.name)}
                          className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg text-center border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/30 relative group`}
                          variants={skillCardVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          whileHover="hover"
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {/* Backlight glow */}
                          <motion.div
                            aria-hidden
                            className="absolute -inset-1 rounded-lg pointer-events-none"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ opacity: 0.9, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              filter: 'blur(10px)',
                              background: isDarkMode
                                ? 'radial-gradient(ellipse at center, rgba(245,158,11,0.15), transparent 70%)'
                                : 'radial-gradient(ellipse at center, rgba(245,158,11,0.1), transparent 70%)'
                            }}
                          />
                          <motion.div
                            className="flex flex-col items-center justify-center relative z-10"
                            variants={awsContentVariants}
                          >
                            <div className="mb-2 flex items-center justify-center">
                              {getSkillIcon(skill.name)}
                            </div>
                            <div className="font-semibold">{skill.name}</div>
                          </motion.div>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* AWS Services moved above as a separate card */}

                {/* Development Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] brightness-110">Development</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <AnimatePresence>
                      {skills.development.map((skill, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedSkill(skill.name)}
                          className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg text-center border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/30 relative group`}
                          variants={skillCardVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          whileHover="hover"
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {/* Backlight glow */}
                          <motion.div
                            aria-hidden
                            className="absolute -inset-1 rounded-lg pointer-events-none"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ opacity: 0.9, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              filter: 'blur(10px)',
                              background: isDarkMode
                                ? 'radial-gradient(ellipse at center, rgba(245,158,11,0.15), transparent 70%)'
                                : 'radial-gradient(ellipse at center, rgba(245,158,11,0.1), transparent 70%)'
                            }}
                          />
                          <motion.div
                            className="flex flex-col items-center justify-center relative z-10"
                            variants={awsContentVariants}
                          >
                            <div className="mb-2 flex items-center justify-center">
                              {getSkillIcon(skill.name)}
                            </div>
                            <div className="font-semibold">{skill.name}</div>
                          </motion.div>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Description Modal */}
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedSkill(null)} aria-hidden />
              <div role="dialog" aria-modal="true" aria-labelledby="skill-modal-title" className={`relative max-w-lg w-full mx-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-red-100 to-yellow-100 text-gray-900'} rounded-2xl p-6 shadow-2xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 id="skill-modal-title" className="text-xl font-bold flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {getSkillIcon(selectedSkill)}
                    </div>
                    {selectedSkill}
                  </h4>
                  <button onClick={() => setSelectedSkill(null)} className="p-2 rounded-md hover:bg-gray-200/10">
                    ✕
                  </button>
                </div>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skillDescriptions[selectedSkill] || 'Description coming soon.'}
                </p>
                <div className="flex items-center justify-end space-x-3">
                  {getDocsUrl(selectedSkill) && (
                    <a 
                      className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-red-500/10 to-yellow-500/10 text-yellow-600 hover:from-red-500/20 hover:to-yellow-500/20 transition-all duration-300 flex items-center gap-2" 
                      href={getDocsUrl(selectedSkill)} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <span>View Docs</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  <button onClick={() => setSelectedSkill(null)} className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:opacity-90 transition-all duration-300">Close</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] brightness-110">
            Projects
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Showcase of my work and side projects
          </p>

          {/* Categorized Projects with Sub-headings */}
          <div className="space-y-16">
            {['AWS', 'DevOps', 'AWS & DevOps', 'Development'].map((category) => {
              const categoryProjects = projectsByCategory[category];
              if (!categoryProjects || categoryProjects.length === 0) return null;
              
              return (
                <div key={category} className="animate-slideInUp">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.5)] brightness-110">
                    {category}
                  </h3>
          <div className="grid md:grid-cols-2 gap-10">
                    {categoryProjects.map((project, index) => (
                      <a
                        key={index}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-blue-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-yellow-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                      </a>
            ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 sm:px-8 lg:px-12 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gradient-to-br from-red-50 to-yellow-50'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-400 bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] brightness-110">
            Get In Touch
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-red-100 to-yellow-100'} rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} animate-slideInUp`}>
            {/* Status Messages */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? `${isDarkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-100 border-green-500'} border`
                    : `${isDarkMode ? 'bg-red-900/30 border-red-500' : 'bg-red-100 border-red-500'} border`
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                ) : (
                  <XCircle className="text-red-500 flex-shrink-0" size={20} />
                )}
                <p className={`${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'} ${isDarkMode ? 'text-white' : ''}`}>
                  {submitStatus.message}
                </p>
              </motion.div>
            )}

            <div className="mb-6">
              <label className="flex items-center mb-2 font-semibold">
                <User size={18} className="mr-2" />
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your full name"
                disabled={isSubmitting}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gradient-to-br from-red-50 to-yellow-50 border-gray-300'} border focus:border-red-500 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center mb-2 font-semibold">
                <Mail size={18} className="mr-2" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gradient-to-br from-red-50 to-yellow-50 border-gray-300'} border focus:border-yellow-500 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center mb-2 font-semibold">
                <MessageSquare size={18} className="mr-2" />
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Your message here..."
                rows="5"
                disabled={isSubmitting}
                required
                className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'} border focus:border-blue-500 outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-yellow-500 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader className="mr-2 animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${isDarkMode ? 'border-gray-800 bg-black' : 'border-gray-200 bg-gradient-to-br from-red-50 to-yellow-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold mb-4">Pravin A Mathew</h3>
            <div className="flex justify-center gap-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/pravin-a-mathew-593799327/" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all duration-300 transform hover:scale-110`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/pravindev666" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${isDarkMode ? 'hover:text-red-400' : 'hover:text-red-600'} transition-all duration-300 transform hover:scale-105`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© 2025 Pravin A Mathew. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ using Next.js, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Portfolio;
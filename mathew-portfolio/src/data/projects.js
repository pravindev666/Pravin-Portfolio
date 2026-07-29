export const projects = [
  {
    title: 'SecureEdgeOps',
    description: 'Built a secure CI/CD pipeline with Docker and Kubernetes using Jenkins and ArgoCD, with monitoring via Prometheus and Grafana.',
    tech: ['Docker', 'Kubernetes', 'Jenkins', 'ArgoCD']
  },
  {
    title: 'Sathendra Web App',
    description: 'Developed a scalable web application with MERN stack, deployed on AWS EC2 with Nginx.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    title: 'Elastic Cloud Solution project',
    description: 'Implemented ELK stack for log management and analysis with real-time monitoring.',
    tech: ['Elasticsearch', 'Logstash', 'Kibana']
  },
  {
    title: 'Shopkart E-commerce',
    description: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
  }
];

export const projectsByCategory = {
  AWS: [
    {
      title: 'Multi-Region Active Disaster Recovery',
      description: 'Implemented production-ready disaster recovery system with automatic failover between AWS regions achieving sub-60 second RTO and near-zero RPO with DynamoDB Global Tables.',
      tech: ['AWS Lambda', 'DynamoDB', 'Route 53'],
      githubUrl: 'https://github.com/pravindev666/Multi-Region-Active-Disaster-Recovery'
    },
    {
      title: 'EBS Cost Optimizer',
      description: 'Developed automated AWS Lambda-based solution to identify and manage unattached EBS volumes across all regions, achieving significant cost savings through intelligent resource optimization.',
      tech: ['AWS Lambda', 'Python', 'CloudWatch', 'SNS'],
      githubUrl: 'https://github.com/pravindev666/EBS-Cost-Optimizer'
    }
  ],
  DevOps: [
    {
      title: 'Multi-Stage Docker Build Pipeline',
      description: 'Created production-ready Docker optimization achieving 88% image size reduction (1.2GB to 145MB) with automated security scanning and comprehensive CI/CD pipeline.',
      tech: ['Docker', 'GitHub Actions', 'Trivy', 'AWS ECR'],
      githubUrl: 'https://github.com/pravindev666/Multi-Stage-Docker-Build-Pipeline'
    },
    {
      title: 'Prometheus-Driven Auto-Scaling Simulator',
      description: 'Built comprehensive local simulation environment demonstrating metrics-driven auto-scaling using Prometheus, Grafana, and Ansible with zero cloud costs.',
      tech: ['Prometheus', 'Grafana', 'Docker Compose', 'Ansible'],
      githubUrl: 'https://github.com/pravindev666/Prometheus-Driven-Auto-Scaling-Simulator'
    }
  ],
  'AWS & DevOps': [
    {
      title: 'Enterprise Kubernetes Deployment Framework',
      description: 'Built a production-grade Kubernetes orchestration system on AWS EKS with automated CI/CD, achieving 88% faster deployments and 99.9% uptime with zero-downtime rolling updates.',
      tech: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      githubUrl: 'https://github.com/pravindev666/Enterprise-Kubernetes-Deployment-Framework'
    },
    {
      title: 'Terraform AWS EKS Pipeline',
      description: 'Automated complete EKS infrastructure provisioning with multi-environment support, achieving reproducible deployments across dev, staging, and production with GitOps workflow.',
      tech: ['Terraform', 'AWS EKS', 'GitHub Actions', 'Kubernetes'],
      githubUrl: 'https://github.com/pravindev666/Terraform-AWS-EKS-Pipeline'
    },
    {
      title: 'Terraform EKS Infrastructure with GitOps',
      description: 'Implemented Infrastructure as Code solution for AWS EKS cluster deployment with S3 state management and automated CI/CD pipeline following GitOps principles.',
      tech: ['Terraform', 'AWS', 'GitOps', 'GitHub Actions'],
      githubUrl: 'https://github.com/pravindev666/Terraform-EKS-Infrastructure-with-GitOps'
    }
  ],
  Development: [
    {
      title: 'AI-Powered Quantitative Trading System',
      description: 'Developed a full-stack machine learning application for Nifty 50 options prediction using Temporal Fusion Transformers with automated CI/CD pipeline and Docker deployment.',
      tech: ['Python', 'PyTorch', 'Docker', 'Jenkins'],
      githubUrl: 'https://github.com/pravindev666/AI-Powered-Quantitative-Trading-System'
    }
  ]
};

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
      title: 'Enterprise Kubernetes Deployment Framework',
      description: 'Built a production-grade Kubernetes orchestration system on AWS EKS with automated CI/CD, achieving 88% faster deployments and 99.9% uptime with zero-downtime rolling updates.',
      tech: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      githubUrl: 'https://github.com/pravindev666/Enterprise-Kubernetes-Deployment-Framework'
    },
    {
      title: 'Multi-Stage Docker Build Pipeline',
      description: 'Created production-ready Docker optimization achieving 88% image size reduction (1.2GB to 145MB) with automated security scanning and comprehensive CI/CD pipeline.',
      tech: ['Docker', 'GitHub Actions', 'Trivy', 'AWS ECR'],
      githubUrl: 'https://github.com/pravindev666/Multi-Stage-Docker-Build-Pipeline'
    }
  ],
  Development: [
    {
      title: 'Alpha Scanner',
      description: 'A swing trading scanner for the Indian stock market (Nifty 500) using a normalized 5-pillar scoring system with integrated behavioral and institutional analysis.',
      tech: ['Python', 'Streamlit', 'Stock Market', 'Quantitative Analysis'],
      githubUrl: 'https://github.com/zetaaztra/Alpha-Scanner',
      liveUrl: 'https://alpha-scanner.streamlit.app/'
    },
    {
      title: 'AI-Powered Quantitative Trading System',
      description: 'Developed a full-stack machine learning application for Nifty 50 options prediction using Temporal Fusion Transformers with automated CI/CD pipeline and Docker deployment.',
      tech: ['Python', 'PyTorch', 'Docker', 'Jenkins'],
      githubUrl: 'https://github.com/pravindev666/AI-Powered-Quantitative-Trading-System'
    }
  ]
};

export const founderProjects = [
  {
    title: 'Wolfclaw',
    description: 'Personal command center for private AI agents. Build and manage a team of smart bots living on your computer, keeping data 100% private while accelerating workflows.',
    tech: ['Private AI', 'Local Agents', 'Security', 'Command Center'],
    githubUrl: 'https://github.com/pravindev666/wolfclaw'
  },
  {
    title: 'InfiniteClaw',
    description: 'The AI-powered "Alpha-Mode" for DevOps. Local-first platform to autonomously manage 31+ infrastructure tools with Multi-agent Swarm Council, Time Travel rollbacks, and Auto-SOC2 compliance.',
    tech: ['Autonomous DevOps', 'Multi-Agent Swarm', 'Infrastructure', 'SOC2'],
    githubUrl: 'https://github.com/pravindev666/InfiniteClaw'
  },
  {
    title: 'Fulcrum',
    description: 'Enterprise knowledge and workflow platform — AI-powered retrieval, document processing, and collaborative intelligence for businesses.',
    tech: ['Vector DB', 'RAG', 'Enterprise Architecture']
  },
  {
    title: 'Pixie-Robo',
    description: 'Offline AI companion system — local LLM inference, voice interaction, autonomous task execution, and privacy-first AI.',
    tech: ['Ollama', 'Local AI', 'Docker']
  },
  {
    title: 'ACOS',
    description: 'Autonomous Consulting Operating System — multi-agent orchestration, knowledge management, and decision-support infrastructure.',
    tech: ['LangGraph', 'RAG', 'Multi-Agent Systems']
  }
];

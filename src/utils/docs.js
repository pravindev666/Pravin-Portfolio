// Documentation/learn more links for various technologies
export const getDocsUrl = (service) => {
  const serviceKey = service.toLowerCase();
  const urlMap = {
    // Cloud & Hosting
    aws: 'https://aws.amazon.com',
    netlify: 'https://docs.netlify.com',
    
    // Databases
    mongodb: 'https://docs.mongodb.com',
    mysql: 'https://dev.mysql.com/doc',
    
    // DevOps & Infrastructure
    docker: 'https://docs.docker.com',
    kubernetes: 'https://kubernetes.io/docs',
    terraform: 'https://developer.hashicorp.com/terraform/docs',
    linux: 'https://www.kernel.org/doc',
    git: 'https://git-scm.com/doc',
    splunk: 'https://docs.splunk.com',
    prometheus: 'https://prometheus.io/docs',
    grafana: 'https://grafana.com/docs',
    'github action': 'https://docs.github.com/actions',
    'azure devops': 'https://learn.microsoft.com/azure/devops',
    jenkins: 'https://www.jenkins.io/doc',
    argocd: 'https://argo-cd.readthedocs.io',
    ansible: 'https://docs.ansible.com',
    bash: 'https://www.gnu.org/software/bash/manual',
    powershell: 'https://learn.microsoft.com/powershell',
    yaml: 'https://yaml.org/spec',
    elasticsearch: 'https://www.elastic.co/guide',
    logstash: 'https://www.elastic.co/guide/en/logstash',
    kibana: 'https://www.elastic.co/guide/en/kibana',
    helm: 'https://helm.sh/docs',
    nginx: 'https://nginx.org/en/docs',
    
    // Development
    python: 'https://docs.python.org',
    github: 'https://docs.github.com',
    jira: 'https://support.atlassian.com/jira',
    html: 'https://developer.mozilla.org/docs/Web/HTML',
    css: 'https://developer.mozilla.org/docs/Web/CSS',
    postman: 'https://learning.postman.com/docs'
  };

  return urlMap[serviceKey] || `https://www.google.com/search?q=${encodeURIComponent(service + ' documentation')}`;
};
export const brandIconMap = {
  AWS: '/icons/AWS.svg',
  Docker: '/icons/Docker.svg',
  Kubernetes: '/icons/Kubernetes.svg',
  Terraform: '/icons/terraform.svg',
  Splunk: '/icons/splunk.svg',
  MongoDB: '/icons/MongoDB.svg',
  MySQL: '/icons/MySQL.svg',
  Python: '/icons/Python.svg',
  Git: '/icons/Git.svg',
  'GitHub': '/icons/GitHub.svg',
  'GitHub Actions': '/icons/GitHub Actions.svg',
  Grafana: '/icons/Grafana.svg',
  HTML: '/icons/HTML5.svg',
  HTML5: '/icons/HTML5.svg',
  CSS: '/icons/CSS3.svg',
  CSS3: '/icons/CSS3.svg',
  Jenkins: '/icons/jenkins.svg',
  Jira: '/icons/Jira.svg',
  NGINX: '/icons/NGINX.svg',
  Packer: '/icons/Packer.svg',
  Powershell: '/icons/Powershell.svg',
  Prometheus: '/icons/Prometheus.svg',
  PuTTY: '/icons/PuTTY.svg',
  YAML: '/icons/yaml.svg',
  Ansible: '/icons/ansible.svg',
  Bash: '/icons/Bash.svg',
  Postman: '/icons/Postman.svg',
  Netlify: '/icons/Netlify.svg',
  Vercel: '/icons/Vercel.svg',
  Cloudflare: '/icons/Cloudflare.svg',
};

export const awsServiceIcons = {
  EC2: '/icons/aws/ec2.svg',
  S3: '/icons/aws/s3.svg',
  Lambda: '/icons/aws/lambda.svg',
  DynamoDB: '/icons/aws/dynamodb.svg',
  CloudWatch: '/icons/aws/cloudwatch.svg',
  Route53: '/icons/aws/route53.svg',
  SQS: '/icons/aws/sqs.svg',
  SNS: '/icons/aws/sns.svg',
  IAM: '/icons/aws/iam.svg',
  VPC: '/icons/aws/vpc.svg',
  RDS: '/icons/aws/rds.svg',
  Migration: '/icons/aws/migration.svg',
  Snowball: '/icons/aws/snowball.svg',
  EBS: '/icons/aws/ebs.svg',
  Autoscaling: '/icons/aws/autoscaling.svg',
  ELB: '/icons/aws/elb.svg',
  ALB: '/icons/aws/alb.svg',
  CloudFront: '/icons/aws/cloudfront.svg',
  CloudFormation: '/icons/aws/cloudformation.svg',
  'Elastic File System': '/icons/aws/elastic-file-system.svg',
  'Elastic Beanstalk': '/icons/aws/elastic-beanstalk.svg',
  Redshift: '/icons/aws/redshift.svg',
  CloudTrail: '/icons/aws/cloudtrail.svg',
  CodeDeploy: '/icons/aws/CodeDeploy.svg',
  CodePipeline: '/icons/aws/CodePipeline.svg',
  ECS: '/icons/aws/ecs.svg',
  ECR: '/icons/aws/ecr.svg',
  KMS: '/icons/aws/kms.svg'
};

// Animation variants for reuse
export const skillCardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  hover: { scale: 1.05 }
};

export const awsContentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10 }
};
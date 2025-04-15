import { Code, Database, Cloud, Terminal, BarChart, Laptop, Server, Monitor, PenTool as Tool, GitBranch, Workflow } from 'lucide-react';

export const expertise = [
  {
    name: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'R', 'Matlab', 'HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'Data Science',
    icon: BarChart,
    skills: ['Machine Learning', 'Pandas', 'NumPy', 'Sklearn', 'Pytorch', 'Tensorflow']
  },
  {
    name: 'DevOps Tools',
    icon: Terminal,
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
  },
  {
    name: 'Big Data',
    icon: Database,
    skills: ['Databricks', 'Apache Spark', 'Delta Lake']
  },
  {
    name: 'Data Visualization',
    icon: BarChart,
    skills: ['PowerBI', 'Tableau']
  },
  {
    name: 'Cloud Technologies',
    icon: Cloud,
    skills: ['Amazon Web Services (AWS)', 'Azure']
  },
  {
    name: 'Database Management',
    icon: Server,
    skills: ['MySQL', 'PostgreSQL', 'SQL']
  },
  {
    name: 'Operating Systems',
    icon: Monitor,
    skills: ['Windows', 'Linux']
  },
  {
    name: 'Software Tools',
    icon: Tool,
    skills: ['Microsoft Office', 'Google Workspace']
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub']
  },
  {
    name: 'Methodologies',
    icon: Workflow,
    skills: ['DevOps Practices (CI/CD, IaC, Automation)']
  }
];

export const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'University at Buffalo, SUNY',
    period: 'Jan 2024 - May 2025',
    courses: ['Machine Learning', 'Statistical Data Mining', 'Python', 'SQL & Power BI']
  },
  {
    degree: 'Bachelor of Technology in Mechanical Engineering',
    school: 'Pragati Engineering College',
    period: 'Aug 2019 - May 2023',
    courses: ['AutoCAD', 'Automation']
  }
];

export const projects = [
  {
    title: 'API Gateway Project',
    description: 'REST API using AWS API Gateway with Lambda proxy integration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    technologies: ['AWS', 'Lambda', 'Python', 'API Gateway'],
    github: 'https://github.com/Charan282/AWS-Lambda-API-Gateway-Project',
    demo: null
  },
  {
    title: 'Data-Driven Marketing',
    description: 'Marketing analysis using Amazon S3 and QuickSight',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    technologies: ['AWS S3', 'QuickSight', 'Data Analysis'],
    github: 'https://github.com/Charan282/Data-Driven-Marketing-Using-S3-QuickSight',
    demo: null
  },
  {
    title: 'Real Estate Price Prediction',
    description: 'Flask-based web app for housing price prediction',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    technologies: ['Flask', 'ML', 'AWS EC2', 'Nginx'],
    github: 'https://github.com/Charan282/Bangalore_House_Prices/tree/main',
    demo: null
  },
  {
    title: 'Data Analysis Portfolio',
    description: 'Interactive Power BI dashboards for sales analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    technologies: ['Power BI', 'SQL', 'Data Analysis'],
    github: 'https://github.com/Charan282/Data-Analysis-Portfolio-Project',
    demo: null
  }
];

export const certificates = [
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    link: 'https://www.credly.com/badges/89568cb6-aaf6-4541-89bb-db1f73ce2f33'
  },
  {
    name: 'Databricks Data Engineer Associate',
    issuer: 'Databricks',
    image: '/logos/databricks.png',
    link: 'https://credentials.databricks.com/f41369ca-914d-4dd8-aefd-7cfa39ac95ca'
  },
  {
    name: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    image: 'https://images.credly.com/size/340x340/images/619f60f8-4f63-4772-910e-dc31c6f2f7e8/image.png',
    link: 'https://learn.microsoft.com/en-us/users/srinagacharangampala-1963/credentials/824251c6f766b3b6'
  }
];

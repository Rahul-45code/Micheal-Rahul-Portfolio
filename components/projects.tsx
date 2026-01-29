'use client';

import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
  role: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'laira-ai',
      title: 'Laira AI Tutor',
      description:
        'An intelligent AI-powered tutoring system built with Python and FastAPI. Features real-time interaction, personalized learning paths, and progress tracking. Integrated with advanced NLP models for intelligent tutoring responses.',
      image: '/projects/laira-ai.jpg',
      techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API', 'TensorFlow'],
      github: 'https://github.com/Rahul-45code/Laira-AI-Tech-Tutor.git',
      demo: 'https://laira-ai-tech-tutor.vercel.app/',
      role: 'Full-Stack Developer',
    },
    {
      id: 'bmw-analysis',
      title: 'BMW Sales Data Analysis',
      description:
        'Comprehensive analysis of BMW sales data using advanced statistical methods and machine learning. Created interactive dashboards with Plotly and built predictive models for sales forecasting.',
      image: '/projects/bmw-analysis.jpg',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Plotly', 'Jupyter', 'SQL'],
      github: 'https://github.com/Rahul-45code/BMW-Sales-Analytics.git',
      demo: 'https://bmw-analysis-dashboard.com',
      role: 'Data Analyst',
    },
    {
      id: 'rfm-segmentation',
      title: 'Customer Segmentation RFM',
      description:
        'Advanced customer segmentation using RFM (Recency, Frequency, Monetary) analysis. Implemented machine learning clustering algorithms to identify high-value customer segments for targeted marketing.',
      image: '/projects/rfm-segmentation.jpg',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'SQL', 'PostgreSQL'],
      github: 'https://github.com/michealrahul/rfm-segmentation',
      demo: 'https://rfm-segmentation.com',
      role: 'Data Scientist',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-96 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 -right-96 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of my most impactful projects showcasing expertise in data analytics, full-stack development,
            and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glassmorphism rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:glow-green-bright flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">📱</div>
                    <p className="text-sm">{project.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent mt-1">{project.role}</p>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30 hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Third Project - Full Width on Mobile */}
          <div className="lg:col-span-2 lg:max-w-2xl">
            <div className="group glassmorphism rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:glow-green-bright flex flex-col h-full">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🤖</div>
                    <p className="text-sm">Customer Segmentation RFM</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      Customer Segmentation RFM
                    </h3>
                    <p className="text-sm text-accent mt-1">Data Scientist</p>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm mb-4">
                  Advanced customer segmentation using RFM (Recency, Frequency, Monetary) analysis. Implemented
                  machine learning clustering algorithms to identify high-value customer segments for targeted marketing.
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30 hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Link
                    href="https://github.com/Rahul-45code"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                  <Link
                    href="https://rfm-segmentation.com"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-primary-foreground bg-accent hover:bg-accent/90 transition-all duration-300 glow-green-bright"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

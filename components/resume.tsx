'use client';

import { Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ResumeItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function Resume() {
  const [selectedResume, setSelectedResume] = useState<'analyst' | 'developer'>('analyst');

  const experience: ResumeItem[] = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Analytics Inc',
      period: '2023 - Present',
      description:
        'Led data analysis projects, created interactive dashboards, and provided actionable insights to drive business decisions.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co',
      period: '2022 - 2023',
      description:
        'Developed and maintained web applications using React and Python, improved performance by 40%, and mentored junior developers.',
    },
    {
      title: 'Junior Data Analyst',
      company: 'Analytics Startup',
      period: '2021 - 2022',
      description:
        'Analyzed customer data, created visualizations, and built predictive models using Python and SQL.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2021',
      gpa: '3.8/4.0',
    },
    {
      degree: 'Data Science Certification',
      institution: 'Online Learning Platform',
      year: '2022',
      gpa: 'Completed',
    },
  ];

  const projects = [
    {
      name: 'Laira AI Tutor',
      description: 'Python full-stack AI tutoring system',
      tech: 'Python, FastAPI, React, PostgreSQL',
    },
    {
      name: 'BMW Sales Data Analysis',
      description: 'Comprehensive sales analytics and forecasting',
      tech: 'Python, Pandas, Plotly, SQL',
    },
    {
      name: 'Customer Segmentation RFM',
      description: 'ML-based customer segmentation',
      tech: 'Python, Scikit-learn, PostgreSQL',
    },
  ];

  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Download my resume or view my professional experience below.
          </p>
        </div>

        {/* Resume Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Data Analyst Resume */}
          <div
            onClick={() => setSelectedResume('analyst')}
            className={`glassmorphism p-6 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedResume === 'analyst'
                ? 'border-accent/50 glow-green-bright'
                : 'hover:border-accent/30'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-accent">Data Analyst Resume</h3>
                <p className="text-sm text-foreground/60 mt-1">Focus on analytics & insights</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
            </div>
            <div className="flex gap-3 pt-4 border-t border-border/50">
              <Link
                href="/resume-analyst.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
              <Link
                href="/resume-analyst.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View
              </Link>
            </div>
          </div>

          {/* Developer Resume */}
          <div
            onClick={() => setSelectedResume('developer')}
            className={`glassmorphism p-6 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedResume === 'developer'
                ? 'border-secondary/50 glow-cyan-bright'
                : 'hover:border-secondary/30'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-secondary">Full-Stack Developer Resume</h3>
                <p className="text-sm text-foreground/60 mt-1">Focus on development & engineering</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <span className="text-xl">💻</span>
              </div>
            </div>
            <div className="flex gap-3 pt-4 border-t border-border/50">
              <Link
                href="/resume-developer.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
              <Link
                href="/resume-developer.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="glassmorphism p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="text-accent text-sm font-medium mt-1">{item.company}</p>
                    </div>
                    <span className="text-xs text-foreground/50 whitespace-nowrap ml-4">{item.period}</span>
                  </div>
                  <p className="text-foreground/70 text-sm mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="glassmorphism p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{item.degree}</h4>
                      <p className="text-accent text-sm font-medium mt-1">{item.institution}</p>
                    </div>
                    <span className="text-xs text-foreground/50 whitespace-nowrap ml-4">{item.year}</span>
                  </div>
                  <p className="text-foreground/70 text-sm mt-3">Grade: {item.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Summary */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-8 border border-accent/20">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Featured Projects on Resume</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">{project.name}</h4>
                <p className="text-foreground/70 text-sm">{project.description}</p>
                <p className="text-accent text-xs font-medium">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const projects = [
  // {
  //   title: 'E-Commerce Analytics Dashboard',
  //   description: 'Real-time analytics platform built with Python and React, providing insights into sales, customer behavior, and trends.',
  //   tags: ['Python', 'React', 'PostgreSQL', 'Data Analysis'],
  //   color: 'from-accent to-secondary',
  // },
  {
    title: 'LAIRA AI TUTOR',
    description: 'An AI-powered learning assistant built using Python, Django, React, and OpenAI API. Features include student login, smart chat, subject-based tutoring, and progress tracking.',
    tags: ["Python", "Django", "React", "OpenAI", "PostgreSQL"],
    color: 'from-purple-500 to-pink-500',
  },
  // {
  //   title: 'Data Pipeline Automation',
  //   description: 'Automated ETL pipeline processing millions of records daily, with error handling and performance optimization.',
  //   tags: ['Python', 'Pandas', 'AWS', 'PostgreSQL'],
  //   color: 'from-blue-500 to-cyan-500',
  // },
  {
    title: "BMW Sales Analytics",
    description:  "Advanced sales performance analysis of BMW models using Python and SQL. Identified profit by model, transmission type, region, and trends using Power BI dashboards.",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
    color: 'from-green-500 to-emerald-500',
  },
  // {
  //   title: 'Real-time Chat Application',
  //   description: 'WebSocket-based chat application with message encryption, file sharing, and user presence tracking.',
  //   tags: ['Next.js', 'Node.js', 'Socket.io', 'MongoDB'],
  //   color: 'from-orange-500 to-red-500',
  // },
  {
    title: "Customer Segmentation (RFM)",
    description:  "Customer segmentation using Recency, Frequency, and Monetary (RFM) analysis. Built clustering models to identify high-value customers and churn risks.",
    tech: ["Python", "Pandas", "Seaborn", "Machine Learning"],
    tags: ["Python", "Pandas", "Seaborn", "Machine Learning"],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-background pt-20 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{ duration: 18, repeat: Infinity, delay: 3 }}
            className="absolute bottom-40 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-accent">Projects</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore some of my recent work showcasing full-stack development and data analysis expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-full"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden" />

                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Top accent bar */}
                  <motion.div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold mb-3 group-hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index + tagIndex) * 0.05 }}
                          className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-accent hover:border-accent transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-accent hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={16} /> View Project
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors ml-auto"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-20 text-center"
          >
            <p className="text-foreground/70 text-lg mb-6">
              Want to see more projects? Check out my GitHub profile
            </p>
            <motion.a
              href="https://github.com/Rahul-45code"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
              <Github size={20} /> View All on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

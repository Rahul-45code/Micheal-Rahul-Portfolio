'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const experience = [
  {
    company: 'Tech Solutions Inc',
    position: 'Data Analyst',
    period: '2025 - Present',
    description: 'Leading data analytics initiatives, building dashboards, and mentoring junior analysts',
  },
  {
    company: 'Agileinfo Techytern',
    position: 'PythonFull-Stack Developer',
    period: '2024 - 2026',
    description: 'Developed and maintained full-stack applications, improved performance by 40%',
  },
  {
    company: 'StartUp Ventures',
    position: 'Junior Developer',
    period: '2021 - 2022',
    description: 'Built features for e-commerce platform, worked with Python and React',
  },
];

const education = [
  {
    school: 'Ponjesly college of Engineering',
    degree: 'Electronics and Communication Engineering',
    // year: '2021',
    // description: 'Focus on Data Science and Full-Stack Development',
  },
  {
    school: 'Agileinfo Techytern',
    degree: 'Advanced Python & Data Analytics',
    year: '2024',
    description: 'Specialized training in data pipelines and business intelligence',
  },
  {
    school: 'Tech Bootcamp',
    degree: 'Full-Stack Web Development',
    year: '2024',
    description: 'Intensive 12-week program covering modern web technologies',
  },
];

const achievements = [
  'Led 10+ successful data analytics projects',
  'Optimized database queries reducing load time by 50%',
  'Mentored 5+ junior developers and analysts',
  'Published 3 articles on data analysis techniques',
  'Contributed to 5+ open-source projects',
  'Earned AWS Solutions Architect certification',
];

export default function Resume() {
  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-background pt-20 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{ duration: 14, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20"
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  My <span className="text-accent">Resume</span>
                </h1>
                <p className="text-foreground/70 text-lg">
                  Professional experience and qualifications
                </p>
              </div>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-background px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all"
              >
                <Download size={20} /> Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-12 flex items-center gap-3"
            >
              <span className="w-1 h-8 bg-gradient-to-b from-accent to-secondary rounded-full" />
              Experience
            </motion.h2>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={timelineVariants}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full -ml-2.5"
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{job.position}</h3>
                        <p className="text-accent font-semibold">{job.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60 bg-background/50 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-foreground/70">{job.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-12 flex items-center gap-3"
            >
              <span className="w-1 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
              Education
            </motion.h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={timelineVariants}
                  className="relative pl-8 border-l-2 border-border hover:border-secondary transition-colors"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full -ml-2.5"
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-secondary transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-secondary font-semibold">{edu.school}</p>
                      </div>
                      <span className="text-sm text-foreground/60 bg-background/50 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-foreground/70">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-accent to-secondary rounded-full" />
              Key Achievements
            </h2>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-4 p-4 hover:bg-background/30 rounded-lg transition-colors"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.1,
                    }}
                    className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center text-background font-bold text-sm"
                  >
                    ✓
                  </motion.div>
                  <p className="text-foreground/80">{achievement}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

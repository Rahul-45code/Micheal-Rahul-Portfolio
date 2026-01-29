'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 93 },
      { name: 'Node.js', level: 87 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Data Analysis', level: 96 },
      { name: 'SQL', level: 94 },
      { name: 'Pandas', level: 92 },
      { name: 'Power BI', level: 88 },
      { name: 'Data Visualization', level: 90 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 82 },
      { name: 'CI/CD', level: 86 },
      { name: 'Linux', level: 88 },
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{ duration: 14, repeat: Infinity, delay: 2 }}
            className="absolute top-40 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl"
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
              My <span className="text-accent">Skills</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A comprehensive overview of technologies and expertise I've mastered throughout my career
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-12"
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="space-y-6"
              >
                <motion.h2
                  className="text-2xl font-bold flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <span className="w-1 h-8 bg-gradient-to-b from-accent to-secondary rounded-full" />
                  {category.category}
                </motion.h2>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <motion.h3
                          className="font-semibold text-lg"
                          animate={{
                            color:
                              hoveredSkill === skill.name
                                ? 'rgb(0, 255, 136)'
                                : 'rgb(224, 232, 255)',
                          }}
                        >
                          {skill.name}
                        </motion.h3>
                        <motion.span
                          animate={{
                            color:
                              hoveredSkill === skill.name
                                ? 'rgb(0, 217, 255)'
                                : 'rgb(124, 138, 219)',
                          }}
                          className="text-sm font-semibold"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 bg-card rounded-full overflow-hidden border border-border">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{
                            duration: 1.2,
                            delay: skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />

                        {/* Glow effect on progress bar */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute top-0 right-0 w-8 h-full bg-white/20 blur-sm"
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-20 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Languages', value: '5+' },
                { label: 'Frameworks', value: '10+' },
                { label: 'Tools', value: '15+' },
                { label: 'Years Exp.', value: '3+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="space-y-2"
                >
                  <motion.div
                    className="text-4xl font-bold text-accent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

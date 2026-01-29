'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
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
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-40 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
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
              About <span className="text-accent">Me</span>
            </h1>
            <motion.div
              layoutId="accent-line"
              className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20" ref={ref}>
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <motion.div variants={slideInLeft} className="space-y-4">
                <h2 className="text-3xl font-bold">My Journey</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  I started my career in data analysis, transforming raw data into actionable insights. My passion for problem-solving led me to expand into full-stack development, where I build complete solutions from database to user interface.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  With expertise in Python, I create efficient data pipelines and robust backend systems. My frontend skills ensure beautiful, responsive user experiences that bring projects to life.
                </p>
              </motion.div>

              {/* Skills Summary */}
              <motion.div variants={fadeInUp} className="pt-6">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Data Analysis',
                    'Python Development',
                    'Full-Stack Web Dev',
                    'Database Design',
                    'API Development',
                    'Performance Optimization',
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hobbies */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <motion.div variants={slideInRight} className="space-y-4">
                <h2 className="text-3xl font-bold">Beyond Work</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Outside of coding, I enjoy exploring different facets of life. Whether it's gaming, reading, or contributing to open-source projects, I'm always learning and growing.
                </p>
              </motion.div>

              {/* Hobbies Cards */}
              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  { icon: '🎮', title: 'Gaming', desc: 'Exploring new worlds and strategies' },
                  { icon: '📚', title: 'Reading', desc: 'Continuous learning through books' },
                  { icon: '🚀', title: 'Innovation', desc: 'Building cool projects and experiments' },
                  { icon: '🌍', title: 'Travel', desc: 'Discovering cultures and experiences' },
                ].map((hobby, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer"
                  >
                    <div className="text-4xl mb-2">{hobby.icon}</div>
                    <h3 className="font-semibold text-lg">{hobby.title}</h3>
                    <p className="text-sm text-foreground/60 mt-1">{hobby.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Goals Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-6">Career Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lead Innovation',
                  desc: 'Drive cutting-edge solutions that solve real-world problems',
                },
                {
                  title: 'Scale Systems',
                  desc: 'Build scalable architectures that handle millions of users',
                },
                {
                  title: 'Mentor Others',
                  desc: 'Share knowledge and help the next generation of developers',
                },
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="text-center space-y-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-lg mx-auto flex items-center justify-center text-2xl font-bold text-background"
                  >
                    {index + 1}
                  </motion.div>
                  <h4 className="text-lg font-semibold">{goal.title}</h4>
                  <p className="text-foreground/70">{goal.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

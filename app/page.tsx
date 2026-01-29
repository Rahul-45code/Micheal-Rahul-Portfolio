'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer, floatingAnimation } from '@/lib/animations';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <PageWrapper>
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center w-full"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={textVariants} className="space-y-4">
                <motion.p
                  variants={textVariants}
                  className="text-accent font-semibold text-lg tracking-wider"
                >
                  Welcome to my portfolio
                </motion.p>
                <motion.h1
                  variants={textVariants}
                  className="text-5xl md:text-6xl font-bold leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Micheal Rahul
                  </span>
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  className="text-xl text-foreground/80 leading-relaxed"
                >
                  Data Analyst & Python Full-Stack Developer passionate about building innovative solutions and transforming data into insights.
                </motion.p>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-4 pt-4"
              >
                {[
                  { value: '1+', label: 'Years Experience' },
                  { value: '5+', label: 'Projects' },
                  { value: '10+', label: 'Technologies' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:border-accent transition-colors"
                  >
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex gap-4 pt-4 flex-wrap"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-background px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all"
                  >
                    View My Work <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-card border border-border px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:border-accent transition-colors"
                  >
                    <Mail size={20} /> Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <motion.div
                animate={floatingAnimation}
                className="relative w-64 h-80 rounded-2xl overflow-hidden"
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 z-10 pointer-events-none" /> */}
                <Image
                  src="/profile.jpg"
                  alt="Micheal Rahul"
                  fill
                  className="object-cover object-top rounded-2xl"
                  priority
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-20 -right-10 bg-accent text-background px-6 py-3 rounded-full text-sm font-semibold glow-green-bright"
              >
                Available for work
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-accent rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}

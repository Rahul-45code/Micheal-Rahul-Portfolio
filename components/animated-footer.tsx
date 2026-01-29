"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, Target } from "lucide-react";

export default function AnimatedFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Rahul-45code',
      target: '_blank',
      rel: "noopener noreferrer",
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href:'https://www.linkedin.com/in/micheal-rahul-8a3205329',
      target: '_blank',
      rel: "noopener noreferrer",
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:michealrahul2003@gmail.com',
      target: '_blank',
      rel: "noopener noreferrer",
      label: 'Email',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border bg-background/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center font-bold text-background glow-green">
                  MR
                </div>
                <div>
                  <h3 className="font-bold text-lg">Micheal Rahul</h3>
                  <p className="text-sm text-foreground/60">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Building innovative solutions through data analysis and full-stack development.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map(
                  (link) => (
                    <li key={link}>
                      <motion.a
                        href={`/${link.toLowerCase().replace(' ', '')}`}
                        whileHover={{ x: 5, color: '#00ff88' }}
                        className="text-foreground/70 hover:text-accent transition-colors text-sm"
                      >
                        {link}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                    target={social.target}
                    rel={social.rel}
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent transition-all"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-foreground/60 text-sm">
              © {currentYear ?? ""} Micheal Rahul. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: '#00ff88' }}
                className="text-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#00d9ff' }}
                className="text-foreground/60 hover:text-secondary transition-colors text-sm"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll to top button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                ↑
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </motion.footer>
  );
}

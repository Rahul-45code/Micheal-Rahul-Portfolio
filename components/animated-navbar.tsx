'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function AnimatedNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const navUnderlineVariants = {
    initial: { width: 0 },
    animate: { width: '100%' },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center font-bold text-background text-lg glow-green">
                  MR
                </div>
                <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Micheal Rahul
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-1"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group"
                    >
                      {item.name}
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-secondary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-accent" />
              ) : (
                <Menu className="w-6 h-6 text-accent" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <motion.div
            variants={{
              open: {
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="flex flex-col p-4 gap-2"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-card transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}

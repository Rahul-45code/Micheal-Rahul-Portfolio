'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold">
          <span className="text-accent glow-green">M</span>R
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === item.name.toLowerCase()
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent glow-green-bright" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full font-medium text-primary-foreground bg-accent hover:bg-accent/90 transition-all duration-300 glow-green text-sm">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

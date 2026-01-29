'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contentRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX - innerWidth / 2) * 0.02;
      const moveY = (clientY - innerHeight / 2) * 0.02;

      contentRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        containerRef.current.style.backgroundPosition = `0% ${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0a0e27 0%, #0f1534 50%, #0a0e27 100%)
        `,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-lg font-semibold tracking-wide">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Micheal Rahul
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80">
              Data Analyst &{' '}
              <span className="text-accent glow-green">Python Full-Stack Developer</span>
            </p>
          </div>

          <p className="text-foreground/70 text-lg leading-relaxed max-w-lg">
            Transforming data into insights and building intelligent solutions. Specialized in data analytics,
            Python development, and AI-powered applications. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full font-medium text-primary-foreground bg-accent hover:bg-accent/90 transition-all duration-300 glow-green-bright flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full font-medium border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 flex items-center justify-center"
            >
              View Projects
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 pt-6 border-t border-border/50">
            <div>
              <p className="text-2xl font-bold text-accent">5+</p>
              <p className="text-sm text-foreground/60">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">3+</p>
              <p className="text-sm text-foreground/60">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">10+</p>
              <p className="text-sm text-foreground/60">Technologies</p>
            </div>
          </div>
        </div>

        {/* Right Profile Image */}
        <div
          ref={contentRef}
          className="relative h-96 lg:h-full min-h-96 flex items-center justify-center group"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-3xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative rounded-2xl glassmorphism p-1 overflow-hidden">
            <div className="relative w-72 h-96 rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-secondary/10">
              <Image
                src="/profile.jpg"
                alt="Micheal Rahul - Data Analyst and Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-accent/30 glow-green blur-sm" />
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-2 border-secondary/30 glow-cyan" />
        </div>
      </div>
    </section>
  );
}

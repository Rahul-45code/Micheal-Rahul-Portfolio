'use client';

import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'Languages' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Languages' },
    { name: 'SQL', level: 92, category: 'Languages' },
    { name: 'React', level: 88, category: 'Frontend' },
    { name: 'Next.js', level: 87, category: 'Frontend' },
    { name: 'FastAPI', level: 85, category: 'Backend' },
    { name: 'Django', level: 83, category: 'Backend' },
    { name: 'Machine Learning', level: 82, category: 'Data Science' },
    { name: 'Data Visualization', level: 90, category: 'Data Science' },
    { name: 'Pandas & NumPy', level: 93, category: 'Data Science' },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section ref={ref} id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive set of technical skills developed through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent mb-6">{category}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-accent text-sm">{skill.level}%</span>
                      </div>

                      <div className="relative h-2 bg-card rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-1000 ease-out glow-green"
                          style={{
                            width: animate ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 50}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Python', emoji: '🐍' },
              { name: 'JavaScript', emoji: '⚡' },
              { name: 'React', emoji: '⚛️' },
              { name: 'Next.js', emoji: '▲' },
              { name: 'FastAPI', emoji: '🚀' },
              { name: 'PostgreSQL', emoji: '🗄️' },
              { name: 'MongoDB', emoji: '📊' },
              { name: 'Pandas', emoji: '🐼' },
              { name: 'Scikit-learn', emoji: '🤖' },
              { name: 'Matplotlib', emoji: '📈' },
              { name: 'Docker', emoji: '🐳' },
              { name: 'Git', emoji: '🔀' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="glassmorphism p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-accent/50 transition-all duration-300 hover:glow-green cursor-pointer"
              >
                <span className="text-3xl">{tech.emoji}</span>
                <span className="text-xs text-center text-foreground/70">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

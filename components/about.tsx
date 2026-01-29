'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      year: '2021',
      title: 'Started Data Analytics Journey',
      description: 'Began exploring data science and analytics, mastering Python and data visualization.',
    },
    {
      year: '2022',
      title: 'Full-Stack Development',
      description: 'Expanded skills to full-stack development, building end-to-end web applications.',
    },
    {
      year: '2023',
      title: 'AI & ML Integration',
      description: 'Specialized in integrating AI and machine learning models into production applications.',
    },
    {
      year: '2024',
      title: 'Advanced Projects',
      description: 'Completed complex projects including AI tutoring systems and advanced data analysis.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-gradient-to-b from-background via-card/20 to-background relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A passionate developer focused on transforming data into actionable insights and building intelligent applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <div className="space-y-6">
            <div className="glassmorphism p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-accent">Professional Summary</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a Data Analyst and Python Full-Stack Developer with a passion for creating intelligent solutions
                that solve real-world problems. With expertise in data analysis, visualization, and web development,
                I bridge the gap between data insights and user-friendly applications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Data Visualization',
                  'Machine Learning',
                  'Web Development',
                  'AI Integration',
                  'Problem Solving',
                  'Tech Reading',
                ].map((hobby) => (
                  <div key={hobby} className="glassmorphism p-4 rounded-lg text-sm text-foreground/80">
                    {hobby}
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-accent">Career Goals</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">▸</span>
                  <span>Build AI-powered applications that impact millions of users</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">▸</span>
                  <span>Lead data science and development teams on innovative projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">▸</span>
                  <span>Contribute to open-source projects and share knowledge with the community</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Career Timeline</h3>
            <div className="relative space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent glow-green-bright" />
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" />
                  )}

                  <div className="glassmorphism p-4 rounded-lg">
                    <p className="text-accent font-semibold text-sm">{item.year}</p>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-foreground/70 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Email sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to send email. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
      console.log('[v0] Contact form error:', error);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-background py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact card */}
        <Card className="glassmorphism p-8 sm:p-12 border-white/10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-foreground placeholder-muted-foreground transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-foreground placeholder-muted-foreground transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-foreground placeholder-muted-foreground transition-all"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-foreground placeholder-muted-foreground transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Status message */}
            {submitStatus !== 'idle' && (
              <div
                className={`p-4 rounded-lg text-sm font-medium ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-background font-semibold rounded-lg transition-all duration-300 glow-green-bright disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-2">Email</h3>
                <a href="mailto:michealrahul2003@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  michealrahul2003@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Location</h3>
                <p className="text-muted-foreground">Remote Available</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-green-400 mb-2">Response Time</h3>
                <p className="text-muted-foreground">24-48 hours</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

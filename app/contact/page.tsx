'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageWrapper from '@/components/page-wrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'michealrahul2003@gmail.com',
      href: 'mailto:michealrahul2003@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7397683760',
      href: 'tel:+91 7397683760',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'kanniyakumari, Tamil Nadu, India',
      href: '#',
    },
  ];

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-background pt-20 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-40 left-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"
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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Have a question or want to collaborate? I'd love to hear from you. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-8"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold"
              >
                Contact Information
              </motion.h2>

              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-accent transition-colors group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center text-background glow-green"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-foreground/70 mt-1">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                className="pt-4"
              >
                <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent hover:text-background transition-all"
                    >
                      <span className="font-semibold text-sm">{social[0]}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8"
            >
              {/* Name */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-sm font-semibold">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-sm font-semibold">Subject</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject.message}</p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-secondary text-background px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

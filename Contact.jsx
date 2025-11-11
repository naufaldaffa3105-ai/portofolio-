import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, Github, Palette } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const iconMap = {
    linkedin: Linkedin,
    palette: Palette,
    instagram: Instagram,
    twitter: Twitter,
    github: Github
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                      <Phone className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <MapPin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                      >
                        <Icon className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/20 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/20 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/20 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800/50 border-cyan-500/20 text-white placeholder:text-gray-500 focus:border-cyan-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 py-6 text-lg font-semibold"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
          <p className="text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2024 {personalInfo.name}. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


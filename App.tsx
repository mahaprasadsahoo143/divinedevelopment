import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, ArrowRight, HeartPulse } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import DoctorsSection from './components/DoctorsSection';
import BookingSection from './components/BookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Specialists', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="font-sans text-slate-700">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-clinic-blue flex items-center justify-center text-white shadow-lg transform hover:rotate-12 transition-transform">
              <HeartPulse size={24} />
            </div>
            <span className="font-heading font-black text-xl md:text-2xl tracking-tight text-clinic-blue">
              Divine<span className="text-clinic-pink">Child</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-slate-600 hover:text-clinic-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clinic-pink transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-clinic-blue to-[#4BC5F5] text-white font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-clinic-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 flex flex-col items-center space-y-4 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-700 hover:text-clinic-blue"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 rounded-full bg-clinic-pink text-white font-bold shadow-lg"
            >
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <DoctorsSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-clinic-blue to-[#1a9ad1] text-white pt-20 pb-10 rounded-t-[50px] mt-[-50px] relative z-20 shadow-[0_-10px_40px_rgba(45,170,225,0.3)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-full text-clinic-blue">
                  <HeartPulse size={20} />
                </div>
                <span className="font-heading font-black text-xl">
                  Divine Child<br/>Development Centre
                </span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                A specialized therapy clinic providing comprehensive care for children with developmental delays, autism, and ADHD.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-clinic-blue transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Specialists', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-6">Services</h3>
              <ul className="space-y-3">
                {['Speech Therapy', 'Occupational Therapy', 'Special Education', 'Physiotherapy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-6">Newsletter</h3>
              <p className="text-blue-100 text-sm mb-4">Stay updated with therapy tips.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/30 focus:outline-none focus:bg-white focus:text-slate-800 text-sm placeholder-blue-200 text-white transition-colors"
                />
                <button className="absolute right-1 top-1 w-8 h-8 rounded-full bg-clinic-pink flex items-center justify-center text-white hover:bg-pink-500 transition-colors">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">© 2024 Divine Child Development Centre. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
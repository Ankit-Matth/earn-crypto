'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-indigo-900 backdrop-blur-lg shadow-lg border-b border-indigo-700' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">₿</span>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl text-cyan-400">
                EarnCrypto
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a href="#methods" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-cyan-500/20 transition-all duration-300">
              Methods
            </a>
            <a href="#blog" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-purple-500/20 transition-all duration-300">
              Guide
            </a>
            <a href="#faq" className="text-gray-300 hover:text-pink-400 px-3 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-pink-500/20 transition-all duration-300">
              FAQ
            </a>
            <a href="#resources" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm lg:text-base font-medium hover:bg-cyan-500/20 transition-all duration-300">
              Resources
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 lg:ml-4 bg-cyan-500 text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-bold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-indigo-900 backdrop-blur-lg rounded-lg mt-2 border border-indigo-700">
            <a href="#methods" className="block text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-base font-medium hover:bg-cyan-500/20 transition-all duration-300">
              Methods
            </a>
            <a href="#blog" className="block text-gray-300 hover:text-purple-400 px-4 py-2 rounded-lg text-base font-medium hover:bg-purple-500/20 transition-all duration-300">
              Guide
            </a>
            <a href="#faq" className="block text-gray-300 hover:text-pink-400 px-4 py-2 rounded-lg text-base font-medium hover:bg-pink-500/20 transition-all duration-300">
              FAQ
            </a>
            <a href="#resources" className="block text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-base font-medium hover:bg-cyan-500/20 transition-all duration-300">
              Resources
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mx-4 mt-4 bg-cyan-500 text-white px-6 py-3 rounded-full text-base font-bold text-center hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

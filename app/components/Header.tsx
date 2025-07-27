
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-600 font-pacifico">
            Dablu Kumar
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer text-left whitespace-nowrap">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer text-left whitespace-nowrap">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer text-left whitespace-nowrap">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer text-left whitespace-nowrap">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer text-left whitespace-nowrap">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

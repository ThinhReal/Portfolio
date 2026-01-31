import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
          >
            Nguyen Van Thinh
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Interests
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Certificates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              Interests
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

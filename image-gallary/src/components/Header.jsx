import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = ['Home', 'About', 'Contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-cyan-400 hover:text-cyan-300 transition duration-300 drop-shadow-md"
        >
          ImageGallery
        </Link>

        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((label, idx) => (
            <Link
              key={idx}
              to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className="relative group transition duration-300 text-white hover:text-cyan-300"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 group-hover:blur-sm group-hover:opacity-10 group-hover:bg-cyan-400 transition-all duration-500 rounded-sm"></span>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-cyan-300 transition duration-300"
            aria-label="Toggle navigation"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-6 pb-4 space-y-4 bg-[#00010d]/80 backdrop-blur-md animate-fade-in">
          {navItems.map((label, idx) => (
            <Link
              key={idx}
              to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className="text-white hover:text-cyan-300 transition duration-300 transform hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

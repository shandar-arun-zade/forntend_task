import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-gray-400 text-sm shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
        
        <p className="text-center md:text-left transition-all duration-300 hover:text-gray-100">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">ImageGallery</span>. All rights reserved.
        </p>

        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform transform hover:-translate-y-1 hover:text-cyan-400 duration-300 ease-in-out"
            aria-label="Twitter"
          >
            <FaSquareXTwitter className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform transform hover:-translate-y-1 hover:text-cyan-400 duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform transform hover:-translate-y-1 hover:text-cyan-400 duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

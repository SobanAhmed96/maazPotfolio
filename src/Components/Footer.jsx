import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0e1121] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Soban Ahmed. All rights reserved.</p>
          <p className="text-pink-500 mt-1">Developed by Maaz Khalid</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="mailto:ks4823584@gmail.com"
            className="hover:text-pink-500"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-maaz-434628350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/maazkhalid96"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

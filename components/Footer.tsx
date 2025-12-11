import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Linkedin } from 'lucide-react';

const CONTACT_EMAIL = 'contact@lorrindagraydavis.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/lorrinda-gray-davis';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Lorrinda Gray-Davis
            </h3>
            <p className="text-emerald-100 text-sm">
              Speaker, Author, and Advocate dedicated to diversity, health advocacy,
              and empowering communities through connection and resilience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Speaking Topics
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Book a Speaking Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-100 text-sm">
            &copy; {currentYear} Lorrinda Gray-Davis. All rights reserved.
          </p>
          <p className="text-emerald-100 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-white" /> for advocacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Clock } from 'lucide-react';

const Footer = () => {
  const links = {
    'Product': ['Features', 'Pricing', 'Skills', 'Mobile App'],
    'Company': ['About', 'Careers', 'Press', 'Contact'],
    'Resources': ['Blog', 'Help Center', 'Community', 'API'],
    'Legal': ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">SkillSprint</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master career-critical skills in just 15 minutes a day with AI-powered microlearning.
            </p>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 SkillSprint. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

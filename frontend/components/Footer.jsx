import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thanks for subscribing!');
      setEmail('');
    }
  };

  const footerSections = {
    products: [
      { name: 'Keyboards', href: '#' },
      { name: 'Mice', href: '#' },
      { name: 'Headsets', href: '#' },
      { name: 'Monitors', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Warranty', href: '#' },
      { name: 'Returns', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'f', href: '#' },
    { name: 'Twitter', icon: 't', href: '#' },
    { name: 'Instagram', icon: 'i', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-red-500 text-glow">NIGUARA</div>
            <p className="text-gray-400">
              Premium gaming products for the ultimate gaming experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Products Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              {footerSections.products.map((product) => (
                <li key={product.name}>
                  <a href={product.href} className="hover:text-red-500 transition-colors">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              {footerSections.support.map((support) => (
                <li key={support.name}>
                  <a href={support.href} className="hover:text-red-500 transition-colors">
                    {support.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest products and offers.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 bg-gray-800 border border-red-900 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-red-500"
                required
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-red-900 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Niguara Gaming. All rights reserved. Built for champions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
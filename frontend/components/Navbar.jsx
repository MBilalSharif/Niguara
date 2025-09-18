import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "GAMING", href: "/gaming" },
    { name: "SUPPORT", href: "/support" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-extrabold text-red-500 text-glow tracking-widest">
              NIGUARA
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className={({ isActive }) =>
                    `uppercase font-bold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-red-500 text-glow"
                        : "text-red-500 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-300 font-semibold glow-red">
              Cart ({cartCount})
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-red-500 hover:text-white transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Glow Style */}
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.7),
            0 0 20px rgba(239, 68, 68, 0.5);
        }
        .glow-red {
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { Menu, X, TreeDeciduous } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Our Vision", href: "#vision" },
  { name: "Core Pillars", href: "#pillars" },
  { name: "Open Manifesto", href: "#manifesto" },
  { name: "Join Us", href: "#join" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TreeDeciduous className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-800">Bargad</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#join"
              className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#join"
              className="block w-full text-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

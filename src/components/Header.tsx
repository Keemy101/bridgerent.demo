import React from 'react';
import { Calendar, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900">Bridger ENT</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-blue-900">
              <Phone className="h-5 w-5 mr-2" />
              <span>(123) 456-7890</span>
            </a>
            <Link
              to="/appointments"
              className="bg-blue-900 text-white px-6 py-2 rounded-full flex items-center hover:bg-blue-800 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</Link>
            <Link
              to="/appointments"
              className="block px-3 py-2 bg-blue-900 text-white rounded-md"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
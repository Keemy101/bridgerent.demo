import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Bridger ENT</h3>
              <p className="text-gray-600">Comprehensive ear, nose, and throat care for all ages.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-blue-900">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-blue-900">About</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-blue-900">Services</Link></li>
                <li><Link to="/appointments" className="text-gray-600 hover:text-blue-900">Appointments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">(123) 456-7890</li>
                <li className="text-gray-600">info@bridgerent.com</li>
                <li className="text-gray-600">123 Medical Plaza Dr.<br />Bozeman, MT 59715</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Monday - Friday: 8am - 5pm</li>
                <li className="text-gray-600">Saturday: 9am - 1pm</li>
                <li className="text-gray-600">Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Bridger ENT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
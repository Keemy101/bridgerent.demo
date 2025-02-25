import React from 'react';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
        <Services />
      </div>
    </div>
  );
}
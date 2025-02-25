import React from 'react';
import { Stethoscope, Ear, Settings as Lungs, Brain, FlaskRound as Flask, UserPlus } from 'lucide-react';

const services = [
  {
    title: 'General ENT Care',
    description: 'Comprehensive diagnosis and treatment of ear, nose, and throat conditions.',
    icon: Stethoscope
  },
  {
    title: 'Hearing Solutions',
    description: 'Advanced hearing tests and personalized treatment options.',
    icon: Ear
  },
  {
    title: 'Sinus Care',
    description: 'Treatment for chronic sinusitis and advanced sinus procedures.',
    icon: Lungs
  },
  {
    title: 'Sleep Medicine',
    description: 'Diagnosis and treatment of sleep-related breathing disorders.',
    icon: Brain
  },
  {
    title: 'Allergy Treatment',
    description: 'Comprehensive allergy testing and immunotherapy options.',
    icon: Flask
  },
  {
    title: 'Pediatric ENT',
    description: "Specialized care for children's ear, nose, and throat conditions.",
    icon: UserPlus
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive ENT care using the latest medical technologies
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
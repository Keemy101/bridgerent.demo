import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive Ear, Nose & Throat Care for All Ages
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Expert care by Dr. Brennan T. Dodson, MD, FARS, providing advanced ENT treatments
              with a patient-centered approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/appointments"
                className="bg-blue-900 text-white px-8 py-3 rounded-full flex items-center hover:bg-blue-800 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book an Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              alt="Dr. Brennan T. Dodson"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
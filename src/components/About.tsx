import React from 'react';
import { Award, GraduationCap, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Dr. Brennan T. Dodson, MD, FARS
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Board-certified otolaryngologist specializing in comprehensive ENT care
              with over 15 years of experience in treating patients of all ages.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-blue-900 mr-3" />
                <span className="text-gray-700">MD from Johns Hopkins School of Medicine</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-900 mr-3" />
                <span className="text-gray-700">Fellow of the American Rhinologic Society (FARS)</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-900 mr-3" />
                <span className="text-gray-700">Board Certified in Otolaryngology</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Dr. Brennan T. Dodson"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To provide exceptional, comprehensive ear, nose, and throat care through
            innovative treatments, compassionate service, and a patient-centered approach
            that prioritizes your well-being and quality of life.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Heart className="h-12 w-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered Care</h3>
            <p className="text-gray-600">
              Your health and comfort are our top priorities. We take the time to listen
              and develop personalized treatment plans.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards of medical care through continuous
              education and adoption of advanced technologies.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
            <p className="text-gray-600">
              Building lasting relationships with our patients through transparent
              communication and reliable care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
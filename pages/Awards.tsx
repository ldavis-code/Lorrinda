import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-emerald-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Awards & Recognition
            </h1>
            <p className="text-xl text-emerald-100">
              A career dedicated to service, recognized by organizations
              across the nation for impact in diversity, advocacy, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Award */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Trophy className="text-accent" size={32} />
              </div>
              <div>
                <span className="text-accent font-semibold">2025 - Featured</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold">
                  OPTN Transitional Nominating Committee
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              Appointed by the Health Resources & Services Administration (HRSA)
            </p>
            <p className="text-gray-700">
              Selected to help reform the governance of the Organ Procurement and
              Transplantation Network (OPTN), a critical system serving over 100,000
              patients annually awaiting life-saving organ transplants. This appointment
              represents the culmination of years of advocacy work and a commitment to
              improving healthcare equity at the national level.
            </p>
          </div>
        </div>
      </section>

      {/* All Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Recognition Timeline</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {AWARDS.map((award) => (
              <div
                key={award.id}
                className="flex gap-6 items-start bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary/5 rounded-lg flex flex-col items-center justify-center">
                    <Award className="text-primary mb-1" size={24} />
                    <span className="text-primary font-bold text-sm">{award.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-xl font-bold mb-1">{award.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{award.organization}</p>
                  {award.description && (
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="text-accent" size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">$1B+</div>
              <p className="text-blue-200">
                Awarded to minority and women-owned businesses
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="text-accent" size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-blue-200">
                Patients served by OPTN annually
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="text-accent" size={32} />
              </div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-200">
                Years of advocacy and leadership
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;

import React from 'react';
import { Award } from 'lucide-react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Recognition & Awards
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A lifetime of service recognized by government, industry, and community organizations.
          </p>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {AWARDS.map((award) => (
              <div
                key={award.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-serif text-lg font-bold text-gray-900">{award.title}</h3>
                  <p className="text-primary font-medium text-sm">{award.organization}</p>
                  {award.description && (
                    <p className="text-gray-600 text-sm mt-2">{award.description}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <span className="text-gray-500 font-medium">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">$1B+</div>
              <p className="text-gray-600">
                Awarded to minority and women-owned businesses
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <p className="text-gray-600">
                Patients served by OPTN system annually
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">
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

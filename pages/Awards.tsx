import React from 'react';
import { Award, Users } from 'lucide-react';
import { AWARDS } from '../constants';

const LEADERSHIP_COMMITTEES = [
  {
    id: 'optn-patient-affairs',
    title: 'OPTN Patient Affairs Committee',
    subtitle: 'OPTN Policy Oversight Committee',
    description: 'National policy voice for transplant patients'
  },
  {
    id: 'optn-nominating',
    title: 'OPTN Transitional Nominating Committee (2025)',
    description: 'Appointed by HRSA to reform governance of the organ transplant system'
  },
  {
    id: 'aasld-advisory',
    title: 'AASLD Patient Advisory Group',
    description: 'Advising the leading liver disease research organization'
  },
  {
    id: 'harrison-fellow',
    title: 'Harrison Fellow, Fatty Liver Foundation',
    description: 'Advancing fatty liver disease awareness and research'
  }
];

const Awards: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Community Service
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A lifetime of service recognized by government, industry, and community organizations.
          </p>
        </div>
      </section>

      {/* Leadership & Committees Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Leadership & Committees</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I serve on national committees working to ensure patients have a seat at the table in transplant policy, research, and governance.
          </p>
          <div className="space-y-4">
            {LEADERSHIP_COMMITTEES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-serif text-lg font-bold text-gray-900">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-primary font-medium text-sm">{item.subtitle}</p>
                  )}
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">$1B+</div>
              <p className="text-gray-600">
                Awarded to minority and women-owned businesses
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

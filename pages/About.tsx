import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              About Lorrinda
            </h1>
            <p className="text-xl text-blue-100">
              A journey from corporate executive to national health advocate,
              driven by resilience, purpose, and an unwavering commitment to service.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/images/lorrinda-headshot.jpg"
                alt="Lorrinda Gray-Davis - Professional Portrait"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg mb-6"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">The Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Lorrinda Gray-Davis's career has been defined by breaking barriers and
                  building bridges. As the Director of Diversity Development at Perini
                  Building Company, she led groundbreaking initiatives on the $9 billion
                  MGM CityCenter project in Las Vegas, one of the largest privately funded
                  construction projects in U.S. history.
                </p>
                <p>
                  Her work resulted in over a billion dollars being awarded to minority,
                  minority women, and women-owned businesses, transforming the landscape
                  of diversity in the construction industry.
                </p>
                <p>
                  In 2018, her life took an unexpected turn when she was diagnosed with
                  liver cancer. What could have been a devastating setback became the
                  catalyst for a new chapter of advocacy. After receiving a life-saving
                  liver transplant at the Nazih-Zuhdi Transplant Institute, Lorrinda
                  channeled her experience into purpose.
                </p>
                <p>
                  Today, she serves on the OPTN Transitional Nominating Committee under
                  HRSA, helping to reform the governance of the national organ procurement
                  and transplantation network that serves over 100,000 patients annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Building2 className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                Creating pathways for underrepresented communities in business and
                healthcare, moving beyond compliance to genuine culture change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-accent" size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Health Advocacy</h3>
              <p className="text-gray-600">
                Championing organ donation awareness, patient rights, and equitable
                access to healthcare for all communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-secondary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Community Connection</h3>
              <p className="text-gray-600">
                Building networks of support and understanding, because human
                connection is vital medicine for survival and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Affiliations & Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">OPTN Transitional Nominating Committee</h3>
              <p className="text-gray-600 text-sm">Appointed by HRSA (2025)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">TRIO Oklahoma</h3>
              <p className="text-gray-600 text-sm">Founder (2020)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Global Liver Institute</h3>
              <p className="text-gray-600 text-sm">Advocate & Award Recipient</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Women's Chamber of Commerce Nevada</h3>
              <p className="text-gray-600 text-sm">Hall of Fame Inductee (2010)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-emerald-100 mb-8">
            Interested in having Lorrinda speak at your event or collaborate on advocacy initiatives?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Mic, Heart, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, TIMELINE } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-emerald-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Turning Adversity into Advocacy
              </h1>
              <p className="text-lg lg:text-xl text-emerald-100 mb-8">
                Lorrinda Gray-Davis is a liver transplant survivor, diversity champion,
                and national health advocate transforming personal challenges into powerful
                change for communities across America.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/speaking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Book a Speaker
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/images/lorrinda-headshot.jpg"
                alt="Lorrinda Gray-Davis"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/3">
              <a
                href="https://www.cancertodaymag.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/cancer-today-cover.jpg"
                  alt="Cancer Today Magazine Cover - Summer 2025 featuring Lorrinda Gray-Davis"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </a>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Featured In</p>
              <h2 className="font-serif text-3xl font-bold mb-4">Cancer Today Magazine</h2>
              <p className="text-gray-600 mb-4">
                Cover story: <strong>"The Power of Connection"</strong> — After receiving a new liver,
                cancer survivor Lorrinda Gray-Davis supports the transplant community through advocacy,
                education, and the healing power of human connection.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Summer 2025 | Vol. 15, Issue 02 | American Association for Cancer Research
              </p>
              <a
                href="https://www.cancertodaymag.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Read the Article
                <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Speaker</h3>
              <p className="text-gray-600 text-sm">
                Inspiring audiences with stories of resilience, diversity, and the power of connection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Advocate</h3>
              <p className="text-gray-600 text-sm">
                Fighting for organ donation awareness and health equity at the national level.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-secondary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Leader</h3>
              <p className="text-gray-600 text-sm">
                Appointed to OPTN Transitional Nominating Committee, shaping transplant policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">A Journey of Impact</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>
            <div className="space-y-8">
              {TIMELINE.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-primary font-semibold">{event.year}</span>
                      <h3 className="font-serif text-xl font-bold mt-1">{event.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <p className="text-indigo-100 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-indigo-200 text-sm">{testimonial.title}</p>
                  {testimonial.organization && (
                    <p className="text-indigo-300 text-sm">{testimonial.organization}</p>
                  )}
                  {testimonial.year && (
                    <p className="text-indigo-300 text-sm">{testimonial.year}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Inspire Your Audience?
          </h2>
          <p className="text-amber-100 mb-8">
            Book Lorrinda for your next event, conference, or organization meeting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

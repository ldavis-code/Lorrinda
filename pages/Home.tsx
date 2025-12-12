import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Mic, Download } from 'lucide-react';
import { TIMELINE } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div>
              {/* Featured badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-8">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm font-medium text-primary">Featured in Cancer Today, Summer 2025</span>
              </div>

              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                The Power of <span className="italic text-primary">Connection</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl">
                From overseeing billion-dollar construction diversity initiatives to
                reforming national organ transplant governance. Lorrinda Gray-Davis is
                a voice for the silenced and a leader for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Lorrinda
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Read Biography
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
                <img
                  src="/images/headshot.jpg"
                  alt="Lorrinda Gray-Davis"
                  className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full object-cover object-top border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">2025 Appointment</p>
                <p className="font-semibold text-gray-900">OPTN Nominating Committee</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Leadership</p>
                <p className="font-semibold text-gray-900">President, Transplant Recipients International Org</p>
                <p className="font-semibold text-gray-900">Founder, TRIO-Oklahoma</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mic className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Speaker</p>
                <p className="font-semibold text-gray-900">Diversity & Resilience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/lorrinda-nature.jpg"
                alt=""
                className="w-full rounded-2xl shadow-lg"
              />
              {/* Quote overlay */}
              <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-gray-700 italic text-sm">
                  "Whether in the construction industry or the transplant community, Ms. Gray-Davis is always striving for more."
                </p>
              </div>
              {/* Cancer Today image */}
              <div className="mt-8">
                <img
                  src="/images/cancer-today.gif"
                  alt="Featured in Cancer Today"
                  className="w-full max-w-md rounded-lg shadow-md"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Championing Diversity. Advocating for Life.
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Lorrinda Gray-Davis is a force of nature. Formerly a top executive overseeing diversity for a $9 billion construction project, she shattered glass ceilings in a male-dominated industry.
                </p>
                <p>
                  In 2017, her life took a dramatic turn with a liver cancer diagnosis. Today, as a transplant survivor, she applies that same executive leadership to advocate for patients nationwide, serving on federal committees and inspiring audiences with her story of resilience.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 text-primary font-semibold hover:underline"
              >
                Read Full Story
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">A Journey of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-xl shadow-sm">
                <span className="text-primary font-semibold text-sm">{event.year}</span>
                <h3 className="font-serif text-lg font-bold mt-1 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio/Press Kit Section */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white italic mb-2">Official Bio</h2>
              <p className="text-white/80">
                Download Lorrinda's official biography and headshots for press and event marketing.
              </p>
            </div>
            <a
              href="/press-kit.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download className="mr-2" size={18} />
              Download Press Kit
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Inspire Your Audience?
          </h2>
          <p className="text-slate-300 mb-8">
            Book Lorrinda for your next event, conference, or organization meeting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
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

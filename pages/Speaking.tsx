import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SPEAKING_TOPICS } from '../constants';

const categoryColors: Record<string, string> = {
  'Resilience': 'bg-amber-100 text-amber-700',
  'Diversity': 'bg-emerald-100 text-emerald-700',
  'Health & Advocacy': 'bg-yellow-100 text-yellow-700',
};

const Speaking: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Navy Blue */}
      <section className="bg-secondary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Speaking & Keynotes
            </h1>
            <p className="text-lg text-slate-300">
              Lorrinda Gray-Davis delivers powerful presentations that bridge the gap between corporate strategy and human resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Why Book Lorrinda?</h2>
            <p className="text-gray-600">
              From the boardroom of billion-dollar construction projects to the hospital room of a transplant recovery, Lorrinda possesses a rare duality of experience. She teaches audiences how to find strength in vulnerability and how to build systems that truly include everyone.
            </p>
          </div>

          {/* Speaking Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPEAKING_TOPICS.map((topic) => (
              <div key={topic.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[topic.category]}`}>
                  {topic.category.toUpperCase()}
                </span>
                <h3 className="font-serif text-xl font-bold mb-3">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 italic">Perfect For...</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Medical & Healthcare Conferences</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Corporate Diversity & Inclusion Summits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Construction & Engineering Associations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Women's Leadership Events</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Patient Advocacy Organizations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span>Government & Policy Forums</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">Book Lorrinda for 2025</h3>
              <p className="text-slate-300 mb-6">
                Lorrinda is currently accepting engagements for late 2025 and 2026. Please inquire for availability.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request Availability
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Authentic Storytelling</h3>
                  <p className="text-gray-600">Real experiences that resonate, from boardrooms to hospital rooms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Actionable Insights</h3>
                  <p className="text-gray-600">Practical takeaways your audience can implement immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Customized Content</h3>
                  <p className="text-gray-600">Every presentation is tailored to your organization's goals and audience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Engaging Delivery</h3>
                  <p className="text-gray-600">Interactive elements and Q&A to foster meaningful dialogue.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/remember-rejoice.jpg"
                alt="Lorrinda speaking at Remember & Rejoice 2024"
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;

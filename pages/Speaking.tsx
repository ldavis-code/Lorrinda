import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Building, Heart } from 'lucide-react';
import { SPEAKING_TOPICS } from '../constants';

const categoryIcons: Record<string, React.ReactNode> = {
  'Resilience': <Sparkles className="text-accent" size={24} />,
  'Diversity': <Users className="text-primary" size={24} />,
  'Health & Advocacy': <Heart className="text-red-500" size={24} />,
};

const categoryColors: Record<string, string> = {
  'Resilience': 'bg-accent/10 text-accent',
  'Diversity': 'bg-primary/10 text-primary',
  'Health & Advocacy': 'bg-red-50 text-red-600',
};

const Speaking: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-amber-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Speaking & Presentations
            </h1>
            <p className="text-xl text-amber-100">
              Inspiring audiences with authentic stories of resilience, leadership,
              and the transformative power of turning adversity into advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Speaking Topics</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Each presentation is tailored to your audience and can be adapted for
            keynotes, workshops, panel discussions, or intimate fireside chats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPEAKING_TOPICS.map((topic) => (
              <div key={topic.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {categoryIcons[topic.category]}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[topic.category]}`}>
                    {topic.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Ideal For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Building className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-semibold mb-2">Corporate Events</h3>
              <p className="text-gray-600 text-sm">Diversity summits, leadership retreats, and annual meetings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Heart className="mx-auto text-red-500 mb-3" size={32} />
              <h3 className="font-semibold mb-2">Healthcare Organizations</h3>
              <p className="text-gray-600 text-sm">Patient advocacy events, transplant awareness, and health equity forums</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="mx-auto text-secondary mb-3" size={32} />
              <h3 className="font-semibold mb-2">Nonprofits & Associations</h3>
              <p className="text-gray-600 text-sm">Community gatherings, fundraisers, and awareness campaigns</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Sparkles className="mx-auto text-accent mb-3" size={32} />
              <h3 className="font-semibold mb-2">Conferences</h3>
              <p className="text-gray-600 text-sm">Keynotes, breakout sessions, and panel moderation</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">What to Expect</h2>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Book Lorrinda for Your Event
          </h2>
          <p className="text-blue-100 mb-8">
            Let's discuss how Lorrinda can inspire and empower your audience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request Availability
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Speaking;

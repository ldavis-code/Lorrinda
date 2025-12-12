import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TIMELINE } from '../constants';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            About Lorrinda Gray-Davis
          </h1>
          <p className="text-gray-600 text-lg">
            Executive. Survivor. Advocate. Author.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">A Career of Breaking Barriers</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Lorrinda Gray-Davis grew up in Oklahoma and has lived across the United States, but her heart has always remained in her home state. Her professional journey is defined by a relentless drive for inclusion. Most notably, while working in Arizona, Nevada, Maryland, California, and Florida, Lorrinda led one of the top General Contractor's Diversity Development Departments nationally.
                  </p>
                  <p>
                    Construction is a notoriously difficult industry for women and minority-owned companies to access. Lorrinda didn't just participate; she changed the landscape. She oversaw the construction spend on major development projects, including the <strong>$9 Billion MGM MIRAGE Project CityCenter</strong> and the <strong>$4 Billion Cosmopolitan</strong>, both in Las Vegas.
                  </p>
                  <p>
                    Her programs resulted in over $1.2 Billion spent with Women, Minority, Small, and Veteran Owned Companies on these projects. She gave these businesses a "seat at the table," allowing them to grow bonding capacity and financial stability.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">The Diagnosis That Changed Everything</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Nine months after relocating back to Oklahoma to work for a general contractor, Lorrinda was diagnosed with liver cancer. The news sent a shockwave through her life. In August of 2018, she received a life-saving liver transplant at Nazih-Zuhdi Transplant Institute, Integris Baptist Hospital.
                  </p>
                  <p>
                    The work of her doctors and nurses inspired her to contribute in new ways. Five months post-op, she was appointed as a National Board Member of Transplant Recipients International Organization (TRIO). In 2020, she founded <strong>TRIO-Oklahoma</strong>. She serves as President of Transplant Recipients International Organization and stays involved in TRIO-Oklahoma to provide mentorship and support to others walking the frightening path of organ failure.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Leading on a National Stage</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Today, Lorrinda combines her corporate governance expertise with her patient advocacy. In 2025, she was appointed to the <strong>OPTN Transitional Nominating Committee</strong> under HRSA to reform the governance of the entire US organ transplant system. She also serves as the <strong>Vice Chair of the Patient Affairs Committee</strong> and is a <strong>Committee member of the Policy Oversight Committee</strong> for the OPTN.
                  </p>
                  <p>
                    Under her leadership, TRIO hosts the largest donor remembrance in the United States, the <strong>Remember & Rejoice Ceremony</strong> at St. Patrick's Cathedral in New York City. Lorrinda had the distinct honor of being the opening and closing speaker for this prestigious event in both 2024 and 2025.
                  </p>
                  <p>
                    Whether she is advising federal agencies or mentoring a newly diagnosed patient, Lorrinda Gray-Davis is committed to making a difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Journey Highlights */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-6">Journey Highlights</h3>
                <div className="space-y-6">
                  {TIMELINE.map((event, index) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        {index < TIMELINE.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        )}
                      </div>
                      <div className="pb-6">
                        <span className="text-primary font-semibold text-sm">{event.year}</span>
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
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
            Let's Connect
          </h2>
          <p className="text-slate-300 mb-8">
            Interested in having Lorrinda speak at your event or collaborate on advocacy initiatives?
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

export default About;

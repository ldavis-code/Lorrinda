import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Speaking: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Navy Blue */}
      <section className="bg-secondary text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Consulting Services
            </h1>
            <p className="text-lg text-slate-300">
              Strategic guidance to help healthcare organizations center the patient voice and build meaningful engagement programs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Lorrinda Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">Why Work With Lorrinda?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From leading $13 billion in construction projects to navigating a liver transplant and building a nationally recognized peer program, Lorrinda brings a rare combination of executive leadership and lived patient experience. She helps organizations build systems that truly center the patient voice — and shows audiences how to find strength in vulnerability.
            </p>
          </div>

          {/* Consulting Services Grid */}
          <div className="space-y-12">
            {/* Patient Advocacy & Engagement Consulting */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-secondary">Patient Advocacy & Engagement Consulting</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Strategic guidance for transplant centers on building patient engagement programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Patient voice integration for healthcare organizations, committees, and research initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Advisory services for organizations seeking authentic patient perspective in decision-making</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <img
                    src="/images/htg-group.jpg"
                    alt="HTG Group - Patient Advocacy"
                    className="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Peer Support Program Development */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-secondary">Peer Support Program Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Design and implementation of peer mentorship programs for transplant patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Recovery support program development with proven methodology (497+ patients supported, 183 successful transplants, 85% sobriety rate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Compliance tracking systems that demonstrate patient engagement to transplant centers</span>
                </li>
              </ul>
            </div>

            {/* Speaking & Training */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-secondary">Speaking & Training</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Keynote presentations on patient advocacy, resilience, and the power of lived experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Healthcare staff training on patient-centered communication and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Conference presentations and panel participation (Poster of Distinction recipient, AASLD Liver Meeting)</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <img
                    src="/images/gli-meeting.jpg"
                    alt="GLI Meeting - Speaking and Training"
                    className="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Research & Policy Consulting */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-secondary">Research & Policy Consulting</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Patient perspective consultation for clinical trials and research design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Advisory services for pharmaceutical companies and specialty pharmacies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Grant development support for patient-focused initiatives (PCORI and other funding sources)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Co-investigator experience with peer-reviewed publication in Hepatology Communications</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <img
                    src="/images/advocating.jpg"
                    alt="Advocating - Research and Policy"
                    className="w-full md:w-64 h-48 object-cover object-top rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Leadership & Governance */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold mb-6 text-secondary">Leadership & Governance</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <ul className="space-y-4 flex-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Board development and governance consulting for patient-focused organizations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Committee structure and patient representation strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Organizational development for nonprofit healthcare advocacy</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <img
                    src="/images/aasld-transplant.jpg"
                    alt="AASLD Transplant - Leadership and Governance"
                    className="w-full md:w-64 h-48 object-cover object-top rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">
              Let's discuss how Lorrinda can help your organization build meaningful patient engagement and advocacy programs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;

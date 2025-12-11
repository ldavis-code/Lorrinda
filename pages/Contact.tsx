import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const CONTACT_EMAIL = 'contact@lorrindagraydavis.com';

// Formspree form ID - Get yours free at https://formspree.io
// 1. Create account at formspree.io
// 2. Create a new form
// 3. Replace 'YOUR_FORM_ID' with your actual form ID (e.g., 'xpzvqwer')
const FORMSPREE_ID = 'YOUR_FORM_ID';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          eventType: formData.eventType,
          message: formData.message,
          _subject: `Speaking Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormState({ status: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', organization: '', eventType: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'There was an error sending your message. Please try again or email directly.'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-indigo-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-indigo-100">
              Interested in having Lorrinda speak at your event or collaborate
              on an advocacy initiative? Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're planning a corporate event, healthcare conference,
                or community gathering, I'd love to hear about how we can work together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Based In</h3>
                    <p className="text-gray-600">Oklahoma, USA</p>
                    <p className="text-gray-500 text-sm">Available for events nationwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold mb-3">Speaking Inquiry?</h3>
                <p className="text-gray-600 text-sm">
                  Please include details about your event date, audience size,
                  and topic of interest in your message. I typically respond
                  within 2-3 business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {formState.status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="font-serif text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been received. I'll get back to you within 2-3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="Company or Organization Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Inquiry
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      >
                        <option value="">Select an option</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="keynote">Keynote Address</option>
                        <option value="workshop">Workshop or Training</option>
                        <option value="panel">Panel Discussion</option>
                        <option value="media">Media Inquiry</option>
                        <option value="collaboration">Collaboration/Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell me about your event, audience, and what topics you're interested in..."
                      />
                    </div>

                    {formState.status === 'error' && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        <AlertCircle size={18} />
                        <span>{formState.message}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState.status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState.status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

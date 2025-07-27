'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Looking for a skilled React Native developer? Let&apos;s discuss your project and bring your mobile app ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <InfoBlock icon="ri-phone-line" label="Phone" value="+91 6203075626" />
              <InfoBlock icon="ri-mail-line" label="Email" value="dkyadav2905@gmail.com" />
              <InfoBlock icon="ri-map-pin-line" label="Location" value="Gurgaon, Haryana, India" />
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <SocialIcon href="https://linkedin.com/in/dablu" icon="ri-linkedin-fill" bg="from-indigo-600 to-purple-600" />
                <SocialIcon href="https://github.com/dkyadav29" icon="ri-github-fill" bg="from-slate-600 to-slate-800" />
                <SocialIcon href="https://dkportfolio-vert.vercel.app" icon="ri-global-line" bg="from-emerald-600 to-teal-600" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField name="name" label="Full Name" type="text" value={formData.name} onChange={handleChange} />
                <InputField name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} />
                <InputField name="subject" label="Subject" type="text" value={formData.subject} onChange={handleChange} />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="text-right text-sm text-slate-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-emerald-600 text-sm text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm text-center">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Reusable Subcomponents ----------------------- */

function InfoBlock({
  icon,
  label,
  value
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mr-4">
        <i className={`${icon} text-indigo-600 text-xl`} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{label}</h4>
        <p className="text-slate-600">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  bg
}: {
  href: string;
  icon: string;
  bg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${bg} text-white rounded-full hover:brightness-110 transition-all shadow-lg`}
    >
      <i className={`${icon} text-xl`} />
    </a>
  );
}

function InputField({
  name,
  label,
  type,
  value,
  onChange
}: {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
        placeholder={label}
      />
    </div>
  );
}

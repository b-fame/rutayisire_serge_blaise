// pages/Contact.js - All Tailwind, no CSS imports
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'blaisefam5242@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: '✅ Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        });
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: '❌ Oops! Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'blaisefam5242@gmail.com', link: 'mailto:blaisefam5242@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+250 791 642 822', link: 'tel:+250791642822' },
    { icon: '📍', label: 'Location', value: 'Kigali, Rwanda', link: null },
  ];

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/blaise-fame-759820418' },
    { icon: '📸', label: 'Instagram', url: 'https://www.instagram.com/__rutayisire/' },
    { icon: '📘', label: 'Facebook', url: 'https://www.facebook.com/rutayisire250' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/b-fame' },
  ];

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
      <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 border border-white/5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1.5 sm:gap-3 text-blue-200">
          <span>📬</span> Contact Me
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">I'm always open to new opportunities. Let's connect!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-3">{info.icon}</div>
            <div className="text-gray-400 text-[0.5rem] sm:text-xs uppercase tracking-wider">{info.label}</div>
            {info.link ? (
              <a href={info.link} className="text-blue-300 hover:text-blue-100 transition-colors text-[0.6rem] sm:text-sm font-medium break-all">
                {info.value}
              </a>
            ) : (
              <div className="text-white text-[0.6rem] sm:text-sm font-medium">{info.value}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        <div className="md:col-span-3 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-2 sm:mb-4">✉️ Send a Message</h2>
          
          {status.message && (
            <div className={`p-2 sm:p-4 rounded-xl text-center mb-2 sm:mb-4 text-xs sm:text-sm ${
              status.type === 'success' 
                ? 'bg-green-900/20 border border-green-500/30 text-green-300' 
                : 'bg-red-900/20 border border-red-500/30 text-red-300'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
            <div>
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">Your Name *</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">Email *</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="Project Collaboration"
              />
            </div>
            <div>
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows="4"
                className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 sm:py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-xs sm:text-sm md:text-base"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message 🚀'
              )}
            </button>
          </form>
        </div>

        <div className="md:col-span-2 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-2 sm:mb-4">🌐 Connect With Me</h2>
          <div className="space-y-1.5 sm:space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all duration-300 border border-transparent hover:border-blue-500/20 group"
              >
                <span className="text-lg sm:text-2xl">{social.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs sm:text-sm group-hover:text-blue-300 transition-colors">{social.label}</div>
                  <div className="text-gray-500 text-[0.45rem] sm:text-xs truncate">{social.url.replace('https://', '').split('/')[0]}</div>
                </div>
                <span className="text-gray-500 group-hover:text-blue-300 transition-colors text-xs sm:text-base">→</span>
              </a>
            ))}
          </div>

          <div className="mt-3 sm:mt-6 p-2 sm:p-3 bg-blue-900/10 rounded-xl border border-blue-500/10">
            <p className="text-[0.5rem] sm:text-xs text-gray-400 text-center">
              📌 All messages are sent directly to my email. I'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
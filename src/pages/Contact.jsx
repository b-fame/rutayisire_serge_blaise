// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
    <div className="space-y-8">
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5">
        <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-200">
          <span>📬</span> Contact Me
        </h1>
        <p className="text-gray-400 mt-2">I'm always open to new opportunities and collaborations. Let's connect!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info Cards */}
        {contactInfo.map((info, index) => (
          <div key={index} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 text-center">
            <div className="text-4xl mb-3">{info.icon}</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">{info.label}</div>
            {info.link ? (
              <a href={info.link} className="text-blue-300 hover:text-blue-100 transition-colors text-sm font-medium">
                {info.value}
              </a>
            ) : (
              <div className="text-white text-sm font-medium">{info.value}</div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Contact Form */}
        <div className="md:col-span-3 glass-card rounded-2xl p-6 border border-white/5">
          <h2 className="text-xl font-semibold text-white mb-4">✉️ Send a Message</h2>
          
          {submitted ? (
            <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-green-300 text-center">
              ✅ Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#1a2332] border border-[#2d3a4f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message 🚀
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="md:col-span-2 glass-card rounded-2xl p-6 border border-white/5">
          <h2 className="text-xl font-semibold text-white mb-4">🌐 Connect With Me</h2>
          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all duration-300 border border-transparent hover:border-blue-500/20 group"
              >
                <span className="text-2xl">{social.icon}</span>
                <div className="flex-1">
                  <div className="text-white text-sm group-hover:text-blue-300 transition-colors">{social.label}</div>
                  <div className="text-gray-500 text-xs">{social.url.replace('https://', '').split('/')[0]}</div>
                </div>
                <span className="text-gray-500 group-hover:text-blue-300 transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
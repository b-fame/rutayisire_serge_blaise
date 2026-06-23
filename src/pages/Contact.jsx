// pages/Contact.js
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

  // Your EmailJS Configuration from the screenshot
  const EMAILJS_SERVICE_ID = 'service_w9cg69b';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // You need to create a template
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Find this in your EmailJS account

  // WhatsApp Configuration
  const WHATSAPP_PHONE = '250791642822';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

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
    { 
      icon: 'bi-envelope-fill', 
      label: 'Email', 
      value: 'blaisefam5242@gmail.com', 
      link: 'mailto:blaisefam5242@gmail.com',
      color: 'hover:border-blue-400',
      textColor: 'text-blue-400'
    },
    { 
      icon: 'bi-telephone-fill', 
      label: 'Phone', 
      value: '+250 791 642 822', 
      link: 'tel:+250791642822',
      color: 'hover:border-green-400',
      textColor: 'text-green-400'
    },
    { 
      icon: 'bi-whatsapp', 
      label: 'WhatsApp', 
      value: '+250 791 642 822', 
      link: WHATSAPP_URL,
      color: 'hover:border-green-500',
      textColor: 'text-green-400'
    },
    { 
      icon: 'bi-geo-alt-fill', 
      label: 'Location', 
      value: 'Kigali, Rwanda', 
      link: null,
      color: 'hover:border-red-400',
      textColor: 'text-red-400'
    },
  ];

  const socialLinks = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/blaise-fame-759820418', color: 'hover:border-blue-400', textColor: 'text-blue-400' },
    { icon: 'bi-instagram', label: 'Instagram', url: 'https://www.instagram.com/__rutayisire/', color: 'hover:border-pink-500', textColor: 'text-pink-400' },
    { icon: 'bi-facebook', label: 'Facebook', url: 'https://www.facebook.com/rutayisire250', color: 'hover:border-blue-500', textColor: 'text-blue-500' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/b-fame', color: 'hover:border-gray-400', textColor: 'text-gray-400' },
    { icon: 'bi-whatsapp', label: 'WhatsApp', url: WHATSAPP_URL, color: 'hover:border-green-500', textColor: 'text-green-400' },
  ];

  const whatsappTemplates = [
    { 
      label: 'Hi, I\'d like to collaborate on a project', 
      emoji: '💼',
      message: 'Hi Serge Blaise, I found your portfolio and I\'d like to collaborate on a project with you.'
    },
    { 
      label: 'I have a job opportunity', 
      emoji: '💻',
      message: 'Hi Serge Blaise, I came across your portfolio and I have a job opportunity that might interest you.'
    },
    { 
      label: 'I need help with a software project', 
      emoji: '🛠️',
      message: 'Hi Serge Blaise, I need help with a software project. Can we discuss this further?'
    },
    { 
      label: 'I\'d like to discuss a partnership', 
      emoji: '🤝',
      message: 'Hi Serge Blaise, I\'d like to discuss a potential partnership with you.'
    },
  ];

  const openWhatsApp = (message = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 border border-white/5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1.5 sm:gap-3 text-blue-200">
          <i className="bi bi-envelope-paper-fill"></i> Contact Me
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">I'm always open to new opportunities. Let's connect!</p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {contactInfo.map((info, index) => (
          info.link ? (
            <a
              key={index}
              href={info.link}
              target={info.icon === 'bi-whatsapp' ? '_blank' : '_self'}
              rel={info.icon === 'bi-whatsapp' ? 'noopener noreferrer' : ''}
              className={`glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/5 ${info.color} transition-all duration-300 text-center hover:scale-105 group`}
            >
              <i className={`${info.icon} text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 ${info.textColor} group-hover:scale-110 transition-transform`}></i>
              <div className="text-gray-400 text-[0.5rem] sm:text-xs uppercase tracking-wider">{info.label}</div>
              <div className="text-white text-[0.5rem] sm:text-xs md:text-sm font-medium truncate mt-0.5">{info.value}</div>
              {info.icon === 'bi-whatsapp' && (
                <span className="inline-block mt-1 text-[0.4rem] sm:text-[0.5rem] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                  <i className="bi bi-chat-dots me-1"></i>Chat Now
                </span>
              )}
            </a>
          ) : (
            <div key={index} className={`glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/5 ${info.color} transition-all duration-300 text-center`}>
              <i className={`${info.icon} text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 ${info.textColor}`}></i>
              <div className="text-gray-400 text-[0.5rem] sm:text-xs uppercase tracking-wider">{info.label}</div>
              <div className="text-white text-[0.5rem] sm:text-xs md:text-sm font-medium truncate mt-0.5">{info.value}</div>
            </div>
          )
        ))}
      </div>

      {/* WhatsApp Quick Message Templates */}
      <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 hover:border-green-500/20 transition-all duration-300">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white flex items-center gap-2">
            <i className="bi bi-whatsapp text-green-400 text-xl sm:text-2xl"></i>
            Quick WhatsApp Messages
          </h2>
          <span className="text-[0.45rem] sm:text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30">
            <i className="bi bi-clock me-1"></i>Response within minutes
          </span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">Click on any message to start a WhatsApp chat instantly.</p>
        <div className="mt-2 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {whatsappTemplates.map((template, index) => (
            <button
              key={index}
              onClick={() => openWhatsApp(template.message)}
              className="bg-[#1a2332] hover:bg-[#2a3a4f] text-gray-300 hover:text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#2d3a4f] hover:border-green-500/50 transition-all duration-300 text-[0.5rem] sm:text-xs flex items-center gap-1 sm:gap-2 hover:scale-105"
            >
              <span>{template.emoji}</span>
              <span className="hidden sm:inline">{template.label}</span>
              <span className="sm:hidden truncate max-w-[80px]">{template.label}</span>
              <i className="bi bi-whatsapp text-green-400 text-[0.6rem] sm:text-sm"></i>
            </button>
          ))}
        </div>
        <div className="mt-2 sm:mt-3 flex flex-wrap items-center justify-between gap-2 text-[0.45rem] sm:text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            <span>Click any button to open WhatsApp with pre-filled message</span>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium hover:underline"
          >
            <i className="bi bi-box-arrow-up-right me-1"></i>Open WhatsApp
          </a>
        </div>
      </div>

      {/* Main Contact Form and Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {/* Contact Form */}
        <div className="md:col-span-3 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-2 sm:mb-4">
            <i className="bi bi-send-fill me-2"></i>Send a Message
          </h2>
          
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
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">
                <i className="bi bi-person-fill me-1"></i>Your Name *
              </label>
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
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">
                <i className="bi bi-envelope-fill me-1"></i>Email *
              </label>
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
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">
                <i className="bi bi-tag-fill me-1"></i>Subject *
              </label>
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
              <label className="text-gray-400 text-[0.55rem] sm:text-sm block mb-0.5 sm:mb-1">
                <i className="bi bi-chat-text-fill me-1"></i>Message *
              </label>
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
                  <span className="animate-spin inline-block w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </span>
              ) : (
                <span><i className="bi bi-send-fill me-2"></i>Send Message</span>
              )}
            </button>
          </form>

          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-900/10 rounded-xl border border-green-500/10">
            <p className="text-[0.5rem] sm:text-xs text-gray-400 text-center">
              <i className="bi bi-whatsapp text-green-400 me-1"></i>
              Or chat with me directly on WhatsApp: 
              <a 
                href={WHATSAPP_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 ml-1 font-medium hover:underline"
              >
                +250 791 642 822
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="md:col-span-2 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white mb-2 sm:mb-4">
            <i className="bi bi-share-fill me-2"></i>Connect With Me
          </h2>
          <div className="space-y-1.5 sm:space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all duration-300 border border-transparent ${social.color} group`}
              >
                <i className={`${social.icon} text-lg sm:text-2xl ${social.textColor}`}></i>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs sm:text-sm group-hover:text-blue-300 transition-colors">{social.label}</div>
                  <div className="text-gray-500 text-[0.45rem] sm:text-xs truncate">{social.url.replace('https://', '').split('/')[0]}</div>
                </div>
                <i className="bi bi-arrow-right text-gray-500 group-hover:text-blue-300 transition-colors text-xs sm:text-base"></i>
              </a>
            ))}
          </div>

          <div className="mt-3 sm:mt-6 p-2 sm:p-3 bg-blue-900/10 rounded-xl border border-blue-500/10">
            <p className="text-[0.5rem] sm:text-xs text-gray-400 text-center">
              <i className="bi bi-pin me-1"></i>All messages are sent directly to my email. I'll respond within 24 hours.
            </p>
          </div>

          {/* WhatsApp Floating Button */}
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.5rem] sm:text-xs text-gray-300">
                  <i className="bi bi-whatsapp text-green-400 me-1"></i>
                  Need a quick response?
                </p>
                <p className="text-[0.4rem] sm:text-[0.5rem] text-gray-500">Available on WhatsApp</p>
              </div>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Serge Blaise, I found your portfolio and would like to connect!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.5rem] sm:text-xs font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
              >
                <i className="bi bi-whatsapp"></i>
                <span>Chat Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
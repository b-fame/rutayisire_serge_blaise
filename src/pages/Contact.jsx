import { useState } from 'react';
import portfolio from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SocialIcon from '../components/SocialIcon';

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID || '';
const WHATSAPP_PHONE = process.env.REACT_APP_WHATSAPP_PHONE;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.user_email,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = (message = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    { icon: 'bi-envelope-fill', label: 'Email', value: portfolio.personal.email, link: `mailto:${portfolio.personal.email}`, color: 'hover:border-blue-400', textColor: 'text-blue-400' },
    { icon: 'bi-telephone-fill', label: 'Phone', value: portfolio.personal.phone, link: `tel:${portfolio.personal.phone}`, color: 'hover:border-green-400', textColor: 'text-green-400' },
    { icon: 'bi-whatsapp', label: 'WhatsApp', value: portfolio.personal.phone, link: WHATSAPP_URL, color: 'hover:border-green-500', textColor: 'text-green-400' },
    { icon: 'bi-geo-alt-fill', label: 'Location', value: portfolio.personal.location, link: null, color: 'hover:border-red-400', textColor: 'text-red-400' },
  ];

  const whatsappTemplates = [
    { label: "Collaborate on a project", emoji: '💼', message: "Hi Serge Blaise, I found your portfolio and I'd like to collaborate on a project with you." },
    { label: 'Job opportunity', emoji: '💻', message: 'Hi Serge Blaise, I came across your portfolio and I have a job opportunity that might interest you.' },
    { label: 'Software project help', emoji: '🛠️', message: 'Hi Serge Blaise, I need help with a software project. Can we discuss this further?' },
    { label: 'Partnership discussion', emoji: '🤝', message: "Hi Serge Blaise, I'd like to discuss a potential partnership with you." },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      <SectionReveal>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
            <i className="bi bi-envelope-paper-fill text-blue-400" /> Contact Me
          </h1>
          <p className="mt-2 text-gray-400">I'm always open to new opportunities. Let's connect!</p>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, i) => {
            const Wrapper = item.link ? 'a' : 'div';
            const wrapperProps = item.link
              ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`group rounded-2xl border border-white/10 bg-gray-800/80 p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${item.color}`}
              >
                <i className={`bi ${item.icon} text-2xl ${item.textColor}`} />
                <h3 className="mt-2 text-sm text-gray-400">{item.label}</h3>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </Wrapper>
            );
          })}
        </div>
      </SectionReveal>

      <SectionReveal delay={200}>
        <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <i className="bi bi-lightning-charge text-yellow-400" /> Quick WhatsApp Messages
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatsappTemplates.map((tmpl, i) => (
              <button
                key={i}
                onClick={() => openWhatsApp(tmpl.message)}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-gray-700/30 p-4 text-left transition-all duration-200 hover:border-green-500/20 hover:bg-green-500/5"
              >
                <span className="text-2xl">{tmpl.emoji}</span>
                <span className="text-sm text-gray-300">{tmpl.label}</span>
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl md:col-span-3 sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-white">Send a Message</h2>

            {status.message && (
              <div
                className={`mb-4 rounded-xl border p-4 text-sm ${
                  status.type === 'success'
                    ? 'border-green-500/20 bg-green-500/10 text-green-400'
                    : 'border-red-500/20 bg-red-500/10 text-red-400'
                }`}
              >
                <i
                  className={`bi ${
                    status.type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill'
                  } me-2`}
                />
                {status.message}
              </div>
            )}

            {!FORMSPREE_ID ? (
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center">
                <i className="bi bi-gear-fill mb-3 text-3xl text-yellow-400" />
                <p className="text-sm text-yellow-300">Contact form is being configured. Please email me directly or use WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-blue-500/40 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4 md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
              <h2 className="mb-4 text-xl font-bold text-white">Social Links</h2>
              <div className="space-y-3">
                {portfolio.social.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-gray-700/30 p-3 transition-all duration-200 hover:border-blue-500/20 hover:bg-gray-700/50"
                  >
                    <SocialIcon url={link.url} icon={link.icon} label={link.platform} size="sm" />
                    <span className="text-sm text-gray-300">{link.platform}</span>
                    <span className="ml-auto text-xs text-gray-500">{link.username}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center backdrop-blur-xl transition-all duration-200 hover:bg-green-500/20"
            >
              <i className="bi bi-whatsapp text-xl text-green-400" />
              <span className="font-medium text-green-400">Chat Now on WhatsApp</span>
            </a>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Contact;

import portfolio from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700/50 bg-gray-800/80 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-bold">
              <span className="text-blue-400">B</span>
              <span className="text-gray-900 dark:text-white">FAME</span>
            </h3>
            <p className="text-sm text-gray-400">
              Full-Stack Developer &amp; AI Enthusiast
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {portfolio.navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h4>
            <div className="flex gap-3">
              {portfolio.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 bg-gray-700/50 text-gray-400 transition-all duration-200 hover:border-blue-500 hover:text-blue-400"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700/50 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {portfolio.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

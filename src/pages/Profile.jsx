import portfolio from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';

const platformColors = {
  GitHub: { border: 'hover:border-gray-400', text: 'text-gray-300' },
  LinkedIn: { border: 'hover:border-blue-500', text: 'text-blue-400' },
  Instagram: { border: 'hover:border-pink-500', text: 'text-pink-400' },
  Facebook: { border: 'hover:border-blue-400', text: 'text-blue-400' },
};

const Profile = () => {
  const githubProfile = portfolio.social.find((s) => s.platform === 'GitHub');

  return (
    <div className="space-y-6 lg:space-y-8">
      <SectionReveal>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
            <i className="bi bi-globe2 text-blue-400" /> My Profiles
          </h1>
          <p className="mt-2 text-gray-400">Find me across the web.</p>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {portfolio.social.map((profile, i) => {
            const colors = platformColors[profile.platform] || platformColors.GitHub;
            return (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${colors.border}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-700/50 text-2xl transition-colors group-hover:bg-gray-700">
                  <i className={`bi ${profile.icon} ${colors.text}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{profile.platform}</h3>
                  <p className="text-sm text-gray-400">{profile.username}</p>
                </div>
                <span className="text-sm text-gray-500 transition-colors group-hover:text-blue-400">
                  Visit <i className="bi bi-arrow-right" />
                </span>
              </a>
            );
          })}
        </div>
      </SectionReveal>

      <SectionReveal delay={200}>
        <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">Direct Contact Info</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 text-sm text-blue-400 transition-all duration-200 hover:bg-blue-500/20"
            >
              <i className="bi bi-envelope-fill" /> {portfolio.personal.email}
            </a>
            <a
              href={`tel:${portfolio.personal.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2.5 text-sm text-green-400 transition-all duration-200 hover:bg-green-500/20"
            >
              <i className="bi bi-telephone-fill" /> {portfolio.personal.phone}
            </a>
          </div>
        </div>
      </SectionReveal>

      {githubProfile && (
        <SectionReveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-700/50 text-2xl text-gray-300">
                  <i className="bi bi-github" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">GitHub Profile</h2>
                  <p className="text-sm text-gray-400">github.com/{githubProfile.username}</p>
                </div>
              </div>
              <a
                href={githubProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:brightness-110"
              >
                <i className="bi bi-box-arrow-up-right" /> View my repositories
              </a>
            </div>
          </div>
        </SectionReveal>
      )}
    </div>
  );
};

export default Profile;

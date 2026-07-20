import portfolio from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SkillBadge from '../components/SkillBadge';

const skillLabels = ['Read', 'Speak', 'Write', 'Understand'];

const About = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      <SectionReveal>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
            <i className="bi bi-person-fill text-blue-400" /> About Me
          </h1>
          <p className="mt-2 text-gray-400">
            Get to know more about who I am and what drives me.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl lg:col-span-2 sm:p-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
              <i className="bi bi-hand-wave text-yellow-400" /> Who I Am
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <p>
                I'm <span className="font-medium text-blue-400">{portfolio.personal.name}</span>, a
                passionate Software Engineering student at ULK Kigali with a strong foundation in
                full-stack development. I specialize in building scalable, user-friendly applications
                using modern technologies.
              </p>
              <p>
                My journey in tech started during my A-Level studies in Software Development at
                Lycée Saint Alexandre Sauli de Muhura, where I developed a deep interest in full-stack
                web development. Since then, I've been driven by the desire to create solutions that
                make a real difference.
              </p>
              <p>
                I believe in writing clean, efficient code and creating solutions that make a
                difference. Every project is an opportunity to learn something new and push the
                boundaries of what's possible with technology.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
              <i className="bi bi-bullseye text-purple-400" /> Quick Facts
            </h2>
            <div className="space-y-3">
              {portfolio.quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-gray-700/30 p-3"
                >
                  <i className={`bi ${fact.icon} text-xl ${fact.color}`} />
                  <div>
                    <div className="text-xs text-gray-400">{fact.label}</div>
                    <div className="text-sm text-white">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={200}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
            <i className="bi bi-mortarboard text-blue-400" /> Education Journey
          </h2>
          <div className="relative ml-4 border-l-2 border-gray-700 pl-8">
            {portfolio.education.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-900 text-blue-400">
                  <i className={`bi ${item.icon} text-sm`} />
                </span>
                <div className="rounded-xl bg-gray-700/30 p-4">
                  <span className="text-xs font-medium text-gray-400">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold text-blue-400">{item.school}</h3>
                  <p className="text-sm text-gray-300">{item.program}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
            <i className="bi bi-translate text-green-400" /> Languages
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {portfolio.languages.map((lang, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-gray-700/30 p-5"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">{lang.name}</h3>
                <div className="grid grid-cols-4 gap-2">
                  {skillLabels.map((label, j) => {
                    const score = lang.scores[j];
                    const colors = [
                      'bg-red-500/20 text-red-400',
                      'bg-orange-500/20 text-orange-400',
                      'bg-yellow-500/20 text-yellow-400',
                      'bg-blue-500/20 text-blue-400',
                      'bg-green-500/20 text-green-400',
                    ];
                    return (
                      <div key={j} className="text-center">
                        <div
                          className={`mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${colors[score - 1] || colors[0]}`}
                        >
                          {score}
                        </div>
                        <span className="text-[10px] text-gray-400">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={200}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
            <i className="bi bi-rocket-takeoff text-purple-400" /> My Mission
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">{portfolio.personal.mission}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Learning', 'Innovation', 'Collaboration', 'Excellence'].map((v, i) => (
              <SkillBadge key={i} name={v} variant="green" />
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
            <i className="bi bi-people text-blue-400" /> Referees
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {portfolio.referees.map((ref, i) => (
              <div
                key={i}
                className="rounded-xl border border-l-4 border-l-blue-500 border-white/5 bg-gray-700/30 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{ref.name}</h3>
                <p className="text-sm text-blue-400">{ref.role}</p>
                <p className="text-sm text-gray-400">{ref.institution}</p>
                <a
                  href={`tel:${ref.phone}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-blue-400"
                >
                  <i className="bi bi-telephone" /> {ref.phone}
                </a>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  );
};

export default About;

// pages/Profile.js
import React from 'react';

const Profile = () => {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      username: 'Blaise Fame',
      url: 'https://www.linkedin.com/in/blaise-fame-759820418',
      icon: '💼',
      color: 'hover:border-blue-400'
    },
    {
      platform: 'Instagram',
      username: '@__rutayisire',
      url: 'https://www.instagram.com/__rutayisire/',
      icon: '📸',
      color: 'hover:border-pink-500'
    },
    {
      platform: 'Facebook',
      username: 'rutayisire250',
      url: 'https://www.facebook.com/rutayisire250',
      icon: '📘',
      color: 'hover:border-blue-500'
    },
    {
      platform: 'GitHub',
      username: 'b-fame',
      url: 'https://github.com/b-fame',
      icon: '🐙',
      color: 'hover:border-gray-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5">
        <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-200">
          <span>🌐</span> My Profiles
        </h1>
        <p className="text-gray-400 mt-2">Connect with me on social media and professional platforms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`glass-card rounded-2xl p-6 border border-white/5 ${link.color} transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a2332] group`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{link.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">{link.platform}</h2>
                <p className="text-gray-400 text-sm">{link.username}</p>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 mt-1 opacity-70 group-hover:opacity-100">
                  Visit Profile <span>→</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6 border border-white/5 mt-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-purple-200"><span>📧</span> Direct Contact</h2>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-2 bg-[#1f2a3a] px-4 py-2 rounded-full border border-[#2d3a4f]">
            <span>✉️</span> blaisefam5242@gmail.com
          </span>
          <span className="flex items-center gap-2 bg-[#1f2a3a] px-4 py-2 rounded-full border border-[#2d3a4f]">
            <span>📞</span> (+250) 791642822
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
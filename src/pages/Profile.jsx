// pages/Profile.js
import React from 'react';

const Profile = () => {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      username: 'Blaise Fame',
      url: 'https://www.linkedin.com/in/blaise-fame-759820418',
      icon: 'bi-linkedin',
      color: 'hover:border-blue-400'
    },
    {
      platform: 'Instagram',
      username: '@__rutayisire',
      url: 'https://www.instagram.com/__rutayisire/',
      icon: 'bi-instagram',
      color: 'hover:border-pink-500'
    },
    {
      platform: 'Facebook',
      username: 'rutayisire250',
      url: 'https://www.facebook.com/rutayisire250',
      icon: 'bi-facebook',
      color: 'hover:border-blue-500'
    },
    {
      platform: 'GitHub',
      username: 'b-fame',
      url: 'https://github.com/b-fame',
      icon: 'bi-github',
      color: 'hover:border-gray-400'
    }
  ];

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
      <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 border border-white/5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1.5 sm:gap-3 text-blue-200">
          <i className="bi bi-globe2"></i> My Profiles
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">Connect with me on social media.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 ${link.color} transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a2332] group`}
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <i className={`${link.icon} text-2xl sm:text-3xl md:text-4xl text-blue-400`}></i>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm sm:text-base md:text-xl font-semibold text-white group-hover:text-blue-200 transition-colors break-words">{link.platform}</h2>
                <p className="text-gray-400 text-xs sm:text-sm truncate">{link.username}</p>
                <span className="inline-flex items-center gap-1 text-[0.5rem] sm:text-xs text-blue-400 mt-0.5 opacity-70 group-hover:opacity-100">
                  Visit <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 mt-2 sm:mt-4">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-1.5 sm:gap-2 text-purple-200">
          <i className="bi bi-envelope-fill"></i> Direct Contact
        </h2>
        <div className="mt-1.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-3 text-xs sm:text-sm">
          <span className="flex items-center gap-1 sm:gap-2 bg-[#1f2a3a] px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-[#2d3a4f]">
            <i className="bi bi-envelope-fill"></i> <span className="break-all">blaisefam5242@gmail.com</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2 bg-[#1f2a3a] px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-[#2d3a4f]">
            <i className="bi bi-telephone-fill"></i> (+250) 791642822
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
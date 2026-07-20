const portfolio = {
  personal: {
    name: 'RUTAYISIRE SERGE BLAISE',
    shortName: 'BFAME',
    title: 'Software Engineer',
    tagline: 'Building innovative solutions with clean code and modern tech',
    email: 'blaisefam5242@gmail.com',
    phone: '+250791642822',
    location: 'Kigali, Rwanda',
    nationality: 'Rwandan',
    birthDate: '2006-09-24',
    bio: "I'm a passionate Software Engineering student at ULK Kigali with a strong foundation in full-stack development. I specialize in building scalable, user-friendly applications using modern technologies. My journey in tech started during my A-Level studies, and since then I've been driven by the desire to create solutions that make a real difference.",
    mission: 'To leverage my skills in software development to create innovative solutions that solve real-world problems.',
  },

  social: [
    { platform: 'GitHub', username: 'b-fame', url: 'https://github.com/b-fame', icon: 'bi-github' },
    { platform: 'LinkedIn', username: 'Blaise Fame', url: 'https://www.linkedin.com/in/blaise-fame-759820418', icon: 'bi-linkedin' },
    { platform: 'Instagram', username: '@__rutayisire', url: 'https://www.instagram.com/__rutayisire/', icon: 'bi-instagram' },
    { platform: 'Facebook', username: 'rutayisire250', url: 'https://www.facebook.com/rutayisire250', icon: 'bi-facebook' },
  ],

  navLinks: [
    { to: '/', label: 'Home', icon: 'bi-house-fill' },
    { to: '/about', label: 'About', icon: 'bi-person-fill' },
    { to: '/projects', label: 'Projects', icon: 'bi-folder-fill' },
    { to: '/profile', label: 'Profiles', icon: 'bi-globe2' },
    { to: '/contact', label: 'Contact', icon: 'bi-envelope-fill' },
  ],

  education: [
    { year: '2026 – 2030', school: 'ULK Kigali', program: 'Software Engineering', icon: 'bi-building' },
    { year: '2023 – 2025', school: 'Lycée Saint Alexandre Sauli de Muhura', program: 'Software Development', icon: 'bi-book' },
    { year: '2019 – 2022', school: 'Saint Matthews, Rusizi District', program: 'O-Level', icon: 'bi-journal-bookmark' },
    { year: '2012 – 2018', school: 'EP Mururu, Rusizi', program: 'Primary Certificate', icon: 'bi-pencil' },
  ],

  languages: [
    { name: 'English', scores: [5, 5, 5, 5] },
    { name: 'French', scores: [2, 2, 2, 3] },
    { name: 'Kinyarwanda', scores: [5, 5, 5, 5] },
  ],

  skills: {
    technical: [
      { name: 'JavaScript', icon: 'bi-filetype-js' },
      { name: 'TypeScript', icon: 'bi-filetype-ts' },
      { name: 'React', icon: 'bi-react' },
      { name: 'Next.js', icon: 'bi-hexagon-fill' },
      { name: 'Node.js', icon: 'bi-server' },
      { name: 'Express.js', icon: 'bi-hdd-network' },
      { name: 'Tailwind CSS', icon: 'bi-wind' },
      { name: 'MySQL', icon: 'bi-database' },
      { name: 'MongoDB', icon: 'bi-leaf' },
      { name: 'REST APIs', icon: 'bi-plug' },
      { name: 'Git & GitHub', icon: 'bi-git' },
      { name: 'Python', icon: 'bi-filetype-py' },
      { name: 'PHP', icon: 'bi-filetype-php' },
      { name: 'C++', icon: 'bi-filetype-cpp' },
      { name: 'Dart', icon: 'bi-filetype-dart' },
      { name: 'Flutter', icon: 'bi-phone' },
      { name: 'Laravel', icon: 'bi-layers' },
      { name: 'HTML/CSS', icon: 'bi-filetype-html' },
    ],
    ai: [
      { name: 'AI Integration', icon: 'bi-robot' },
      { name: 'Prompt Engineering', icon: 'bi-bullseye' },
      { name: 'LLM Optimization', icon: 'bi-lightning' },
      { name: 'Chatbot Development', icon: 'bi-chat-dots' },
    ],
    soft: [
      { name: 'Team Leadership', icon: 'bi-people-fill' },
      { name: 'Communication', icon: 'bi-chat-text-fill' },
      { name: 'Time Management', icon: 'bi-clock-fill' },
      { name: 'Problem Solving', icon: 'bi-lightbulb-fill' },
    ],
    tools: [
      { name: 'VS Code', icon: 'bi-file-code' },
      { name: 'Figma', icon: 'bi-figma' },
      { name: 'Photoshop', icon: 'bi-brush' },
      { name: 'XAMPP', icon: 'bi-database' },
      { name: 'Android Studio', icon: 'bi-phone' },
    ],
  },

  services: [
    { title: 'Web Development', description: 'Full-stack web applications using React, Next.js, Node.js, and modern databases.', icon: 'bi-laptop' },
    { title: 'Mobile Development', description: 'Cross-platform mobile apps with Flutter and React Native.', icon: 'bi-phone' },
    { title: 'AI Integration', description: 'Integrating AI capabilities into applications using LLMs and prompt engineering.', icon: 'bi-robot' },
    { title: 'UI/UX Design', description: 'Creating intuitive, responsive, and visually appealing user interfaces.', icon: 'bi-palette' },
  ],

  projects: [
    {
      title: 'Car Wash Bay Payments',
      description: 'Full-stack application for managing car wash bay operations with payment processing and report generation.',
      github: 'https://github.com/b-fame/car-wash-bay-payements',
      demo: null,
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      features: ['Payment Processing', 'Report Generation', 'Real-time Dashboard'],
      status: 'Public',
      image: '/images/project-carwash.jpg',
      icon: 'bi-droplet-fill',
      iconColor: 'text-cyan-400',
      iconBg: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Ride Nation',
      description: 'A ride-hailing platform connecting drivers and passengers with seamless ride booking and tracking.',
      github: 'https://github.com/b-fame/ride-nation',
      demo: null,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Real-time Tracking', 'Ride Matching', 'In-app Chat'],
      status: 'Private',
      image: '/images/project-ridenation.jpg',
      icon: 'bi-car-front-fill',
      iconColor: 'text-purple-400',
      iconBg: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'School Management System',
      description: 'Full-stack web application for managing school departments, books, projects, and committees.',
      github: 'https://github.com/b-fame/school-management-system-in-react-node-js-and-express-js',
      demo: null,
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
      features: ['Department Management', 'Book Library', 'Committee System'],
      status: 'Public',
      image: '/images/project-school.jpg',
      icon: 'bi-book-fill',
      iconColor: 'text-green-400',
      iconBg: 'from-green-500/20 to-emerald-500/20',
    },
  ],

  stats: [
    { label: 'Programming Languages', value: 10, icon: 'bi-code-square' },
    { label: 'Frameworks & Libraries', value: 9, icon: 'bi-layers' },
    { label: 'AI Skills', value: 4, icon: 'bi-robot' },
    { label: 'Projects Completed', value: 3, icon: 'bi-folder-check' },
  ],

  referees: [
    { name: 'TUYISENGE Ernest', role: 'Teacher', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+250782392783' },
    { name: 'UWIDUHAYE Olivier', role: 'Patron', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+25070652125' },
  ],

  quickFacts: [
    { label: 'Location', value: 'Kigali, Rwanda', icon: 'bi-geo-alt-fill', color: 'text-red-400' },
    { label: 'Education', value: 'Software Engineering', icon: 'bi-mortarboard-fill', color: 'text-blue-400' },
    { label: 'Status', value: 'Available for opportunities', icon: 'bi-briefcase-fill', color: 'text-green-400' },
    { label: 'Interests', value: 'Web Dev, AI, Cybersecurity', icon: 'bi-lightbulb-fill', color: 'text-yellow-400' },
  ],
};

export default portfolio;

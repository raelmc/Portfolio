// Portfolio Data - Easy to customize!

const portfolioData = {
  // Your personal info
  profile: {
    name: 'Rael',
    title: 'Young Developer & Coder',
    bio: 'A 14 year old developer from Germany passionate about web development',
    email: 'contact@example.com',
    github: 'https://github.com/raelmc',
  },

  // Skills - Add or remove as needed
  skills: [
    { id: 1, name: 'HTML', emoji: '🏗️', description: 'Web structure' },
    { id: 2, name: 'CSS', emoji: '🎨', description: 'Web styling' },
    { id: 3, name: 'JavaScript', emoji: '⚡', description: 'Interactivity' },
    { id: 4, name: 'TypeScript', emoji: '📘', description: 'Typed JS' },
    { id: 5, name: 'Git', emoji: '🔧', description: 'Version control' },
    { id: 6, name: 'Responsive Design', emoji: '📱', description: 'Mobile first' },
  ],

  // Projects - Add or remove as needed
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my skills and projects',
      emoji: '💼',
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { text: 'Live', url: '#' },
        { text: 'GitHub', url: 'https://github.com/raelmc/Portfolio' }
      ]
    },
    {
      id: 2,
      title: 'Web Portfolio',
      description: 'Another version of my web portfolio with different design',
      emoji: '🌐',
      tags: ['HTML', 'CSS'],
      links: [
        { text: 'GitHub', url: 'https://github.com/raelmc/web-portfolio' }
      ]
    },
    {
      id: 3,
      title: 'My First Project',
      description: 'A simple project to learn web development basics',
      emoji: '🚀',
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { text: 'GitHub', url: '#' }
      ]
    },
    // Add more projects here following the same format:
    // {
    //   id: 4,
    //   title: 'Project Name',
    //   description: 'What your project does',
    //   emoji: '😊',
    //   tags: ['Tech1', 'Tech2'],
    //   links: [
    //     { text: 'Live', url: 'https://...' },
    //     { text: 'GitHub', url: 'https://...' }
    //   ]
    // }
  ]
};

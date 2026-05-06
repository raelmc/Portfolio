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
  // image: 'logos/filename.png' - point to your logo file in the logos/ folder
  skills: [
    { 
      id: 1, 
      name: 'HTML', 
      image: 'logos/html.png', 
      description: 'Web structure' 
    },
    { 
      id: 2, 
      name: 'CSS', 
      image: 'logos/css.png', 
      description: 'Web styling' 
    },
    { 
      id: 3, 
      name: 'JavaScript', 
      image: 'logos/javascript.png', 
      description: 'Interactivity' 
    },
    { 
      id: 4, 
      name: 'TypeScript', 
      image: 'logos/typescript.png', 
      description: 'Typed JS' 
    },
    { 
      id: 5, 
      name: 'Git', 
      image: 'logos/git.png', 
      description: 'Version control' 
    },
    { 
      id: 6, 
      name: 'Responsive Design', 
      image: 'logos/responsive.png', 
      description: 'Mobile first' 
    },
  ],

  // Projects - Add or remove as needed
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my skills and projects',
      image: 'logos/html.png',
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
      image: 'logos/css.png',
      tags: ['HTML', 'CSS'],
      links: [
        { text: 'GitHub', url: 'https://github.com/raelmc/web-portfolio' }
      ]
    },
    {
      id: 3,
      title: 'My First Project',
      description: 'A simple project to learn web development basics',
      image: 'logos/javascript.png',
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
    //   image: 'logos/filename.png',  // Point to your logo/image file
    //   tags: ['Tech1', 'Tech2'],
    //   links: [
    //     { text: 'Live', url: 'https://...' },
    //     { text: 'GitHub', url: 'https://...' }
    //   ]
    // }
  ]
};

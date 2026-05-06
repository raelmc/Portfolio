# Rael's Portfolio Website

A modern, fully responsive portfolio website built with HTML, CSS, and JavaScript. Easy to customize and add your own projects and skills!

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── styles/
│   └── style.css          # All styling and animations
├── js/
│   ├── data.js            # Your portfolio data (easy to edit!)
│   └── script.js          # Rendering and functionality
└── README.md              # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. **Edit `js/data.js`** to customize your portfolio

## ✏️ How to Customize

### Update Your Profile

Open `js/data.js` and update the `profile` section:

```javascript
profile: {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
}
```

### Add Skills

Add to the `skills` array in `js/data.js`:

```javascript
{ 
  id: 7, 
  name: 'React', 
  emoji: '⚛️', 
  description: 'Frontend framework' 
}
```

### Add Projects

Add to the `projects` array in `js/data.js`:

```javascript
{
  id: 4,
  title: 'My Awesome Project',
  description: 'What this project does',
  emoji: '🎯',
  tags: ['HTML', 'CSS', 'JavaScript'],
  links: [
    { text: 'Live', url: 'https://...' },
    { text: 'GitHub', url: 'https://...' }
  ]
}
```

## 🎨 Customizing Colors

Edit the CSS variables in `styles/style.css`:

```css
:root {
  --primary-color: #007acc;
  --secondary-color: #0098ff;
  --dark-bg: #1e1e1e;
  --light-bg: #fdfdfd;
  --text-dark: #333;
  --text-light: #666;
}
```

## 📱 Features

- ✅ **Fully Responsive** - Works on desktop, tablet, and mobile
- ✅ **Modern Design** - Clean, professional look
- ✅ **Smooth Animations** - Professional fade-in and slide-up effects
- ✅ **Easy Customization** - Just edit `data.js`
- ✅ **No Dependencies** - Pure HTML, CSS, and JavaScript
- ✅ **Fast Loading** - Lightweight and optimized

## 🎯 Sections

1. **Hero** - Eye-catching introduction
2. **About** - Tell your story
3. **Skills** - Display your technical skills with emojis
4. **Projects** - Showcase your work with descriptions and links
5. **Contact** - Links to your social profiles

## 🌐 Deploying Your Portfolio

### GitHub Pages (Free!)

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/Portfolio`

### Other Options

- **Netlify** - Drag and drop deployment
- **Vercel** - Zero-config deployment
- **Firebase Hosting** - Google's hosting solution

## 📝 Tips & Tricks

- Use emojis to make your portfolio more visual and fun
- Keep project descriptions short and sweet (1-2 sentences)
- Add relevant links to GitHub repos, live demos, or project pages
- Update your portfolio regularly with new projects
- Use colors that represent your personal brand

## 🎨 Emoji Ideas for Projects

- 💼 Business/Professional
- 🎮 Games
- 🌐 Web Apps
- 📱 Mobile Apps
- 🎨 Design Projects
- 📊 Data/Analytics
- 🤖 AI/ML Projects
- 🎵 Music/Audio
- 📸 Photography/Media

## ✨ Want More Features?

Consider adding:
- Dark mode toggle
- Blog section
- Contact form
- Timeline/experience section
- Testimonials
- Downloads (resume, etc.)

## 📄 License

MIT License - Feel free to use this for your portfolio!

## 🤝 Contributing

If you have improvements, feel free to create a pull request!

---

**Happy coding!** 🚀

Last updated: 2026

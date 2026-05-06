// Portfolio Script - Renders data from data.js with typewriter animation

// Typewriter animation configuration
const typingSpeed = 100; // milliseconds per character
let typewriterIndex = 0;
let isTypewriterComplete = false;

document.addEventListener('DOMContentLoaded', function() {
  // Start typewriter animation for name
  startTypewriterAnimation();
  
  // Render skills
  renderSkills();
  
  // Render projects
  renderProjects();
  
  // Show main content with animation
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');
  main.classList.add('slide-in');
});

// Typewriter Animation Function
function startTypewriterAnimation() {
  const typewriterElement = document.getElementById('typewriter-text');
  const subtitleElement = document.getElementById('hero-subtitle');
  const fullName = portfolioData.profile.name;
  
  if (!typewriterElement) return;
  
  // Clear and add cursor
  typewriterElement.innerHTML = '';
  
  function typeCharacter() {
    if (typewriterIndex < fullName.length) {
      typewriterElement.textContent += fullName[typewriterIndex];
      typewriterIndex++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      // Animation complete, show subtitle
      isTypewriterComplete = true;
      if (subtitleElement) {
        subtitleElement.textContent = portfolioData.profile.title;
        subtitleElement.style.animation = 'fadeIn 0.8s ease';
      }
      // Keep cursor blinking
      typewriterElement.innerHTML += '<span class="cursor"></span>';
    }
  }
  
  typeCharacter();
}

// Render Skills Section with Logo Support
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer || !portfolioData.skills) return;
  
  skillsContainer.innerHTML = portfolioData.skills.map(skill => {
    const logoImg = skill.image ? `
      <img src="${skill.image}" alt="${skill.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <div class="logo-placeholder" style="display:none;">${skill.name.charAt(0).toUpperCase()}</div>
    ` : `<div class="logo-placeholder">${skill.name.charAt(0).toUpperCase()}</div>`;
    
    return `
      <div class="skill-card">
        <div class="logo-container">
          ${logoImg}
        </div>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
    `;
  }).join('');
}

// Render Projects Section with Logo Support
function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer || !portfolioData.projects) return;
  
  projectsContainer.innerHTML = portfolioData.projects.map(project => {
    const projectImageHTML = project.image ? `
      <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <div class="placeholder" style="display:none;">${project.title.charAt(0).toUpperCase()}</div>
    ` : `<div class="placeholder">${project.title.charAt(0).toUpperCase()}</div>`;
    
    return `
      <div class="project-card">
        <div class="project-image">
          ${projectImageHTML}
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.links.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add animation on scroll - Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all project and skill cards after rendering
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
      observer.observe(card);
    });
  }, 100);
});

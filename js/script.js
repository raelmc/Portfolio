// Portfolio Script - Renders data from data.js

document.addEventListener('DOMContentLoaded', function() {
  // Render skills
  renderSkills();
  
  // Render projects
  renderProjects();
  
  // Show main content with animation
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');
  main.classList.add('slide-in');
});

// Render Skills Section
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer || !portfolioData.skills) return;
  
  skillsContainer.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="emoji">${skill.emoji}</div>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    </div>
  `).join('');
}

// Render Projects Section
function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer || !portfolioData.projects) return;
  
  projectsContainer.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image">${project.emoji}</div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.map(link => `
            <a href="${link.url}" target="_blank">${link.text}</a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
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

// Add animation on scroll
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

// Observe all project and skill cards
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
      observer.observe(card);
    });
  }, 100);
});

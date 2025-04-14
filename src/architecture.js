// architecture.js

document.getElementById('arch-link')?.addEventListener('click', (e) => {
    e.preventDefault();
  
    // Only run if architecture section isn't already active
    if (!document.getElementById('architecture-section')) {
      // Hide all existing sections
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => sec.style.display = 'none');
  
      // Create the architecture section dynamically
      const archSection = document.createElement('section');
      archSection.id = 'architecture-section';
      archSection.className = 'content-section';
      archSection.style.padding = '60px 40px';
      archSection.style.backgroundColor = '#fff';
      archSection.style.display = 'block';
  
      archSection.innerHTML = `
        <h3 class="section-title">Architecture Projects</h3>
        <p style="text-align: center; max-width: 700px; margin: 0 auto;">
          A curated showcase of our most compelling architectural work — from contemporary residential homes to civic landmarks designed with sustainability and context in mind.
        </p>
        <div class="ourwork-gallery" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" alt="Project 1" />
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" alt="Project 2" />
          <img src="https://images.unsplash.com/photo-1529429611273-4a5b7f5e7481?auto=format&fit=crop&w=600&q=80" alt="Project 3" />
        </div>
      `;
  
      document.body.insertBefore(archSection, document.querySelector('footer'));
    }
  });
  
  // Restore default sections when any non-architecture nav link is clicked
  const restoreLinks = ['home', 'ourwork', 'about', 'contact'];
  
  restoreLinks.forEach(id => {
    document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
      // Remove architecture section if present
      const archSection = document.getElementById('architecture-section');
      if (archSection) archSection.remove();
  
      // Show all main sections again
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => sec.style.display = 'block');
    });
  });
  
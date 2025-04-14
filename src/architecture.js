// architecture.js

function removeDynamicSections() {
    const ids = ['architecture-section', 'interior-section', 'management-section'];
    ids.forEach(id => {
      document.getElementById(id)?.remove();
    });
  }
  
  function restoreMainSections() {
    document.querySelectorAll('section').forEach(sec => {
      if (!sec.id.includes('-section')) sec.style.display = 'block';
    });
  }
  
  document.getElementById('arch-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    removeDynamicSections();
  
    const archSection = document.createElement('section');
    archSection.id = 'architecture-section';
    archSection.className = 'content-section';
    archSection.style.padding = '60px 40px';
    archSection.style.backgroundColor = '#fff';
  
    archSection.innerHTML = `
      <h3 class="section-title">Architecture </h3>
      <p style="text-align: center; max-width: 700px; margin: 0 auto;">
        A curated showcase of our most compelling architectural work — from contemporary residential homes to civic landmarks designed with sustainability and context in mind.
      </p>
      <div class="ourwork-gallery" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" alt="Project 1" />
        <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" alt="Project 2" />
        <img src="https://images.unsplash.com/photo-1529429611273-4a5b7f5e7481?auto=format&fit=crop&w=600&q=80" alt="Project 3" />
      </div>
    `;
  
    // Hide other default sections
    document.querySelectorAll('section').forEach(sec => {
      if (!sec.id.includes('-section')) sec.style.display = 'none';
    });
  
    document.body.insertBefore(archSection, document.querySelector('footer'));
  });
  
  // Restore when main nav links are clicked
  ['home', 'ourwork', 'about', 'contact'].forEach(id => {
    document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
      removeDynamicSections();
      restoreMainSections();
    });
  });
  
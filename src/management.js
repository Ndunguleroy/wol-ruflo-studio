// management.js

function addManagementStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #management-section {
      padding: 60px 40px;
      background-color: #fff;
      font-family: 'Montserrat', sans-serif;
    }

    #management-section h3.section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #111;
    }

    #management-section p {
      max-width: 700px;
      margin: 0 auto;
      font-size: 1rem;
      text-align: center;
      color: #111;
    }

    #management-section .ourwork-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-top: 30px;
    }

    #management-section .ourwork-gallery img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  `;
  document.head.appendChild(style);
}

function removeDynamicSections() {
  const ids = ['architecture-section', 'interior-section', 'management-section', 'projects-section'];
  ids.forEach(id => {
    document.getElementById(id)?.remove();
  });
}

function restoreMainSections() {
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'block';
  });
}

document.getElementById('manage-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();
  addManagementStyles();

  const manageSection = document.createElement('section');
  manageSection.id = 'management-section';
  manageSection.className = 'content-section';

  manageSection.innerHTML = `
    <h3 class="section-title">Project Management</h3>
    <p>
      Our project management services ensure seamless execution of projects — from inception to completion — while maintaining quality, timelines, and client goals.
    </p>
    <div class="ourwork-gallery">
      <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80" alt="Management 1" />
      <img src="https://images.unsplash.com/photo-1604014238622-1d2e9d53dd4e?auto=format&fit=crop&w=600&q=80" alt="Management 2" />
      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Management 3" />
    </div>
  `;

  // Hide other default sections
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  document.body.insertBefore(manageSection, document.querySelector('footer'));
});

// Restore default content on nav links
['home', 'ourwork', 'about', 'contact'].forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    removeDynamicSections();
    restoreMainSections();
  });
});

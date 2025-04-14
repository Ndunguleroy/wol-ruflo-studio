// management.js

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

document.getElementById('manage-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();

  const manageSection = document.createElement('section');
  manageSection.id = 'management-section';
  manageSection.className = 'content-section';
  manageSection.style.padding = '60px 40px';
  manageSection.style.backgroundColor = '#fff';

  manageSection.innerHTML = `
    <h3 class="section-title">Project Management</h3>
    <p style="text-align: center; max-width: 700px; margin: 0 auto;">
      Our project management services ensure seamless execution of projects — from inception to completion — while maintaining quality, timelines, and client goals.
    </p>
    <div class="ourwork-gallery" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
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

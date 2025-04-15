// management.js

function addManagementStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #management-top-image {
      width: 100%;
      height: 100px;
      object-fit: cover;
      display: block;
    }

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
  const ids = [
    'architecture-top-image', 'architecture-section',
    'interior-top-image', 'interior-section',
    'management-top-image', 'management-section',
    'projects-section'
  ];
  ids.forEach(id => document.getElementById(id)?.remove());
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

  const topImage = document.createElement('img');
  topImage.id = 'management-top-image';
  topImage.src = 'https://imgs.search.brave.com/7QB8xqFGlkg5q_yEe9xmT46oy7D8qf9BLk3PWcDUVT8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzg0Lzc3Lzk4/LzM2MF9GXzE4NDc3/OTg4MF9YWnphVG9D/QktqYVp1UXJyVDVI/YXd4M21Oc1F0MG4z/Ti5qcGc';
  topImage.alt = 'Management Banner';

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

  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  const footer = document.querySelector('footer');
  document.body.insertBefore(topImage, footer);
  document.body.insertBefore(manageSection, footer);
});

['home', 'ourwork', 'about', 'contact'].forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    removeDynamicSections();
    restoreMainSections();
  });
});

// architecture.js

function addArchitectureStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #architecture-top-image {
      width: 100%;
      height: 100px;
      object-fit: cover;
      display: block;
    }

    #architecture-section {
      padding: 60px 40px;
      background-color: #fff;
      font-family: 'Montserrat', sans-serif;
    }

    #architecture-section h3.section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #111;
    }

    #architecture-section p {
      max-width: 700px;
      margin: 0 auto;
      font-size: 1rem;
      text-align: center;
      color: #111;
    }

    #architecture-section .ourwork-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-top: 30px;
    }

    #architecture-section .ourwork-gallery img {
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
    'projects-section',
    'contact-top-image', 'contact-section'
  ];
  ids.forEach(id => document.getElementById(id)?.remove());
}

function restoreMainSections() {
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'block';
  });
}

document.getElementById('arch-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();
  addArchitectureStyles();

  const topImage = document.createElement('img');
  topImage.id = 'architecture-top-image';
  topImage.src = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1500&q=80';
  topImage.alt = 'Architecture Banner';

  const architectureSection = document.createElement('section');
  architectureSection.id = 'architecture-section';
  architectureSection.className = 'content-section';
  architectureSection.innerHTML = `
    <h3 class="section-title">Architecture</h3>
    <p>We design modern architecture with a deep respect for context and sustainability.</p>
    <div class="ourwork-gallery">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Architecture 1" />
      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" alt="Architecture 2" />
      <img src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=600&q=80" alt="Architecture 3" />
    </div>
  `;

  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  const footer = document.querySelector('footer');
  document.body.insertBefore(topImage, footer);
  document.body.insertBefore(architectureSection, footer);
});

['home', 'ourwork', 'about', 'contact'].forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    removeDynamicSections();
    restoreMainSections();
  });
});

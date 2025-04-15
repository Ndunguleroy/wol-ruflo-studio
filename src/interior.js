// interior.js

function addInteriorStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #interior-section {
      padding: 60px 40px;
      background-color: #fff;
      font-family: 'Montserrat', sans-serif;
    }

    #interior-section h3.section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #111;
    }

    #interior-section p {
      max-width: 700px;
      margin: 0 auto;
      font-size: 1rem;
      text-align: center;
      color: #111;
    }

    #interior-section .ourwork-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-top: 30px;
    }

    #interior-section .ourwork-gallery img {
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

document.getElementById('interior-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();
  addInteriorStyles();

  const interiorSection = document.createElement('section');
  interiorSection.id = 'interior-section';
  interiorSection.className = 'content-section';

  interiorSection.innerHTML = `
    <h3 class="section-title">Interior Design</h3>
    <p>
      Our interior design work captures the soul of a space — where every surface, material, and light source is considered for both beauty and purpose.
    </p>
    <div class="ourwork-gallery">
      <img src="https://imgs.search.brave.com/sSj1aZQqPp5tyehqqUrrA3dAQw4jX9MzjcZRHWtUj5A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly96YW5k/ZXJzaW50ZXJpb3Jz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNy9MaW5j/b2xuU3QtNjktWDRf/dzEyMDAtNDk1eDQw/MC5qcGc" alt="Interior 1" />
      <img src="https://images.unsplash.com/photo-1595526114035-019d85f375f2?auto=format&fit=crop&w=600&q=80" alt="Interior 2" />
      <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80" alt="Interior 3" />
    </div>
  `;

  // Hide other default sections
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  document.body.insertBefore(interiorSection, document.querySelector('footer'));
});

// Restore when main nav links are clicked
['home', 'ourwork', 'about', 'contact'].forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    removeDynamicSections();
    restoreMainSections();
  });
});

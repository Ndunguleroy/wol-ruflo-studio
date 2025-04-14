// interior.js

document.getElementById('interior-link')?.addEventListener('click', (e) => {
  e.preventDefault();

  // Only create and show if not already active
  if (!document.getElementById('interior-section')) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');

    const interiorSection = document.createElement('section');
    interiorSection.id = 'interior-section';
    interiorSection.className = 'content-section';
    interiorSection.style.padding = '60px 40px';
    interiorSection.style.backgroundColor = '#fff';
    interiorSection.style.display = 'block';

    interiorSection.innerHTML = `
      <h3 class="section-title">Interior Design Projects</h3>
      <p style="text-align: center; max-width: 700px; margin: 0 auto;">
        Our interior design work captures the soul of a space — where every surface, material, and light source is considered for both beauty and purpose.
      </p>
      <div class="ourwork-gallery" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
        <img src="https://imgs.search.brave.com/sSj1aZQqPp5tyehqqUrrA3dAQw4jX9MzjcZRHWtUj5A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly96YW5k/ZXJzaW50ZXJpb3Jz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNy9MaW5j/b2xuU3QtNjktWDRf/dzEyMDAtNDk1eDQw/MC5qcGc" alt="Interior 1" />
        <img src="https://images.unsplash.com/photo-1595526114035-019d85f375f2?auto=format&fit=crop&w=600&q=80" alt="Interior 2" />
        <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80" alt="Interior 3" />
      </div>
    `;

    document.body.insertBefore(interiorSection, document.querySelector('footer'));
  }
});

// Restore everything when any default nav link is clicked
const restoreLinks = ['home', 'ourwork', 'about', 'contact'];

restoreLinks.forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    const interiorSection = document.getElementById('interior-section');
    if (interiorSection) interiorSection.remove();

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'block');
  });
});

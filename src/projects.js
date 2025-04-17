// projects.js

function addProjectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #projects-section {
      padding: 60px 40px;
      background-color: #fff;
      font-family: 'Montserrat', sans-serif;
    }

    #projects-section h3.section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #111;
    }

    .projects-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      margin-top: 30px;
    }

    .project-card {
      background-color: #fafafa;
      border: 1px solid #ddd;
      border-radius: 10px;
      width: 320px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }

    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-card .project-info {
      padding: 16px;
      color: #111;
    }

    .project-card h4 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .project-card p {
      font-size: 0.95rem;
      margin-bottom: 5px;
    }

    .project-card button {
      margin-top: 10px;
      padding: 10px 16px;
      background-color: #111;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: 600;
      border-radius: 4px;
    }

    .project-details {
      margin-top: 15px;
      display: none;
      font-size: 0.95rem;
      color: #333;
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

document.getElementById('projects-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();
  addProjectStyles();

  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects-section';
  projectsSection.className = 'content-section';

  projectsSection.innerHTML = `
    <h3 class="section-title">Completed Projects</h3>
    <div class="projects-grid">

      <div class="project-card">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Modern Villa">
        <div class="project-info">
          <h4>Modern Villa</h4>
          <p><strong>Category:</strong> Residential</p>
          <p><strong>Client:</strong> Jane Doe</p>
          <p><strong>Scope:</strong> Full architectural and interior design</p>
          <p><strong>Completed:</strong> March 2024</p>
          <button onclick="toggleDetails(this)">VIEW DETAIL</button>
          <div class="project-details">
            A sustainable villa in a quiet suburb, integrating biophilic principles and passive energy design. Features an open floor plan, smart home tech, and high-efficiency fixtures.
          </div>
        </div>
      </div>

      <div class="project-card">
        <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=80" alt="Urban Complex">
        <div class="project-info">
          <h4>Urban Complex</h4>
          <p><strong>Category:</strong> Mixed-use</p>
          <p><strong>Client:</strong> Urban Core Ltd.</p>
          <p><strong>Scope:</strong> Master planning and commercial design</p>
          <p><strong>Completed:</strong> December 2023</p>
          <button onclick="toggleDetails(this)">VIEW DETAIL</button>
          <div class="project-details">
            Multi-purpose space with residential, retail, and office units centered around a public plaza. Includes underground parking and rooftop gardens.
          </div>
        </div>
      </div>

    </div>
  `;

  // Hide default sections
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  document.body.insertBefore(projectsSection, document.querySelector('footer'));
});

function toggleDetails(button) {
  const detailBox = button.nextElementSibling;
  detailBox.style.display = detailBox.style.display === 'block' ? 'none' : 'block';
}

// Restore default sections when main nav links are clicked
['home', 'ourwork', 'about', 'contact'].forEach(id => {
  document.querySelectorAll(`a[href="#${id}"]`).forEach(link => {
    link.addEventListener('click', () => {
      removeDynamicSections();
      restoreMainSections();
    });
  });
});


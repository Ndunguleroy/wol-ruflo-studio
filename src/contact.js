// contact.js

function addContactStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #contact-top-image {
      width: 100%;
      height: 100px;
      object-fit: cover;
      display: block;
    }

    #contact-section {
      padding: 60px 20px;
      background-color: #f0f4f8;
      background-image: 
        linear-gradient(135deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(225deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
        linear-gradient(315deg, rgba(0,0,0,0.03) 25%, transparent 25%);
      background-size: 40px 40px;
      font-family: 'Montserrat', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #contact-container {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      padding: 40px;
      width: 100%;
      max-width: 600px;
      transition: transform 0.3s ease;
    }

    #contact-container:hover {
      transform: translateY(-2px);
    }

    #contact-container h3.section-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #1a1a1a;
    }

    #contact-container form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    #contact-container input,
    #contact-container textarea {
      padding: 14px 16px;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      transition: border-color 0.3s ease, background-color 0.3s ease;
    }

    #contact-container input:focus,
    #contact-container textarea:focus {
      outline: none;
      border-color: #1a73e8;
      background-color: #fff;
    }

    #contact-container textarea {
      resize: vertical;
      min-height: 120px;
    }

    #contact-container button {
      padding: 14px 20px;
      font-size: 1rem;
      font-weight: bold;
      background-color: #1a73e8;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    #contact-container button:hover {
      background-color: #1558c0;
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

document.getElementById('contact-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  removeDynamicSections();
  addContactStyles();

  const topImage = document.createElement('img');
  topImage.id = 'contact-top-image';
  topImage.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80';
  topImage.alt = 'Contact Banner';

  const contactSection = document.createElement('section');
  contactSection.id = 'contact-section';
  contactSection.className = 'content-section';
  contactSection.innerHTML = `
    <div id="contact-container">
      <h3 class="section-title">Get in Touch</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  `;

  document.querySelectorAll('section').forEach(sec => {
    if (!sec.id.includes('-section')) sec.style.display = 'none';
  });

  const footer = document.querySelector('footer');
  document.body.insertBefore(topImage, footer);
  document.body.insertBefore(contactSection, footer);
});

['home', 'ourwork', 'about', 'arch-link'].forEach(id => {
  document.querySelector(`a[href="#${id}"]`)?.addEventListener('click', () => {
    removeDynamicSections();
    restoreMainSections();
  });
});

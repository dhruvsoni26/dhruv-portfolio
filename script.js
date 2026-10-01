/*
  EASY EDIT AREA
  ----------------
  Add future video projects inside the projects array below.
  Google Drive links work best when converted to a direct/preview URL.
*/
const projects = [
  // Example:
  // { title: "Trading Reel", category: "TRADING", description: "Short-form edit", video: "YOUR_GOOGLE_DRIVE_LINK", thumbnail: "" },
];

const grid = document.getElementById('project-grid');
if (!projects.length) {
  grid.innerHTML = `<div class="project-empty"><div><strong>Your best edits will live here.</strong><br>Video samples can be added later without changing the website design.</div></div>`;
} else {
  grid.innerHTML = projects.map((p, i) => `
    <a class="project" href="${p.video || '#'}" target="_blank" rel="noopener" style="${p.thumbnail ? `background-image:url('${p.thumbnail}');background-size:cover;background-position:center;` : ''}">
      <div class="project-info"><small>${p.category || 'VIDEO EDITING'}</small><h3>${p.title || 'Project ' + (i+1)}</h3><span>${p.description || 'View project ↗'}</span></div>
    </a>`).join('');
}

// Smooth reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, {threshold:.12});
document.querySelectorAll('.section, .service, .project, .contact-inner').forEach(el => {
  el.classList.add('reveal'); observer.observe(el);
});

// Desktop cursor glow
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  const open = nav.style.display === 'flex';
  nav.style.cssText = open ? '' : 'display:flex;position:absolute;top:76px;left:0;width:100%;padding:22px 20px;background:#0b0b10;flex-direction:column;border-bottom:1px solid rgba(255,255,255,.08);gap:20px';
});

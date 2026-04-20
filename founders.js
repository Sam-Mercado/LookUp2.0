const founders = [
  {
    name: "Lucas Mercado",
    role: "Co-fundador · Director de Operaciones Académicas",
    eyebrow: "Conoce al Co-fundador",
    checks: [
      "Especialista en desarrollo académico profesional",
      "Enfocado en resultados reales para estudiantes",
      "Construye puentes entre el talento y el mundo"
    ],
    cta: "Escríbenos",
    ctaLink: "https://wa.link/rjn44n",
    initials: "LM",
    photo: "./Images/LucasMercado.jpg" // ← paste image path here e.g. "./Images/lucas.jpg"
  },
  {
    name: "Samuel Mercado",
    role: "Co-fundador · Project Manager",
    eyebrow: "Conoce al Co-fundador",
    checks: [
      "Gestiona la experiencia completa del estudiante",
      "Gestionando Sistemas de seguimiento para que ningún estudiante se quede atrás",
      "Coordinando el equipo para que LookUp avance con propósito y dirección"
    ],
    cta: "Escríbenos",
    ctaLink: "https://wa.link/rjn44n",
    initials: "SM",
    photo: "./Images/SamuelMercado.jpg" // ← paste image path here e.g. "./Images/samuel.jpg"
  }
];

const container = document.getElementById("foundersSection");

founders.forEach(function(f) {
  const checksHTML = f.checks.map(function(c) {
    return `<li>${c}</li>`;
  }).join("");

  const photoContent = f.photo
    ? `<img src="${f.photo}" alt="Foto de ${f.name}" />`
    : `<div class="photo-placeholder">
         <div class="initials-big">${f.initials}</div>
         <span>Foto próximamente</span>
       </div>`;

  const card = document.createElement("div");
  card.classList.add("founder-hero");
  card.innerHTML = `
    <div class="founder-hero-copy">
      <div class="founder-hero-eyebrow">${f.eyebrow}</div>
      <div class="founder-hero-name">${f.name}</div>
      <div class="founder-hero-role">${f.role}</div>
      <ul class="founder-hero-checks">${checksHTML}</ul>
      <a href="${f.ctaLink}" target="_blank" class="founder-hero-cta">
        ${f.cta} ↗
      </a>
    </div>
    <div class="founder-hero-photo">
      ${photoContent}
    </div>
  `;
  container.appendChild(card);
});

 /* ════════════════════════════════════════
     FOUNDERS
  ════════════════════════════════════════ */
  const foundersGrid = document.getElementById("foundersGrid");

  DATA.founders.forEach(function (f) {
    const card = document.createElement("div");
    card.classList.add("founder-card");
    card.innerHTML = `
      <div class="founder-avatar">${f.initials}</div>
      <div class="founder-name">${f.name}</div>
      <div class="founder-role">${f.role}</div>
      <div class="founder-title">${f.title}</div>
      <p class="founder-quote">${f.quote}</p>
    `;
    foundersGrid.appendChild(card);
  });

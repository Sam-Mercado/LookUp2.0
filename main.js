
document.addEventListener("DOMContentLoaded", function () {

  const WA_LINK = `https://wa.me/${DATA.whatsappNumber}`;

  /* ── Update all WhatsApp links ── */
  document.querySelectorAll('a[href="https://wa.me/TUNUMERO"]').forEach(function (el) {
    el.href = WA_LINK;
  });

  /* ── NAV TOGGLE (mobile) ── */
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  /* Close mobile menu on link click */
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  /* ── NAV SCROLL SHADOW ── */
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 2px 20px rgba(39,45,59,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  /* ════════════════════════════════════════
     HERO CAROUSEL
  ════════════════════════════════════════ */
  const carouselEl = document.getElementById("heroCarousel");
  const dotsEl     = document.getElementById("heroDots");
  let currentSlide = 0;
  let carouselTimer;

  function buildCarousel() {
    DATA.heroSlides.forEach(function (slide, i) {
      /* Slide */
      const div = document.createElement("div");
      div.classList.add("carousel-slide");
      if (i === 0) div.classList.add("active");

      div.innerHTML = `
        <p class="slide-result">${slide.result}</p>
        <div class="slide-meta">
          <div>
            <div class="slide-name">${slide.name}</div>
            <div class="slide-info">${slide.country}</div>
          </div>
          <div class="slide-company">${slide.company}</div>
        </div>
        <div class="slide-time">${slide.time}</div>
      `;
      carouselEl.appendChild(div);

      /* Dot */
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", function () { goToSlide(i); });
      dotsEl.appendChild(dot);
    });
  }

  function goToSlide(index) {
    const slides = carouselEl.querySelectorAll(".carousel-slide");
    const dots   = dotsEl.querySelectorAll(".dot");

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    const next = (currentSlide + 1) % DATA.heroSlides.length;
    goToSlide(next);
  }

  function startCarousel() {
    carouselTimer = setInterval(nextSlide, 4000);
  }

  buildCarousel();
  startCarousel();

  /* Pause on hover */
  carouselEl.addEventListener("mouseenter", function () { clearInterval(carouselTimer); });
  carouselEl.addEventListener("mouseleave", startCarousel);

 
  /* ════════════════════════════════════════
     TRUST LOGOS
  ════════════════════════════════════════ */
  const trustLogosEl = document.getElementById("trustLogos");

  DATA.companies.forEach(function (company) {
    const span = document.createElement("span");
    span.classList.add("trust-logo");
    span.textContent = company;
    trustLogosEl.appendChild(span);
  });

  /* ════════════════════════════════════════
     BENEFITS
  ════════════════════════════════════════ */
  const benefitsGrid = document.getElementById("benefitsGrid");

  DATA.benefits.forEach(function (b) {
    const card = document.createElement("div");
    card.classList.add("benefit-card");
    card.innerHTML = `
      <div class="benefit-icon">${b.icon}</div>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    `;
    benefitsGrid.appendChild(card);
  });

  /* ════════════════════════════════════════
     PROGRAMS
  ════════════════════════════════════════ */
  const programsGrid = document.getElementById("programsGrid");

  DATA.programs.forEach(function (p) {
    const card = document.createElement("div");
    card.classList.add("program-card");
    if (p.featured) card.classList.add("featured");

    const badge = p.badge
      ? `<div class="program-badge">${p.badge}</div>`
      : "";

    card.innerHTML = `
      ${badge}
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="program-meta">
        <span>📅 ${p.duration}</span>
        <span>📊 ${p.level}</span>
      </div>
    `;
    programsGrid.appendChild(card);
  });

  /* ════════════════════════════════════════
     STEPS
  ════════════════════════════════════════ */
  const stepsGrid = document.getElementById("stepsGrid");

  DATA.steps.forEach(function (s) {
    const card = document.createElement("div");
    card.classList.add("step-card");
    card.innerHTML = `
      <div class="step-number">${s.number}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    `;
    stepsGrid.appendChild(card);
  });

  /* ════════════════════════════════════════
     TESTIMONIALS
  ════════════════════════════════════════ */
  const testimonialsGrid = document.getElementById("testimonialsGrid");

  DATA.testimonials.forEach(function (t) {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
      <div class="stars">★★★★★</div>
      <blockquote>"${t.quote}"</blockquote>
      <div class="testimonial-footer">
        <div class="avatar">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role} · ${t.country}</div>
        </div>
        <div class="testimonial-company">${t.company}</div>
      </div>
    `;
    testimonialsGrid.appendChild(card);
  });

  /* ════════════════════════════════════════
     PRICING
  ════════════════════════════════════════ */
  const pricingGrid = document.getElementById("pricingGrid");

  DATA.pricing.forEach(function (plan) {
    const card = document.createElement("div");
    card.classList.add("pricing-card");
    if (plan.featured) card.classList.add("featured");

    const badge = plan.badge
      ? `<div class="pricing-badge">${plan.badge}</div>`
      : "";

    const featuresHTML = plan.features.map(function (f) {
      return `<li>${f}</li>`;
    }).join("");

    card.innerHTML = `
      ${badge}
      <h3>${plan.name}</h3>
      <div class="price">${plan.price}<span>${plan.period}</span></div>
      <p class="price-desc">${plan.desc}</p>
      <ul class="pricing-features">${featuresHTML}</ul>
      <a href="${WA_LINK}" target="_blank" class="pricing-cta">${plan.cta}</a>
    `;
    pricingGrid.appendChild(card);
  });

});
const NAV_HTML = `
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
/* ══ NAVBAR ══ */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  height: 68px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 4vw;
  background: rgba(6,5,4,.92);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid rgba(201,165,82,.1);
  z-index: 999;
  transition: background .4s ease, border-color .4s ease;
}
.navbar.scrolled {
  background: rgba(4,3,2,.97);
  border-bottom-color: rgba(201,165,82,.14);
}

/* Grotta Logo */
.grotta-wordmark {
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: clamp(1rem, 1.8vw, 1.45rem);
  font-weight: 600; letter-spacing: .46em;
  text-transform: uppercase; text-decoration: none;
  padding-right: .46em; display: inline-block; line-height: 1;
  background: linear-gradient(to bottom,#c9a552 0%,#f0d878 40%,#c9a552 60%,#9a7828 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
  transition: opacity .35s ease; flex-shrink: 0;
}
.grotta-wordmark:hover { opacity: .75; }

/* Nav links */
.nav-links {
  display: flex; align-items: center;
  gap: clamp(.5rem, 1.5vw, 1.8rem);
}
.nav-links a {
  font-family: 'Jost', sans-serif;
  font-size: clamp(.42rem, .75vw, .56rem);
  font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
  color: rgba(200,192,174,.52); text-decoration: none;
  position: relative; padding-bottom: 3px; white-space: nowrap;
  transition: color .3s ease;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 1px; background: #c9a552;
  transition: width .35s cubic-bezier(.25,.46,.45,.94);
}
.nav-links a:hover { color: rgba(200,192,174,.88); }
.nav-links a:hover::after { width: 100%; }
.nav-links a.active { color: #c9a552; }
.nav-links a.active::after { width: 100%; }

/* Hamburger */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: .4rem; z-index: 1001;
}
.hamburger span {
  display: block; width: 24px; height: 1px;
  background: rgba(201,165,82,.7);
  transition: all .35s cubic-bezier(.25,.46,.45,.94);
}
.hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile nav — Cinematic Luxury Overlay */
.mobile-nav {
  position: fixed; inset: 0; z-index: 998;
  display: flex; flex-direction: column;
  opacity: 0; pointer-events: none;
  transition: opacity .65s cubic-bezier(.25,.46,.45,.94);
  overflow: hidden;
}
.mobile-nav.open { opacity: 1; pointer-events: all; }

/* ── Layered cinematic background ── */
.mobile-nav-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 120% 80% at 15% 60%, rgba(201,110,20,.06) 0%, transparent 55%),
    radial-gradient(ellipse 80% 60% at 85% 20%, rgba(201,165,82,.04) 0%, transparent 50%),
    linear-gradient(160deg, rgba(8,6,4,1) 0%, rgba(12,9,6,.98) 45%, rgba(6,5,3,1) 100%);
  transition: opacity .65s ease;
}
/* Grain texture */
.mobile-nav-grain {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E");
  opacity: .6;
}
/* Ambient glow — bottom left warm */
.mobile-nav-glow {
  position: absolute; z-index: 1; pointer-events: none;
  bottom: -10%; left: -10%;
  width: 70vw; height: 60vh;
  background: radial-gradient(ellipse, rgba(201,120,30,.07) 0%, transparent 65%);
  animation: mn-glow 8s ease-in-out infinite alternate;
}
@keyframes mn-glow {
  from { opacity: .4; transform: scale(1); }
  to   { opacity: .9; transform: scale(1.15); }
}
/* Vignette edges */
.mobile-nav-vignette {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background:
    linear-gradient(to right, rgba(4,3,2,.5) 0%, transparent 25%, transparent 75%, rgba(4,3,2,.5) 100%),
    linear-gradient(to bottom, rgba(4,3,2,.4) 0%, transparent 20%, transparent 80%, rgba(4,3,2,.4) 100%);
}

/* ── Header bar inside nav ── */
.mobile-nav-header {
  position: relative; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 6vw;
  height: 68px; flex-shrink: 0;
  border-bottom: 1px solid rgba(201,165,82,.07);
}
.mobile-nav-logo {
  font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 600;
  letter-spacing: .42em; padding-right: .42em; text-decoration: none;
  background: linear-gradient(to bottom, #c9a552 0%, #f0d878 40%, #c9a552 60%, #9a7828 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.mobile-nav-close {
  background: none; border: none; cursor: pointer;
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  color: rgba(201,165,82,.55); font-size: 1.2rem; transition: color .3s ease;
}
.mobile-nav-close:hover { color: rgba(201,165,82,.9); }
.mobile-nav-close svg { width: 18px; height: 18px; }

/* ── Content area ── */
.mobile-nav-content {
  position: relative; z-index: 10;
  flex: 1; display: flex; flex-direction: column;
  justify-content: center;
  padding: 2rem 6vw 1.5rem clamp(3rem, 10vw, 6rem);
  min-height: 0;
  overflow: hidden;
}

/* ── Gold accent line ── */
.mobile-nav-line {
  position: absolute; left: clamp(1.2rem, 5vw, 3rem);
  top: 8%; bottom: 8%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(201,165,82,.2) 20%, rgba(201,165,82,.2) 80%, transparent);
  z-index: 2;
  transform: scaleY(0); transform-origin: top;
  transition: transform .8s cubic-bezier(.25,.46,.45,.94) .3s;
}
.mobile-nav.open .mobile-nav-line { transform: scaleY(1); }

/* ── Primary links ── */
.mn-primary {
  display: flex; flex-direction: column; gap: .1rem;
  margin-bottom: 1.6rem;
}
.mn-primary a {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.2rem, 8vw, 3.5rem);
  font-weight: 300; letter-spacing: -.02em;
  color: rgba(240,232,213,.85); text-decoration: none; line-height: 1.08;
  display: block; position: relative;
  opacity: 0;
  transform: translateY(16px);
  transition: color .35s ease, opacity .7s ease, transform .7s cubic-bezier(.25,.46,.45,.94);
}
.mn-primary a::after {
  content: ''; position: absolute; bottom: 2px; left: 0;
  width: 0; height: 1px;
  background: linear-gradient(to right, #c9a552, rgba(201,165,82,.3));
  transition: width .45s cubic-bezier(.25,.46,.45,.94);
}
.mn-primary a:hover { color: #fff; }
.mn-primary a:hover::after { width: 40%; }

/* Active state on open */
.mobile-nav.open .mn-primary a:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: .18s; }
.mobile-nav.open .mn-primary a:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: .28s; }
.mobile-nav.open .mn-primary a:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: .38s; }

/* ── Divider ── */
.mn-divider {
  width: 0; height: 1px;
  background: linear-gradient(to right, rgba(201,165,82,.25), transparent);
  margin-bottom: 1.4rem;
  transition: width .6s cubic-bezier(.25,.46,.45,.94) .42s;
}
.mobile-nav.open .mn-divider { width: clamp(80px, 30vw, 160px); }

/* ── Secondary links ── */
.mn-secondary {
  display: flex; flex-direction: column; gap: 0;
}
.mn-secondary a {
  font-family: 'Jost', sans-serif;
  font-size: clamp(.75rem, 3.2vw, .95rem);
  font-weight: 300; letter-spacing: .18em; text-transform: uppercase;
  color: rgba(200,192,174,.45); text-decoration: none;
  padding: .5rem 0; display: block;
  position: relative;
  opacity: 0;
  transform: translateY(10px);
  transition: color .3s ease, opacity .6s ease, transform .6s cubic-bezier(.25,.46,.45,.94);
}
.mn-secondary a::before {
  content: ''; position: absolute; left: -1.2rem; top: 50%;
  transform: translateY(-50%);
  width: 4px; height: 4px; border-radius: 50%;
  background: #c9a552; opacity: 0;
  transition: opacity .3s ease;
}
.mn-secondary a:hover { color: rgba(240,232,213,.8); }
.mn-secondary a:hover::before { opacity: 1; }

/* Active state on open */
.mobile-nav.open .mn-secondary a:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: .44s; }
.mobile-nav.open .mn-secondary a:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: .50s; }
.mobile-nav.open .mn-secondary a:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: .56s; }
.mobile-nav.open .mn-secondary a:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: .62s; }
.mobile-nav.open .mn-secondary a:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: .68s; }
.mobile-nav.open .mn-secondary a:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: .74s; }

/* Reset on close */
.mobile-nav:not(.open) .mn-primary a,
.mobile-nav:not(.open) .mn-secondary a {
  opacity: 0 !important;
  transform: translateY(14px) !important;
  transition-delay: 0s !important;
}

@supports(height: 100svh) { .mobile-nav { min-height: 100svh; } }

/* ── Mobile nav footer ── */
.mobile-nav-footer {
  position: relative; z-index: 10;
  padding: 1.2rem 6vw 2.5rem clamp(3rem, 10vw, 6rem);
  display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid rgba(201,165,82,.06);
  flex-shrink: 0;
}
.mn-location {
  font-family: 'Jost', sans-serif; font-size: .44rem;
  letter-spacing: .28em; text-transform: uppercase;
  color: rgba(201,165,82,.3);
  opacity: 0; transition: opacity .6s ease .8s;
}
.mobile-nav.open .mn-location { opacity: 1; }
.mn-book-link {
  font-family: 'Jost', sans-serif; font-size: .44rem;
  letter-spacing: .22em; text-transform: uppercase;
  color: rgba(201,165,82,.45); text-decoration: none;
  border: 1px solid rgba(201,165,82,.2); padding: .55rem 1.1rem;
  opacity: 0; transition: opacity .6s ease .9s, color .3s ease, border-color .3s ease;
}
.mobile-nav.open .mn-book-link { opacity: 1; }
.mn-book-link:hover { color: #c9a552; border-color: rgba(201,165,82,.45); }

/* Footer wordmark */
.grotta-wordmark-footer {
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: 1.1rem; font-weight: 600; letter-spacing: .42em;
  text-transform: uppercase; padding-right: .42em; display: inline-block;
  background: linear-gradient(to bottom,#c9a552 0%,#f0d878 40%,#c9a552 60%,#9a7828 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
}

/* Footer */
.footer { background: #050403; border-top: 1px solid rgba(201,165,82,.1); padding: 5rem 0 3rem; }
.footer .container { max-width: 1280px; margin: 0 auto; padding: 0 4vw; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 4rem; }
.footer-brand p { font-family: 'Jost',sans-serif; font-size: .78rem; font-weight: 300; color: rgba(200,192,174,.35); line-height: 1.9; max-width: 280px; margin-top: 1rem; }
.footer-col h5 { font-family: 'Jost',sans-serif; font-size: .48rem; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: rgba(201,165,82,.45); margin-bottom: 1.4rem; }
.footer-col a { display: block; font-family: 'Jost',sans-serif; font-size: .78rem; font-weight: 300; color: rgba(200,192,174,.38); text-decoration: none; margin-bottom: .75rem; transition: color .3s ease; }
.footer-col a:hover { color: rgba(201,165,82,.75); }
.footer-bottom { border-top: 1px solid rgba(201,165,82,.07); padding-top: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.footer-legal { display: flex; gap: 2rem; }
.footer-legal a { font-family: 'Jost',sans-serif; font-size: .58rem; letter-spacing: .16em; text-transform: uppercase; color: rgba(200,192,174,.22); text-decoration: none; transition: color .3s ease; }
.footer-legal a:hover { color: rgba(201,165,82,.5); }
.footer-bottom p { font-family: 'Jost',sans-serif; font-size: .6rem; color: rgba(200,192,174,.2); letter-spacing: .08em; }

/* Responsive navbar */
@media(max-width:1100px){ .nav-links { gap: clamp(.35rem, 1vw, .9rem); } }
@media(max-width:900px){ .nav-links { display: none; } .hamburger { display: flex; } .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
@media(max-width:600px){
  .navbar { padding: 0 5vw; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .grotta-wordmark { font-size: 1.1rem; letter-spacing: .32em; }
}
@media(max-width:380px){
  .grotta-wordmark { font-size: 1rem; letter-spacing: .26em; }
  .navbar { padding: 0 4vw; height: 60px; }
  .footer-col a { font-size: .72rem; }
}
@supports(height: 100svh){
  .mobile-nav { min-height: 100svh; }
}
</style>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const nav  = document.querySelector('.navbar');
  const ham  = document.querySelector('.hamburger');
  const mob  = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mob-close');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openMob() {
    ham?.classList.add('open');
    mob?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMob() {
    ham?.classList.remove('open');
    mob?.classList.remove('open');
    document.body.style.overflow = '';
  }

  ham?.addEventListener('click', () => {
    mob?.classList.contains('open') ? closeMob() : openMob();
  });
  closeBtn?.addEventListener('click', closeMob);

  // Close on any link click inside mobile nav
  mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMob));

  // Active page link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
</script>
<nav class="navbar">
  <a href="index.html" class="grotta-wordmark">GROTTA</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="stay.html">Stay</a>
    <a href="experiences.html">Experiences</a>
    <a href="caves.html">Caves</a>
    <a href="dining.html">Dining</a>
    <a href="events.html">Events & Retreats</a>
    <a href="packages.html">Packages</a>
    <a href="weddings.html">Weddings</a>
    <a href="membership.html">Membership</a>
  </div>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-nav" id="mobile-nav">
  <!-- Layered atmosphere -->
  <div class="mobile-nav-bg"></div>
  <div class="mobile-nav-grain"></div>
  <div class="mobile-nav-glow"></div>
  <div class="mobile-nav-vignette"></div>

  <!-- Header bar -->
  <div class="mobile-nav-header">
    <a href="index.html" class="mobile-nav-logo">GROTTA</a>
    <button class="mobile-nav-close" id="mob-close" aria-label="Close menu">
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2">
        <line x1="2" y1="2" x2="16" y2="16"/>
        <line x1="16" y1="2" x2="2" y2="16"/>
      </svg>
    </button>
  </div>

  <!-- Nav content -->
  <div class="mobile-nav-content">
    <!-- Gold accent line -->
    <div class="mobile-nav-line"></div>

    <!-- Primary links -->
    <nav class="mn-primary">
      <a href="index.html">Home</a>
      <a href="stay.html">Stay</a>
      <a href="experiences.html">Experiences</a>
    </nav>

    <!-- Divider -->
    <div class="mn-divider"></div>

    <!-- Secondary links -->
    <nav class="mn-secondary">
      <a href="caves.html">Caves</a>
      <a href="dining.html">Dining</a>
      <a href="events.html">Events & Retreats</a>
      <a href="packages.html">Packages</a>
      <a href="weddings.html">Weddings</a>
      <a href="membership.html">Membership</a>
    </nav>
  </div>

  <!-- Footer detail -->
  <div class="mobile-nav-footer">
    <span class="mn-location">Musanze · Rwanda · Volcanic Highlands</span>
    <a href="booking.html" class="mn-book-link">Reserve →</a>
  </div>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="grotta-wordmark-footer">GROTTA</span>
        <p>A volcano-highland destination combining caves, nature retreats, family travel, wellness experiences, and exploration in Musanze, Rwanda.</p>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        <a href="stay.html">Stay</a>
        <a href="experiences.html">Experiences</a>
        <a href="caves.html">Caves</a>
        <a href="dining.html">Dining</a>
      </div>
      <div class="footer-col">
        <h5>Activities</h5>
        <a href="events.html">Events & Retreats</a>
        <a href="packages.html">Packages</a>
        <a href="weddings.html">Weddings</a>
        <a href="membership.html">Membership</a>
      </div>
      <div class="footer-col">
        <h5>Info</h5>
        <a href="booking.html">Book a Stay</a>
        <a href="membership.html">Membership</a>
        <a href="weddings.html">Weddings</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <p>© ${new Date().getFullYear()} Grotta Resort. All Rights Reserved.</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navHolder = document.getElementById('nav-holder');
  if (navHolder) navHolder.innerHTML = NAV_HTML;
  const footerHolder = document.getElementById('footer-holder');
  if (footerHolder) footerHolder.innerHTML = FOOTER_HTML;
});

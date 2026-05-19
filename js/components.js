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

/* Mobile nav */
.mobile-nav {
  position: fixed; inset: 0; z-index: 998;
  background: rgba(4,3,2,.97); backdrop-filter: blur(24px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2rem; opacity: 0; pointer-events: none;
  transition: opacity .4s cubic-bezier(.25,.46,.45,.94);
}
.mobile-nav.open { opacity: 1; pointer-events: all; }
.mobile-nav a {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.8rem, 5vw, 2.6rem); font-weight: 300; letter-spacing: .05em;
  color: rgba(240,232,213,.65); text-decoration: none; transition: color .3s ease;
}
.mobile-nav a:hover { color: #c9a552; }

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
@media(max-width:600px){ .navbar { padding: 0 5vw; } .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; } .grotta-wordmark { font-size: 1.15rem; } }
</style>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-nav');
  window.addEventListener('scroll', () => { nav?.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
  if (ham && mob) {
    ham.addEventListener('click', () => { ham.classList.toggle('open'); mob.classList.toggle('open'); document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : ''; });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { ham.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow = ''; }));
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => { if (a.getAttribute('href') === path) a.classList.add('active'); });
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
<div class="mobile-nav">
  <a href="index.html">Home</a>
  <a href="stay.html">Stay</a>
  <a href="experiences.html">Experiences</a>
  <a href="caves.html">Caves</a>
  <a href="dining.html">Dining</a>
  <a href="events.html">Events & Retreats</a>
  <a href="packages.html">Packages</a>
  <a href="weddings.html">Weddings</a>
  <a href="membership.html">Membership</a>
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

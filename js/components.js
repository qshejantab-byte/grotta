// Shared nav HTML
const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">G R O T T A</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="stay.html">Stay</a>
    <a href="experiences.html">Experiences</a>
    <a href="caves.html">Caves</a>
    <a href="dining.html">Dining</a>
    <a href="wellness.html">Wellness</a>
    <a href="retreats.html">Retreats</a>
    <a href="families.html">Families</a>
    <a href="weddings.html">Weddings</a>
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
  <a href="wellness.html">Wellness</a>
  <a href="retreats.html">Retreats</a>
  <a href="families.html">Families</a>
  <a href="weddings.html">Weddings</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="nav-logo">G R O T T A</span>
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
        <a href="wellness.html">Wellness</a>
        <a href="retreats.html">Retreats</a>
        <a href="families.html">Families</a>
      </div>
      <div class="footer-col">
        <h5>Info</h5>
        <a href="weddings.html">Weddings</a>
        <a href="booking.html">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <p>© 2024 Grotta Resort. All Rights Reserved.</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navHolder = document.getElementById('nav-holder');
  if (navHolder) navHolder.innerHTML = NAV_HTML;
  // Inject footer
  const footerHolder = document.getElementById('footer-holder');
  if (footerHolder) footerHolder.innerHTML = FOOTER_HTML;
});

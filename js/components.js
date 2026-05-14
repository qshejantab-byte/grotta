const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">G R O T T A</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="stay.html">Stay</a>
    <a href="experiences.html">Experiences</a>
    <a href="caves.html">Caves</a>
    <a href="dining.html">Dining</a>
    <a href="retreats.html">Retreats</a>
    <a href="events.html">Events</a>
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
  <a href="retreats.html">Retreats</a>
  <a href="events.html">Events</a>
  <a href="weddings.html">Weddings</a>
  <a href="membership.html">Membership</a>
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
        <a href="retreats.html">Retreats</a>
        <a href="events.html">Events</a>
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

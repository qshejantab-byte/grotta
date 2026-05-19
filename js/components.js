const NAV_HTML = `
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
.grotta-wordmark {
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: .46em;
  text-transform: uppercase;
  text-decoration: none;
  padding-right: .46em;
  display: inline-block;
  line-height: 1;
  background: linear-gradient(
    to bottom,
    #c9a552 0%,
    #f0d878 40%,
    #c9a552 60%,
    #9a7828 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  transition: opacity .35s ease;
}
.grotta-wordmark:hover { opacity: .75 }
.grotta-wordmark-footer {
  font-family: 'Cinzel', 'Palatino Linotype', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .42em;
  text-transform: uppercase;
  padding-right: .42em;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    #c9a552 0%,
    #f0d878 40%,
    #c9a552 60%,
    #9a7828 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
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

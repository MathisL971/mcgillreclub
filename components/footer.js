const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link href="./styles/style.css" rel="stylesheet" type="text/css" />
  <footer>
    <div class="footer-menu-container">
      <div class="footer-menu">
        <h4><b>EXPLORE</b></h4>
        <a class="footer-menu-button" href="index.html">Home</a>
        <a class="footer-menu-button" href="about.html">About</a>
        <a class="footer-menu-button" href="events.html">Events</a>
        <a class="footer-menu-button" href="gallery.html">Gallery</a>
        <a class="footer-menu-button" href="sponsors.html">Sponsors</a>
      </div>
      <div class="footer-menu">
        <h4><b>MORE</b></h4>
        <a class="footer-menu-button" href="sign-up.html">Join Us</a>
        <a class="footer-menu-button" href="sign-up.html">Contacts</a>
        <a class="footer-menu-button" href="sign-up.html">Newsletter</a>
      </div>
      <div class="socials-logo-container-footer">
        <a href="https://www.facebook.com/realestateclubmcgill/" target="_blank"><img src="images/icons/fb_icon.png" alt="facebook-icon"  class="socials-icons"></a>
        <a href="https://www.instagram.com/realestateclubmcgill/" target="_blank"><img src="images/icons/insta_icon.png" alt="instagram-icon" class="socials-icons"></a>
        <a href="https://www.linkedin.com/company/real-estate-club-at-mcgill-university/about/" target="_blank"><img src="images/icons/linkedin_icon.png" alt="linkedin-icon" class="socials-icons"></a>
        <a href="mailto:vpcommunication@reclub.ca" target="_blank"><img src="images/icons/mail_icon.png" alt="email-icon" class="socials-icons"></a>
      </div>
    </div>
    <hr>
    <div style="width:82%;margin:0 auto;">
      <p>Designed by Mathis Lefranc</p>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);

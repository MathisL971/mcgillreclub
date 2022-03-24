const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <link href="./styles/style.css" rel="stylesheet" type="text/css"/>
  <header class="main-header">
    <div class="header-container">
      <a class="header-logo" href="index.html">
        <img src="images/logo_rajdhani.png" alt="mgrec-logo" style="height:50px;width:150px">
      </a>
      <div id="myLinks">
        <a class="toggle-button" href="index.html">Home</a>
        <a class="toggle-button" href="about.html">About</a>
        <a class="toggle-button" href="events.html">Events</a>
        <a class="toggle-button" href="gallery.html">Gallery</a>
        <a class="toggle-button" href="sponsors.html">Sponsors</a>
        <span class=sign-up-button-wrapper><a class="sign-up-button" href="sign-up.html">Join Us</a></span>
        <hr id="header-menu-hr">
        <div class="socials-logo-container-header">
          <a href="https://www.facebook.com/realestateclubmcgill/" target="_blank"><img src="images/icons/fb_icon.png" alt="facebook-icon" class="socials-icons"></a>
          <a href="https://www.instagram.com/realestateclubmcgill/" target="_blank"><img src="images/icons/insta_icon.png" alt="instagram-icon" class="socials-icons"></a>
          <a href="https://www.linkedin.com/company/real-estate-club-at-mcgill-university/about/" target="_blank"><img src="images/icons/linkedin_icon.png" alt="linkedin-icon" class="socials-icons"></a>
          <a href="mailto:vpcommunication@reclub.ca" target="_blank"><img src="images/icons/mail_icon.png" alt="email-icon" class="socials-icons"></a>
        </div>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </header>
  <script>
    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  </script>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

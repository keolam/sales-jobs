const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 300px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #273c53;
      color: white;
    }

    ul {
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    
    ul li {
      list-style: none;
     
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
    .horiz {
      padding: 0;
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-size: 1.6rem
    }
  </style>
  <footer>
    <ul>
      <!--li><a href="about.html">About</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="contact.html">Contact</a></li-->
    </ul>
    <div class="horiz">
      <div>
        <p>850 Richards St., Suite 508</p> 
        <p>Honolulu, HI 96813</p>
      </div>
      <div>
        <p>Phone: 808.261.0476</p>
      </div>
   </div>
    <ul class="social-row">
      <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
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
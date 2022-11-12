const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    * {
      margin: 0;
    }

    nav {
      height: 220px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      background-color:  #0d3560;
      color: white;
      font-family: 'Marcellus', serif;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
      font-size: 2rem;
    }

    ul li:hover {
      transform: scale(2.8);
    }

    a {
      font-weight: 400;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      transform: scale(1.03);
      /*padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;*/
    }

    #logo {
      font-size: 3.2rem;
      display: flex;
      align-items: center;
    }

    #logo h4 {
      display: flex;
      justify-content: end;
    }

  </style>
  <header>
  
    <nav>
      <div id="logo">
        <a href="/">
          <h1>Marketing Jobs</h1>
          <h4> of Honolulu</h4>
        </a>
      </div>
      <div>
      <ul>
        <li><a href="jobs.html">Job Listings</a></li>
        <li><a href="resources.html">Resources</a></li>
        <li><a href="staff.html">Our Staff</a></li>
      </ul>
      </div>
    </nav>
  </header>
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
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #b94418;
      color: white;
    }
    h1 {
      
    }
    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
  
    <nav>
      <a href="index.html">
        <h1>Marketing Jobs</h1>
        <h3> of Honolulu</h3>
      </a>
      <ul>
        <li><a href="jobs.html">Job Listings</a></li>
        <li><a href="resources.html">Work</a></li>
        <li><a href="staff.html">Our Staff</a></li>
      </ul>
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
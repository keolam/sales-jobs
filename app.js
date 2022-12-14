const rootDiv = document.getElementById('root');

//Declare the variables for home, about & contact html pages
let home = '';
let jobs = '';
let staff = '';

/**
 *
 * @param {String} page - Represents the page information that needs to be retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
 */

const loadPage = async (page) => {
    const response = await fetch(page)
    const resHtml = await response.text();
    return resHtml;
};

/**
 * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
 */
const loadAllPages = async () => {
    home = await loadPage('home.html');
    jobs = await loadPage('jobs.html');
    staff = await loadPage('staff.html');
};

/**
 * The Main Function is an async function that first loads All Page HTML to the variables
 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
 */
const main = async () => {
    await loadAllPages();
    rootDiv.innerHTML = home;
    routes = {
        '/': home,
        '/jobs.html': jobs,
        '/staff.html': staff
    };
};

// Invoke the Main function
main();

/**
 *
 * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
 * The function is invoked when any link is clicked in the html.
 * The onClick event on the html invokes the onNavClick & passes the pathname as param
 */
const onNavClick = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
    console.log(window.history)
};

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
};
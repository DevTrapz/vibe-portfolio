import { loadHtml, loadCss } from "./utils/loader.js";
import { initNavbar } from "./components/Navbar/script.js";

// Import page logics
import * as HomePage from "./pages/home/script.js";
import * as AboutPage from "./pages/about/script.js";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
};

async function router() {
  const app = document.getElementById("app");
  const path = window.location.hash.slice(1) || "/";
  debugger;
  const pageModule = routes[path] || HomePage;

  // Clear app
  app.innerHTML = "";

  // Load Navbar (Global)
  // In a real app we might not want to reload navbar on every page change,
  // but for simplicity we will ensure it's there or just prepend it.
  // Better: Render layout once, then render page into a slot.

  if (!document.querySelector(".navbar")) {
    const navbarHtml = await loadHtml("src/components/Navbar/index.html");
    const header = document.createElement("header");
    header.innerHTML = navbarHtml;
    document.body.prepend(header);
    loadCss("src/components/Navbar/styles.css");
    initNavbar();
  }

  // Render Page
  if (pageModule.render) {
    await pageModule.render(app);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

import { loadHtml, loadCss } from "../../utils/loader.js";

export async function render(container) {
  // Load Home Styles
  loadCss("src/pages/home/styles.css");

  // Load Home Page Structure
  const homeHtml = await loadHtml("src/pages/home/page.html");
  container.innerHTML = homeHtml;

  // Logic specific to Home page can go here
  console.log("Home page rendered");
}

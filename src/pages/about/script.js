import { loadHtml } from '../../utils/loader.js';

export async function render(container) {
    const html = await loadHtml('/src/pages/about/page.html');
    container.innerHTML = html;
    console.log('About page rendered');
}

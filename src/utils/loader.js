export async function loadHtml(path) {
    const response = await fetch(path);
    return await response.text();
}

export function loadCss(path) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    document.head.appendChild(link);
}

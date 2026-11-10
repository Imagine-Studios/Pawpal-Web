export const languages = ['en', 'es'];
export const playablePages = ['balloon-hunters', 'dream-runner'];
export const pageTypes = ['home', 'pawpal', 'seacurrent', 'privacy', 'play', ...playablePages];

export function pageUrl(lang, page = 'home') {
    if (page === 'home') return lang === 'es' ? '/es/index.html' : '/';
    if (page === 'privacy') return `/${lang}/privacy-policy.html`;
    if (page === 'play' || playablePages.includes(page)) {
        return `${lang === 'es' ? '/es' : ''}/play/${page === 'play' ? '' : `${page}/`}`;
    }
    return `/${lang}/${page}/`;
}

export const pages = languages.flatMap(lang => pageTypes.map(page => {
    const url = pageUrl(lang, page);
    return {lang, page, url, file: url === '/' ? 'index.html' : url.slice(1) + (url.endsWith('/') ? 'index.html' : '')};
}));

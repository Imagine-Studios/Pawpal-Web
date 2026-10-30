export const languages = ['en', 'es'];
export const pageTypes = ['home', 'pawpal', 'seacurrent', 'privacy', 'play', 'balloon-hunters'];

export function pageUrl(lang, page = 'home') {
    if (page === 'home') return lang === 'es' ? '/es/index.html' : '/';
    if (page === 'privacy') return `/${lang}/privacy-policy.html`;
    if (page === 'play' || page === 'balloon-hunters') {
        return `${lang === 'es' ? '/es' : ''}/play/${page === 'play' ? '' : 'balloon-hunters/'}`;
    }
    return `/${lang}/${page}/`;
}

export const pages = languages.flatMap(lang => pageTypes.map(page => {
    const url = pageUrl(lang, page);
    return {lang, page, url, file: url === '/' ? 'index.html' : url.slice(1) + (url.endsWith('/') ? 'index.html' : '')};
}));

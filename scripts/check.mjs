import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages } from './pages.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const errors = [];
const titles = new Set();

// Check exact filename casing as deployment runs on a case-sensitive host.
async function existsExact(relative) {
    let current = root;
    for (const part of relative.split('/').filter(Boolean)) {
        if (!(await readdir(current)).includes(part)) return false;
        current = path.join(current, part);
    }
    return true;
}

for (const {file:page} of pages) {
    const html = await readFile(path.join(root, page), 'utf8');
    if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${page}: expected one h1`);
    if (/PLACEHOLDER|YYYY-MM-DD/.test(html)) errors.push(`${page}: placeholder content`);
    if (!html.includes('hreflang="en"') || !html.includes('hreflang="es"')) errors.push(`${page}: missing language alternate`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    if (!title || titles.has(title)) errors.push(`${page}: missing or duplicate title`);
    titles.add(title);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    if (ids.length !== new Set(ids).size) errors.push(`${page}: duplicate IDs`);
    for (const match of html.matchAll(/(?:src|href|poster)="([^"<>]+)"/g)) {
        const reference = match[1].replace(/^https:\/\/oru\.studio/, '');
        if (/^(https?:|mailto:)/.test(reference)) continue;
        const [urlPath, anchor] = reference.split('#');
        const pathname = urlPath.split('?')[0];
        const target = pathname ? pathname.replace(/^\//,'') + (pathname.endsWith('/') ? 'index.html' : '') : page;
        if (!await existsExact(target)) {
            errors.push(`${page}: missing local file ${reference}`);
        } else if (anchor) {
            const targetHtml = target === page ? html : await readFile(path.join(root, target), 'utf8');
            if (!targetHtml.includes(`id="${anchor}"`)) errors.push(`${page}: missing anchor ${reference}`);
        }
    }
}
const css = await readFile(path.join(root,'styles.css'),'utf8');
for (const match of css.matchAll(/url\(['"]?(\/[^'")]+)['"]?\)/g)) {
    if (!await existsExact(match[1].slice(1))) errors.push(`styles.css: missing ${match[1]}`);
}
const manifest = JSON.parse(await readFile(path.join(root,'oruStudio-manifest.json'),'utf8'));
const sitemap = await readFile(path.join(root,'Sitemap.xml'),'utf8');
for (const {url} of pages) {
    if (!sitemap.includes(`<loc>https://oru.studio${url}</loc>`)) errors.push(`sitemap: missing ${url}`);
}
for (const icon of manifest.icons) {
    if (!await existsExact(icon.src.slice(1))) errors.push(`manifest: missing ${icon.src}`);
}
if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
} else {
    console.log(`${pages.length} pages checked: assets, filename casing, anchors, titles, IDs, language links, sitemap, CSS fonts and manifest icons OK.`);
}

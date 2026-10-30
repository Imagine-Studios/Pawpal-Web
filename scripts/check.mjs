import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const pages = ['index.html', 'es/index.html', 'en/privacy-policy.html', 'es/privacy-policy.html'];
const errors = [];

// Check exact filename casing as deployment runs on a case-sensitive host.
async function existsExact(relative) {
    let current = root;
    for (const part of relative.split('/').filter(Boolean)) {
        if (!(await readdir(current)).includes(part)) return false;
        current = path.join(current, part);
    }
    return true;
}

for (const page of pages) {
    const html = await readFile(path.join(root, page), 'utf8');
    if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${page}: expected one h1`);
    if (/PLACEHOLDER|YYYY-MM-DD/.test(html)) errors.push(`${page}: placeholder content`);
    if (!html.includes('hreflang="en"') || !html.includes('hreflang="es"')) errors.push(`${page}: missing language alternate`);
    for (const match of html.matchAll(/(?:src|href|poster)="([^"<>]+)"/g)) {
        const reference = match[1];
        if (/^(https?:|mailto:)/.test(reference)) continue;
        const [pathname, anchor] = reference.split('#');
        const target = pathname ? (pathname === '/' ? 'index.html' : pathname.replace(/^\//,'')) : page;
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
for (const icon of manifest.icons) {
    if (!await existsExact(icon.src.slice(1))) errors.push(`manifest: missing ${icon.src}`);
}
if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
} else {
    console.log('4 pages checked: assets, filename casing, anchors, language links, CSS fonts and manifest icons OK.');
}

import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 8080);
const types = {'.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.ttf':'font/ttf', '.mp4':'video/mp4', '.ogg':'audio/ogg', '.wav':'audio/wav', '.json':'application/json', '.xml':'application/xml', '.txt':'text/plain'};

// Local preview only. Range requests allow native video controls to seek.
http.createServer(async (request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        const file = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
        if (!file.startsWith(path.resolve(root) + path.sep) || pathname.split('/').some(part => part.startsWith('.'))) {
            response.writeHead(403).end();
            return;
        }
        const info = await stat(file);
        if (!info.isFile()) { response.writeHead(404).end(); return; }
        const headers = {'Content-Type':types[path.extname(file)] || 'application/octet-stream', 'Accept-Ranges':'bytes'};
        let start = 0;
        let end = info.size - 1;
        let status = 200;
        if (request.headers.range) {
            const match = request.headers.range.match(/^bytes=(\d+)-(\d*)$/);
            if (!match) { response.writeHead(416, {'Content-Range':`bytes */${info.size}`}).end(); return; }
            start = Number(match[1]);
            end = match[2] ? Math.min(Number(match[2]), end) : end;
            if (start > end) { response.writeHead(416, {'Content-Range':`bytes */${info.size}`}).end(); return; }
            headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
            status = 206;
        }
        response.writeHead(status, {...headers,'Content-Length':end-start+1});
        if (request.method === 'HEAD') response.end();
        else createReadStream(file, {start,end}).pipe(response);
    } catch {
        response.writeHead(404).end();
    }
}).listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}/es/index.html (Ctrl+C to stop)`));

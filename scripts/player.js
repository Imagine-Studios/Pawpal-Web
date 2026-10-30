// Load the existing HTML5 build only after an explicit request.
const player = document.querySelector('[data-player]');
const frame = player.querySelector('[data-game]');
const poster = player.querySelector('[data-poster]');
const launch = player.querySelector('[data-launch]');
const stop = player.querySelector('[data-stop]');
const fullscreen = player.querySelector('[data-fullscreen]');
const status = player.querySelector('[data-status]');
let timer;
let active = false;

launch.hidden = false;
launch.addEventListener('click', () => {
    active = true;
    status.textContent = player.dataset.loading;
    launch.hidden = true;
    stop.hidden = false;
    fullscreen.hidden = !document.fullscreenEnabled;
    poster.hidden = true;
    frame.hidden = false;
    timer = setTimeout(() => { status.textContent = player.dataset.failed; }, 30000);
    frame.src = frame.dataset.src;
});
frame.addEventListener('load', () => {
    if (!active) return;
    clearTimeout(timer);
    // An iframe load alone does not certify that the game has finished booting.
    status.textContent = player.dataset.loaded;
    frame.focus();
});
stop.addEventListener('click', async () => {
    active = false;
    clearTimeout(timer);
    frame.removeAttribute('src');
    frame.hidden = true;
    poster.hidden = false;
    stop.hidden = true;
    fullscreen.hidden = true;
    launch.hidden = false;
    status.textContent = player.dataset.stopped;
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {});
    launch.focus();
});
fullscreen.addEventListener('click', async () => {
    try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await player.requestFullscreen();
    } catch {
        status.textContent = player.dataset.fullError;
    }
});
document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? player.dataset.exitFullscreen : player.dataset.fullscreen;
});

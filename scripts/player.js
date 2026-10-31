// The build stays unloaded until the user presses Play.
const player = document.querySelector('[data-player]');
const frame = player.querySelector('[data-game]');
const poster = player.querySelector('[data-poster]');
const launch = player.querySelector('[data-launch]');
const stop = player.querySelector('[data-stop]');
const fullscreen = player.querySelector('[data-fullscreen]');
const status = player.querySelector('[data-status]');
const loading = player.querySelector('[data-loading-overlay]');
const loadingText = player.querySelector('[data-loading-text]');
let timer;
let observer;
let active = false;
let nativeFullscreen = false;

function setExpanded(expanded) {
    player.classList.toggle('is-expanded', expanded);
    document.body.classList.toggle('player-expanded', expanded);
    fullscreen.textContent = expanded ? player.dataset.exitFullscreen : player.dataset.fullscreen;
    if (!expanded) screen.orientation?.unlock?.();
}

function expand() {
    setExpanded(true);
    // Invoke directly from the click, before any async game loading consumes activation.
    if (!player.requestFullscreen || document.fullscreenEnabled === false) return;
    player.requestFullscreen({navigationUI: 'hide'}).then(() => {
        if (!active) { void collapse(); return; }
        if (active && document.fullscreenElement === player) screen.orientation?.lock?.('landscape').catch(() => {});
    }).catch(() => {
        // The viewport-sized player remains usable when native fullscreen is unavailable.
    });
}

async function collapse() {
    if (document.fullscreenElement === player) await document.exitFullscreen().catch(() => {});
    setExpanded(false);
}

function ready() {
    if (!active) return;
    const doc = frame.contentDocument;
    // The existing game marks its scene after boot. Iframe load/canvas creation is too early.
    if (!doc?.body.dataset.scene || doc.body.dataset.scene === 'Boot' || !doc.querySelector('#game canvas') || !doc.querySelector('#ui .panel')) return;
    observer?.disconnect();
    clearTimeout(timer);
    loading.hidden = true;
    poster.hidden = true;
    player.setAttribute('aria-busy', 'false');
    status.textContent = player.dataset.loaded;
    frame.focus();
}

function delayed() {
    if (!active) return;
    status.textContent = player.dataset.failed;
    loadingText.textContent = player.dataset.failed;
}

launch.hidden = false;
launch.addEventListener('click', () => {
    active = true;
    status.textContent = player.dataset.loading;
    loadingText.textContent = player.dataset.loading;
    loading.hidden = false;
    player.setAttribute('aria-busy', 'true');
    launch.hidden = true;
    stop.hidden = false;
    fullscreen.hidden = false;
    frame.hidden = false;
    expand();
    timer = setTimeout(delayed, 30000);
    frame.src = frame.dataset.src;
});

frame.addEventListener('load', () => {
    observer?.disconnect();
    if (!active || !frame.contentDocument?.body) return;
    observer = new MutationObserver(ready);
    observer.observe(frame.contentDocument.body, {attributes: true, attributeFilter: ['data-scene'], childList: true, subtree: true});
    ready();
});
frame.addEventListener('error', delayed);

stop.addEventListener('click', async () => {
    active = false;
    observer?.disconnect();
    clearTimeout(timer);
    frame.removeAttribute('src');
    frame.hidden = true;
    poster.hidden = false;
    loading.hidden = true;
    player.setAttribute('aria-busy', 'false');
    stop.hidden = true;
    fullscreen.hidden = true;
    launch.hidden = false;
    status.textContent = player.dataset.stopped;
    await collapse();
    launch.focus();
});

fullscreen.addEventListener('click', () => {
    if (player.classList.contains('is-expanded')) void collapse();
    else expand();
});

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === player) {
        nativeFullscreen = true;
        if (!active) { void collapse(); return; }
        setExpanded(true);
    } else if (nativeFullscreen) {
        nativeFullscreen = false;
        setExpanded(false);
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && player.classList.contains('is-expanded') && !document.fullscreenElement) void collapse();
});

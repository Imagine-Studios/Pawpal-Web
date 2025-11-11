const slides = [
    {
    title: "Pawpal",
    subtitle: "Care, play & decorate. Download today!",
    image: "/assets/hero/HeroPawpal.webp",
    badges: [
        { href: "https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID", img: "/assets/badges/appstore-en.svg", alt: "Download on the App Store" },
        { href: "https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE", img: "/assets/badges/googleplay-en.svg", alt: "Get it on Google Play" }
    ],
    features: [
        { img: "/assets/images/feature1.webp", title: "Care", desc: "Care for your pet!" },
        { img: "/assets/images/feature2.webp", title: "Play", desc: "Play together!" },
        { img: "/assets/images/feature3.webp", title: "Decorate", desc: "Decorate your house!" }
    ],
    screenshots: [
        "/assets/images/screenshot1.webp",
        "/assets/images/screenshot2.webp",
        "/assets/images/screenshot3.webp"
    ]
    }
];

let current = 0;
const titleEl = document.getElementById('slide-title');
const subEl = document.getElementById('slide-sub');
const imgEl = document.getElementById('slide-image');
const badgesEl = document.getElementById('slide-badges');
const dotsEl = document.getElementById('dots');
const featuresGrid = document.getElementById('features-grid');
const shotsGrid = document.getElementById('screenshots-grid');

function renderDots() {
    dotsEl.innerHTML = '';
    slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === current ? ' active' : '');
    d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
    });
}

function fadeSwap(el, cb) {
    el.style.opacity = 0;
    setTimeout(() => { cb(); el.style.opacity = 1; }, 180);
}

function renderSlide() {
    const s = slides[current];
    fadeSwap(titleEl, () => titleEl.textContent = s.title);
    fadeSwap(subEl, () => subEl.textContent = s.subtitle);
    fadeSwap(imgEl, () => { imgEl.src = s.image; imgEl.alt = s.title + " hero"; });

    badgesEl.innerHTML = '';
    s.badges.forEach(b => {
    const a = document.createElement('a');
    a.href = b.href; a.ariaLabel = b.alt; a.innerHTML = `<img src="${b.img}" alt="${b.alt}" class="h-12" loading="lazy">`;
    badgesEl.appendChild(a);
    });



    shotsGrid.innerHTML = '';
    s.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src; img.alt = src.split('/').pop(); img.loading = 'lazy';
    img.className = 'rounded-lg shadow-md';
    shotsGrid.appendChild(img);
    });

    renderDots();
}

function go(n) {
    current = (n + slides.length) % slides.length;
    renderSlide();
}

// document.getElementById('prevBtn').addEventListener('click', () => go(current - 1));
// document.getElementById('nextBtn').addEventListener('click', () => go(current + 1));

document.body.insertBefore(createHeader(), document.body.firstChild);
document.body.appendChild(createSlider());
document.body.appendChild(createPortfolioSection());
document.body.appendChild(createFooter());
sessionStorage.setItem("language", "en");
renderSlide();

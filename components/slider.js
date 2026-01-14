function createSlider() {

    const sliderElement = document.createElement("section");
    sliderElement.id = "slider";
    sliderElement.className = "slider";

    // Imagen responsive
    const picture = document.createElement("picture");

    const sourceMobile = document.createElement("source");
    sourceMobile.media = "(max-width: 768px)";
    sourceMobile.srcset = "/assets/slider/hero-mobile.webp";

    const img = document.createElement("img");
    img.src = "/assets/slider/hero-desktop.webp";
    img.alt = "Max - Virtual Pet";
    img.className = "w-full h-full object-cover object-center";
    img.loading = "eager";

    picture.appendChild(sourceMobile);
    picture.appendChild(img);
    sliderElement.appendChild(picture);

    // Badges
    const badgesDiv = document.createElement("div");
    badgesDiv.id = "slide-badges";
    badgesDiv.className = "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-10";
    sliderElement.appendChild(badgesDiv);
    
    
    const playStoreImg = document.createElement("img");
    playStoreImg.className = "h-12 cursor-pointer transition-transform duration-200 width-100 height-100";
    playStoreImg.src = "/assets/badges/google-play-badge.png";
    playStoreImg.alt = "Get it on Google Play";
    playStoreImg.onclick = () => {
        window.open("https://play.google.com/store/apps/details?id=PLACEHOLDER_PACKAGE", "_blank");
    };
    playStoreImg.onmouseenter = () => {
        playStoreImg.classList.add("transform", "scale-105");
    };
    playStoreImg.onmouseleave = () => {
        playStoreImg.classList.remove("transform", "scale-105");
    };

    const playStoreButton = document.createElement("div")
    playStoreButton.classList.add("badge-button");
    playStoreButton.appendChild(playStoreImg)
    badgesDiv.appendChild(playStoreButton);

    const appStoreImg = document.createElement("img");
    appStoreImg.className = "h-12 cursor-pointer transition-transform duration-200 width-100 height-100";
    appStoreImg.src = "/assets/badges/app-store-badge.png";
    appStoreImg.alt = "Download on the App Store";
    appStoreImg.onclick = () => {
        window.open("https://apps.apple.com/app/idPLACEHOLDER_APPLE_ID", "_blank");
    };
    appStoreImg.onmouseenter = () => {
        appStoreImg.classList.add("transform", "scale-105");
    };
    appStoreImg.onmouseleave = () => {
        appStoreImg.classList.remove("transform", "scale-105");
    };

    const appStoreButton = document.createElement("div")
    appStoreButton.classList.add("badge-button");
    appStoreButton.appendChild(appStoreImg)
    badgesDiv.appendChild(appStoreButton);

    return sliderElement;
}

function createSlider() {
    const sliderElement = document.createElement("section");
    sliderElement.id = "slider";
    sliderElement.className = "bg-blue-600 text-white";
    
    const container = document.createElement("div");
    container.className = "container mx-auto px-4 py-12 md:py-16";

    const grid = document.createElement("div");
    grid.className = "grid md:grid-cols-2 gap-8 items-center";

    const leftDiv = document.createElement("div");
    
    const title = document.createElement("h1");
    title.id = "slide-title";
    title.className = "text-4xl font-bold mb-4 slide-fade";
    title.textContent = "PawPal";
    leftDiv.appendChild(title);
    
    const subtitle = document.createElement("p");
    subtitle.id = "slide-sub";
    subtitle.className = "mb-6 text-lg slide-fade";
    subtitle.textContent = "Care, play & decorate. Download today!";
    leftDiv.appendChild(subtitle);
    
    const badgesDiv = document.createElement("div");
    badgesDiv.id = "slide-badges";
    badgesDiv.className = "flex gap-4 items-center flex-wrap slide-fade";
    leftDiv.appendChild(badgesDiv);
    
    grid.appendChild(leftDiv);
    
    const rightDiv = document.createElement("div");
    rightDiv.className = "text-center";
    
    const heroImg = document.createElement("img");
    heroImg.id = "slide-image";
    heroImg.src = "/assets/hero/hero-pawpal.webp";
    heroImg.alt = "Game hero image";
    heroImg.className = "w-full max-w-xl mx-auto rounded-lg shadow-lg slide-fade";
    heroImg.loading = "eager";
    rightDiv.appendChild(heroImg);
    
    grid.appendChild(rightDiv);
    container.appendChild(grid);
    
    const navDiv = document.createElement("div");
    navDiv.className = "mt-8 flex items-center justify-between";
    
    const prevBtn = document.createElement("button");
    prevBtn.id = "prevBtn";
    prevBtn.className = "bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold";
    prevBtn.setAttribute("aria-label", "Previous");
    prevBtn.textContent = "‹";
    navDiv.appendChild(prevBtn);
    
    const dotsDiv = document.createElement("div");
    dotsDiv.id = "dots";
    dotsDiv.className = "flex gap-2";
    navDiv.appendChild(dotsDiv);
    
    const nextBtn = document.createElement("button");
    nextBtn.id = "nextBtn";
    nextBtn.className = "bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold";
    nextBtn.setAttribute("aria-label", "Next");
    nextBtn.textContent = "›";
    navDiv.appendChild(nextBtn);
    
    container.appendChild(navDiv);
    sliderElement.appendChild(container);
    return sliderElement;
}

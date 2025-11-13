const screenshots = [
  "/assets/images/screenshot1.webp",
  "/assets/images/screenshot2.webp",
  "/assets/images/screenshot3.webp"
];


function createScreenshotSection() {
  const currentLanguage = sessionStorage.getItem("language") || "en";

  const section = document.createElement("section");
  section.id = "screenshots";
  section.className = "bg-gray-200 py-16";

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";
  section.appendChild(container);

  const heading = document.createElement("h2");
  heading.className = "text-3xl font-bold mb-8 text-center";
  heading.textContent = currentLanguage === "en" ? "Screenshots" : "Capturas de Pantalla";
  container.appendChild(heading);

  const grid = document.createElement("div");
  grid.id = "screenshots-grid";
  grid.className = "grid grid-cols-1 md:grid-cols-3 gap-4";
  container.appendChild(grid);

  screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src; 
    img.alt = src.split('/').pop(); 
    img.loading = 'lazy';
    img.className = 'rounded-lg shadow-md';

    img.onmouseenter = () => {
      img.classList.add("transform", "scale-105", "transition-all", "duration-300");
    }
    img.onmouseleave = () => {
      img.classList.remove("transform", "scale-105", "transition-all", "duration-300");
    }

    grid.appendChild(img);
  });

  return section;
}

const cards = [
    { img: "/assets/images/feature1.webp", title: "Care", desc: "Care for your pet!" },
    { img: "/assets/images/feature2.webp", title: "Play", desc: "Play together!" },
    { img: "/assets/images/feature3.webp", title: "Decorate", desc: "Decorate your house!" }
];

function createPortfolioSection() {
    const portfolioSectionElement = document.createElement("section");
    portfolioSectionElement.className = "py-16 bg-white";

    const container = document.createElement("div");
    container.className = "container mx-auto px-4"
    portfolioSectionElement.appendChild(container);

    const title = document.createElement("h2");
    title.className = "text-3xl font-bold mb-8 text-center"
    title.textContent = "Featured game - Key features";
    container.appendChild(title);

    const grid = document.createElement("div")
    grid.id = "features-grid"
    grid.className = "grid grid-cols-1 md:grid-cols-3 gap-8"
    container.appendChild(grid);

    cards.map(c => {
        const imgContainer = document.createElement("div")

        const imgElement = document.createElement("img")
        imgElement.alt = card.title;
        imgElement.loading = "lazy";
        imgElement.className = "mx-auto mb-4 w-32 h-32 object-contain";
        imgContainer.appendChild(imgElement);

        const titleElement = document.createElement("h3");
        titleElement.className = "text-xl font-semibold mb-2";
        titleElement.textContent = card.title;
        imgContainer.appendChild(titleElement);

        const descriptionElement = document.createElement("p")
        descriptionElement.textContent = card.desc;

        return imgContainer;
    }).forEach(i => grid.appendChild(i));

    return portfolioSectionElement;
}

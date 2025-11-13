const cards = [
    { img: "/assets/images/feature1.webp", enTitle: "Care", esTitle: "Cuida", enDesc: "Care for your pet!", esDesc: "Cuida a tu mascota!" },
    { img: "/assets/images/feature2.webp", enTitle: "Play", esTitle: "Jugar", enDesc: "Play together!", esDesc: "Juega juntos" },
    { img: "/assets/images/feature3.webp", enTitle: "Decorate", esTitle: "Decorar", enDesc: "Decorate your house!", esDesc: "Decora tu casa" }
];

function createPortfolioSection() {
    const currentLanguage = sessionStorage.getItem("language") || "en";

    const portfolioSectionElement = document.createElement("section");
    portfolioSectionElement.id = "portfolio";
    portfolioSectionElement.className = "py-16 bg-white";

    const container = document.createElement("div");
    container.className = "container mx-auto px-4"
    portfolioSectionElement.appendChild(container);

    const title = document.createElement("h2");
    title.className = "text-3xl font-bold mb-8 text-center"
    const spanishTitle = "Juego destacado - Características clave";
    const englishTitle = "Featured game - Key features";
    title.textContent = currentLanguage === "es" ? spanishTitle : englishTitle;
    container.appendChild(title);

    const grid = document.createElement("div")
    grid.id = "features-grid"
    grid.className = "grid grid-cols-1 md:grid-cols-3 gap-8"
    container.appendChild(grid);

    const enableEl = (element) => {
        element.style.opacity = "1";
    }

    const disableEl = (element) => {
        element.style.opacity = "0";
    }

    cards.map(c => {
        const imgContainer = document.createElement("div")
        imgContainer.className = "container text-center portfolio-image space-y-4";
        imgContainer.style = `background-image: url(${c.img}); background-size: contain; background-position: center;`;


        const descriptionElement = document.createElement("p")
        descriptionElement.className = "portfolio-text";
        descriptionElement.style.opacity = "0";
        descriptionElement.textContent = currentLanguage === "es" ? c.esDesc : c.enDesc;

        imgContainer.onmouseenter = () => {
            enableEl(descriptionElement);
            imgContainer.classList.add("bg-gray-100", "transform", "scale-105", "transition-all", "duration-300");
        }
        imgContainer.onmouseleave = () => {
            disableEl(descriptionElement);
            imgContainer.classList.remove("bg-gray-100", "transform", "scale-105", "transition-all", "duration-300");
        }

        imgContainer.appendChild(descriptionElement);
        

        return imgContainer;
    }).forEach(i => grid.appendChild(i));

    return portfolioSectionElement;
}

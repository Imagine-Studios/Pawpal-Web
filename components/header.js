function createHeader() {
    const currentLanguage = sessionStorage.getItem("language") || "en";

    const headerElement = document.createElement("header");
    headerElement.className = "bg-white shadow sticky top-0 z-50";
    
    const container = document.createElement("div");
    container.className = "container mx-auto px-4 py-4 flex items-center justify-between";
    
    const logoLink = document.createElement("a");
    logoLink.href = currentLanguage === "es" ? "/es/index.html" : "/";
    
    const logoImg = document.createElement("img");
    logoImg.src = "/assets/images/oru-logo.png";
    logoImg.alt = "Oru Studio Logo";
    logoImg.className = "h-10";
    logoImg.loading = "eager";
    
    logoLink.appendChild(logoImg);
    container.appendChild(logoLink);
    
    const nav = document.createElement("nav");
    nav.className = "space-x-6";
    
    const navItems = [
        { href: currentLanguage === "es" ? "/es/index.html#portfolio" : "/index.html#portfolio", text: "Portfolio" },
        { href: currentLanguage === "es" ? "/es/index.html#about" : "/index.html#about", text: "About" },
        { href: currentLanguage === "es" ? "/es/index.html#contact" : "/index.html#contact", text: "Contact" },
        { href: `/${currentLanguage}/privacy-policy.html`, text: "Privacy" }
    ];
    
    navItems.forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.className = "text-gray-600 hover:text-blue-600";
        a.textContent = item.text;
        nav.appendChild(a);
    });
    
    container.appendChild(nav);
    
    const langDiv = document.createElement("div");
    langDiv.className = "space-x-2";
    
    const esLink = document.createElement("a");
    esLink.href = "/es/index.html";
    esLink.className = "px-2 py-1 border rounded";
    esLink.textContent = "ES";
    
    const enLink = document.createElement("a");
    enLink.href = "/";
    enLink.className = "px-2 py-1 border rounded bg-gray-100";
    enLink.textContent = "EN";
    
    langDiv.appendChild(esLink);
    langDiv.appendChild(enLink);
    
    container.appendChild(langDiv);
    headerElement.appendChild(container);

    return headerElement;
}

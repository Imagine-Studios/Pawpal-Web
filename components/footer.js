function createFooter() {
    const footerElement = document.createElement("footer");
    footerElement.className = "bg-gray-800 text-gray-400 py-8";

    const container = document.createElement("div");
    container.className = "container mx-auto px-4";
    
    const flexDiv = document.createElement("div");
    flexDiv.className = "flex flex-col md:flex-row justify-between items-center";
    const linksDiv = document.createElement("div");
    linksDiv.className = "space-x-4 mb-4 md:mb-0";
    
    const privacyLink = document.createElement("a");
    privacyLink.href = "/en/privacy-policy.html";
    privacyLink.className = "hover:text-white";
    privacyLink.textContent = "Privacy";
    linksDiv.appendChild(privacyLink);

    const contactLink = document.createElement("a");
    contactLink.href = "#contact";
    contactLink.className = "hover:text-white";
    contactLink.textContent = "Contact";
    linksDiv.appendChild(contactLink);
    
    const esLink = document.createElement("a");
    esLink.href = "/es/index.html";
    esLink.className = "hover:text-white";
    esLink.textContent = "ES";
    linksDiv.appendChild(esLink);
    
    flexDiv.appendChild(linksDiv);
    
    const socialDiv = document.createElement("div");
    socialDiv.className = "space-x-4 text-xl";
    
    const socialLinks = [
        { href: "PLACEHOLDER_IG", label: "Instagram", iconClass: "fab fa-instagram", hoverClass: "hover:text-pink-500" },
        { href: "PLACEHOLDER_TW", label: "X (Twitter)", iconClass: "fab fa-twitter", hoverClass: "hover:text-blue-400" },
        { href: "PLACEHOLDER_LI", label: "LinkedIn", iconClass: "fab fa-linkedin", hoverClass: "hover:text-blue-700" },
        { href: "PLACEHOLDER_YT", label: "YouTube",
            iconClass: "fab fa-youtube", hoverClass: "hover:text-red-600" },
        { href: "PLACEHOLDER_FB", label: "Facebook", iconClass: "fab fa-facebook", hoverClass: "hover:text-blue-800" }
    ];
    
    socialLinks.forEach(linkInfo => {
        const a = document.createElement("a");
        a.href = linkInfo.href;
        a.setAttribute("aria-label", linkInfo.label);
        a.className = linkInfo.hoverClass;
        
        const icon = document.createElement("i");
        icon.className = linkInfo.iconClass;
        a.appendChild(icon);
        
        socialDiv.appendChild(a);
    }
    );
    
    flexDiv.appendChild(socialDiv);
    container.appendChild(flexDiv);
    
    const copyright = document.createElement("p");
    copyright.className = "mt-4 text-center text-sm";
    copyright.textContent = "© 2025 Oru Studio. All rights reserved.";
    container.appendChild(copyright);
    footerElement.appendChild(container);
    return footerElement;
}

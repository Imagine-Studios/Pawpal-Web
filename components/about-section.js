function createAboutSection() {
  const currentLanguage = sessionStorage.getItem("language") || "en";

  const aboutSectionElement = document.createElement('section');
  aboutSectionElement.id = 'about';
  aboutSectionElement.className = 'py-16 bg-white';

  const containerDiv = document.createElement('div');
  containerDiv.className = 'container mx-auto px-4 text-center';
  aboutSectionElement.appendChild(containerDiv);

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold mb-4';
  heading.textContent = currentLanguage === 'es' ? 'Sobre Oru Studio' : 'About Oru Studio';
  containerDiv.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.className = 'text-gray-700 max-w-2xl mx-auto';
  const englishText = 'Indie studio focused on cozy mobile simulators. We craft accessible, highly polished experiences.';
  const spanishText = 'Estudio independiente enfocado en simuladores móviles acogedores. Creamos experiencias accesibles y altamente pulidas.';
  paragraph.textContent = currentLanguage === 'es' ? spanishText : englishText;
  containerDiv.appendChild(paragraph);
  
  return aboutSectionElement;
}

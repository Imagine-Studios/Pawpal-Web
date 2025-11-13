function createContactSection() {
  const currentLanguage = sessionStorage.getItem("language") || "en";

  const contactSectionElement = document.createElement('section');
  contactSectionElement.id = 'contact';
  contactSectionElement.className = 'py-16';
  
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container mx-auto px-4 text-center';
  contactSectionElement.appendChild(containerDiv);

  const heading = document.createElement('h2');
  heading.className = 'text-2xl font-bold mb-4';
  heading.textContent = currentLanguage === 'es' ? 'Contacto' : 'Contact';;
  containerDiv.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.className = 'mb-6';
  const mailElement = document.createElement('a');
  mailElement.className = 'text-blue-600 hover:underline';
  mailElement.href = 'mailto:support@oru.studio';
  mailElement.textContent = 'support@oru.studio';
  const englishText = `Press, partnerships or support? Email us: ${mailElement.outerHTML}`;
  const spanishText = `¿Prensa, asociaciones o soporte? Envíanos un correo electrónico: ${mailElement.outerHTML}`;
  paragraph.innerHTML = currentLanguage === 'es' ? spanishText : englishText;
  containerDiv.appendChild(paragraph);
  
  return contactSectionElement;
}

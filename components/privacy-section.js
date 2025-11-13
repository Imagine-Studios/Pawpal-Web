function createPrivacySection() {
  const currentLanguage = sessionStorage.getItem("language") || "en";

  const privacySectionElement = document.createElement('section');
  privacySectionElement.id = 'privacy';
  privacySectionElement.className = 'py-16 bg-white border-t';

  const containerDiv = document.createElement('div');
  containerDiv.className = 'container mx-auto px-4 max-w-4xl text-center';
  privacySectionElement.appendChild(containerDiv);

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold mb-4';
  heading.textContent = currentLanguage === 'es' ? 'Politica de privacidad' : 'Privacy Policy';
  containerDiv.appendChild(heading);

  const linkParagraph = document.createElement('a');
  linkParagraph.className = 'text-sm text-gray-500 mb-6';
  const spanishText = 'Lee nuestra Política de Privacidad completa aquí.';
  const englishText = 'Read our full Privacy Policy here.';
  linkParagraph.textContent = currentLanguage === 'es' ? spanishText : englishText;
  linkParagraph.href = currentLanguage === 'es' ? '/es/privacy-policy.html' : '/en/privacy-policy.html';
  containerDiv.appendChild(linkParagraph);

  return privacySectionElement;
}

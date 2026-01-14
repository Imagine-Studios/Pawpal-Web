
  
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
    heading.textContent = currentLanguage === 'es' ? 'Contacto' : 'Contact';
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

    // --- Account deletion section (REQUIRED BY GOOGLE PLAY) ---
    const deletionTitle = document.createElement('h3');
    deletionTitle.className = 'text-xl font-semibold mt-10 mb-4';
    deletionTitle.textContent =
      currentLanguage === 'es'
        ? 'Eliminación de cuenta y datos'
        : 'Account and data deletion';

    const deletionText = document.createElement('p');
    deletionText.className = 'mb-4 text-sm';

    const deletionTextES = `
    Para solicitar la eliminación de tu cuenta y de los datos asociados al juego <strong>PawPal</strong>,
    envía un correo electrónico a ${mailElement.outerHTML} indicando:
    <br><br>
    • Nombre del juego: PawPal<br>
    • Plataforma: Android<br>
    • ID de jugador (si está disponible)
    <br><br>
    Eliminaremos los datos de progreso guardados en la nube y los identificadores asociados.
    Algunos datos podrán conservarse durante el tiempo requerido por obligaciones legales
    (por ejemplo, registros de compras).
  `;

    const deletionTextEN = `
    To request deletion of your account and data associated with the game <strong>PawPal</strong>,
    please email ${mailElement.outerHTML} and include:
    <br><br>
    • Game name: PawPal<br>
    • Platform: Android<br>
    • Player ID (if available)
    <br><br>
    We will delete cloud-saved progress and associated identifiers.
    Some data may be retained as required by legal obligations
    (for example, purchase records).
  `;

    deletionText.innerHTML = currentLanguage === 'es' ? deletionTextES : deletionTextEN;

    containerDiv.appendChild(deletionTitle);
    containerDiv.appendChild(deletionText);

    return contactSectionElement;
  }


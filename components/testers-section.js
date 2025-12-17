(() => {
    const html = `
  <section id="testers" class="max-w-4xl mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-3">Únete a la beta (Testers)</h2>
      <p class="text-gray-600 mb-6">
          Déjanos tus datos y te avisamos cuando esté disponible.
      </p>

      <div style="position:relative;width:100%;padding-top:120%;">
          <iframe
              src="https://forms.gle/TwyNJNybJEkCNhKw5"
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    
  const contact = document.querySelector("#contact");
  if (contact) {
    contact.insertAdjacentHTML("afterend", html);
    return;
  }

      <!-- Opcional: enlace directo por si el iframe falla -->
      <div class="mt-4">
        <a class="underline text-blue-600"
           href="https://docs.google.com/forms/d/e/1FAIpQLScCsTPpCIodLeDASjTwn1HLHsAFUH6Xan9XLopOw7yU2xYoAg/viewform?usp=header"
           target="_blank" rel="noopener">
          Abrir formulario en una pestaña nueva
        </a>
      </div>
  </section>
  `;

    document.body.insertAdjacentHTML("beforeend", html);
})();

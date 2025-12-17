(() => {
    const html = `
  <section id="testers" class="max-w-4xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-3">Únete a la beta (Testers)</h2>
    <p class="text-gray-600 mb-6">
      Déjanos tus datos y te avisamos cuando esté disponible.
    </p>

    <div style="position:relative;width:100%;padding-top:120%;">
      <iframe
        src="https://forms.gle/VmtTST8L1hY4CJfV8"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
  `;

    // 1) Intenta insertarlo justo después del contact
    const contact = document.querySelector("#contact");
    if (contact) {
        contact.insertAdjacentHTML("afterend", html);
        return;
    }

    // 2) Fallback: al final de la página
    document.body.insertAdjacentHTML("beforeend", html);
})();

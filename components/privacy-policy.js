function createPrivacyContent(contents) {
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.className = "text-3xl font-bold mb-2";
    title.innerHTML = contents.title;
    container.appendChild(title);

    const lastUpdated = document.createElement("p");
    lastUpdated.className = "text-sm text-gray-500 mb-6";
    lastUpdated.textContent = `Last updated: ${contents.lastUpdated}`;
    container.appendChild(lastUpdated);

    const note = document.createElement("p");
    note.className = "mb-4";
    note.innerHTML = contents.note;
    container.appendChild(note);

    for (const sectionKey in contents.sections) {
        const section = contents.sections[sectionKey];

        const sectionTitle = document.createElement("h2");
        sectionTitle.className = "text-xl font-semibold mt-8 mb-2";
        sectionTitle.textContent = section.title;
        container.appendChild(sectionTitle);

        if (section.note) {
            const sectionNote = document.createElement("p");
            sectionNote.className = "mb-4";
            sectionNote.textContent = section.note;
            container.appendChild(sectionNote);
        }

        if (section.smallNote) {
            const sectionSmallNote = document.createElement("p");
            sectionSmallNote.className = "mb-4 text-sm";
            sectionSmallNote.innerHTML = section.smallNote;
            container.appendChild(sectionSmallNote);
        }

        if (section.paragraphs) {
            section.paragraphs.forEach(paragraphText => {
                const paragraph = document.createElement("p");
                paragraph.className = "mb-4";
                paragraph.innerHTML = paragraphText;
                container.appendChild(paragraph);
            });
        }

        if (section.list) {
            const ul = document.createElement("ul");
            ul.className = "list-disc list-inside mb-4";
            section.list.forEach(itemText => {
                const li = document.createElement("li");
                li.innerHTML = itemText;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }
    }

    return container;
}

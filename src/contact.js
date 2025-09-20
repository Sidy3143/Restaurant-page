export function loadContact(content) {
    const contact = document.createElement("div");

    contact.id = "about";
    contact.innerHTML = `
                        <p>Contact us. We'll be delighted to have you.</p>
                        `;

    content.appendChild(contact);
};
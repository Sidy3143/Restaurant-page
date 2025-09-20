export function loadMenu(content){ 
    const menu = document.createElement("div");

    menu.id = "menu";
    menu.innerHTML = `<h2>Our Menu</h2>
                <div>
                    <h3> Pizza </h3>
                    <p>Price : 2$</p>
                </div>
                <div>
                    <h3> Sandwich </h3>
                    <p>Price : 1.5$</p>
                </div>
                <div>
                    <h3> Tacos </h3>
                    <p>Price : 4$</p>
                </div>
                <div>
                    <h3> Couscous </h3>
                    <p>Price : 5$</p>
                </div>`;

    content.appendChild(menu);
};
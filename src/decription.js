import restaurantImg from "../restaurant.jpg";

export function loadHome(content) {

    const img = document.createElement("img");
    const description = document.createElement("div");

    img.src = restaurantImg;
    img.alt = "Restaurant Page";

    description.id = "description";
    description.textContent = `Welcome to La Table Épicée, a cozy and modern restaurant that blends comfort with creativity. 
                            Our menu celebrates fresh, locally sourced ingredients and transforms them into flavorful dishes inspired by both traditional and contemporary cuisine. 
                                Whether you’re craving a hearty classic or something adventurous, our chefs craft every plate with care and passion. 
                                The warm, inviting atmosphere makes it the perfect spot for a casual lunch, a family dinner, or a special night out with friends. 
                                With a focus on quality, hospitality, and unforgettable flavors, La Table Épicée isn’t just a place to eat—it’s an experience that brings people together around food.`;
    
    description.style.margin = "30px";

    content.appendChild(img);
    content.appendChild(description);
};

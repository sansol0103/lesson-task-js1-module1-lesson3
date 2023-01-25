const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

const container = document.querySelector(".container");

let html = "";

for (let i = 0; i < products.length; i++) {
    let displayPrice ="Unavailable";

    if (products[i].price) {
        displayPrice = products[i].price;
    }

    let color = "green"; 

    if(products[i].soldOut) {
        color ="red";
    }

    html += `<div class="product">
                <h4 style="color: ${color}">${products[i].name}</h4>
                <div>Price: ${displayPrice}</div>
            </div>`;
}

container.innerHTML = html;
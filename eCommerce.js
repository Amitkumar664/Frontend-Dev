// q6-products.js
// ----------------------------------------------
// Q6 – E-Commerce Dashboard: Product Card Fetcher
// ----------------------------------------------

// MAIN SOLUTION (async/await version)
async function fetchProducts() {
  const url = "https://fakestoreapi.com/products";

  try {
    console.log("Fetching product data...");

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network error while fetching products");
    }

    const products = await response.json();

    products.forEach((item) => {
      console.log(`\nProduct: ${item.title}`);
      console.log(`Price: $${item.price}`);
      console.log(`Image: ${item.image}`);
    });

  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error("Error:", error.message);
  }
}

// Run the main function
fetchProducts();


// ---------------------------------------------------------
// OPTIONAL VERSION – Using Promise .then()
// (Not required but allowed in assignment)
// ---------------------------------------------------------

function fetchProductsThenVersion() {
  const API = "https://fakestoreapi.com/products";

  fetch(API)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((product) => {
        console.log(`\nProduct: ${product.title}`);
        console.log(`Price: $${product.price}`);
        console.log(`Image: ${product.image}`);
      });
    })
    .catch(() => {
      console.log("Failed to load products. Please try again.");
    });
}

// Uncomment to test the .then() version
// fetchProductsThenVersion();


// ---------------------------------------------------------
// BONUS (OPTIONAL): Create HTML Product Cards
// (Use only if HTML page is available)
// ---------------------------------------------------------

async function loadCards() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    const container = document.getElementById("products");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "200px";

      card.innerHTML = `
        <img src="${item.image}" width="150" />
        <h3>${item.title}</h3>
        <p>Price: $${item.price}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.log("Failed to load products. Please try again.");
  }
}

// Uncomment if using HTML:
// loadCards();


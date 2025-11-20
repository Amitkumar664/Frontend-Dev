async function loadData() {
    const response = await fetch("2");
    const data = await response.json();
    const container = document.getElementById("container");

    data.forEach(function(item) {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${item.image}">
            <h3>${item.title}</h3>
            <p>${item.views}</p>
        `;

        container.appendChild(div);
    });
}

loadData();
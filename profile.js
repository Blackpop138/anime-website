const favs = JSON.parse(localStorage.getItem("favorites")) || [];
const container = document.getElementById("favorites");

favs.forEach(a => {
const div = document.createElement("div");
div.innerHTML = `<img src="${a.image}"><p>${a.title}</p>`;
container.appendChild(div);
});
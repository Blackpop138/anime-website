const container = document.getElementById("anime-container");

fetch("https://api.jikan.moe/v4/top/anime")
.then(res => res.json())
.then(data => {
data.data.slice(0, 12).forEach(anime => {
const card = document.createElement("div");
card.className = "anime-card";

card.innerHTML = `
<img src="${anime.images.jpg.image_url}">
<h3>${anime.title}</h3>
`;

container.appendChild(card);
});
});
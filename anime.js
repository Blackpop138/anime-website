const id = new URLSearchParams(window.location.search).get("id");

fetch(`https://api.jikan.moe/v4/anime/${id}`)
.then(res => res.json())
.then(data => {
document.getElementById("title").textContent = data.data.title;
document.getElementById("poster").src =
data.data.images.jpg.image_url;
document.getElementById("description").textContent =
data.data.synopsis;
});

fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
.then(res => res.json())
.then(data => {
const list = document.getElementById("episodes");
data.data.forEach(ep => {
const li = document.createElement("li");
li.textContent = `Episode ${ep.mal_id}: ${ep.title}`;
list.appendChild(li);
});
});
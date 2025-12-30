let page = 1;
let loading = false;

async function loadAnime() {
if (loading) return;
loading = true;

const res = await fetch(
`fetch("http://localhost:3000/api/anime/top?page=1")
const data = await res.json();

data.data.forEach(anime => createCard(anime));
page++;
loading = false;
}

function createCard(anime) {
const card = document.createElement("div");
card.className = "anime-card";
card.innerHTML = `
<img src="${anime.images.jpg.image_url}">
<h3>${anime.title}</h3>
`;
card.onclick = () => {
window.location.href = `anime.html?id=${anime.mal_id}`;
};
container.appendChild(card);
}

window.addEventListener("scroll", () => {
if (
window.innerHeight + window.scrollY >=
document.body.offsetHeight - 200
) {
loadAnime();
}
});

loadAnime();
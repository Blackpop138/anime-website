import express from "express";
import cors from "cors";
import animeRoutes from "./routes/anime.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/api/anime", animeRoutes);

app.get("/", (req, res) => {
res.send("Anime API is running");
});

app.listen(PORT, () => {
console.log(`Anime API running on http://localhost:${PORT}`);
});
import express from "express";
import axios from "axios";

const router = express.Router();

/* GET top anime */
router.get("/top", async (req, res) => {
try {
const page = req.query.page || 1;
const response = await axios.get(
`https://api.jikan.moe/v4/top/anime?page=${page}`
);
res.json(response.data);
} catch (err) {
res.status(500).json({ error: "Failed to fetch top anime" });
}
});

/* GET anime by ID */
router.get("/:id", async (req, res) => {
try {
const response = await axios.get(
`https://api.jikan.moe/v4/anime/${req.params.id}`
);
res.json(response.data);
} catch (err) {
res.status(500).json({ error: "Failed to fetch anime details" });
}
});

export default router;
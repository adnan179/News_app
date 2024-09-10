const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = 4000;

// GNews API Key
const GNEWS_API_KEY = process.env.GNEWS_API_KEY_2;
const Base_URL = `https://gnews.io/api/v4`;

app.use(express.json());

app.use(cors());
//helper functions
//function to handle query requests
const ConstructUrl = (
  endpoint,
  query = null,
  category = "general",
  lang = "en",
  country = "in",
  inFields = "title"
) => {
  let url = `${Base_URL}/${endpoint}?apikey=${GNEWS_API_KEY}&sortby=publishedAt`;

  if (query) url += `&q="${query}"`;
  if (category) url += `&category=${category}`;
  if (lang) url += `&lang=${lang}`;
  if (country) url += `&country=${country}`;
  if (inFields) url += `&in=${inFields}`;

  return url;
};

// Route to fetch top-headlines
app.get("/news/top-headlines", async (req, res) => {
  const { category = "general", country = "any", lang = "any" } = req.query;

  try {
    const url = ConstructUrl("top-headlines", null, category, lang, country);
    const response = await axios.get(url);

    if (response.status === 200) {
      const articles = response.data.articles;

      res.json({
        articles: articles,
      });
    } else {
      res
        .status(response.status)
        .json({ message: "Error fetching top headlines" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching top headlines", error: err.message });
    console.log(err.message);
  }
});

//route to search news articles
app.get("/news/search", async (req, res) => {
  const {
    query,
    category = "general",
    lang,
    country,
    inFields = "title",
  } = req.query;

  if (!query) {
    return res
      .status(400)
      .json({ message: "Query parameter 'q' is required." });
  }

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = ConstructUrl(
      "search",
      encodedQuery,
      category,
      lang,
      country,
      inFields
    );
    const response = await axios.get(url);
    const articles = response.data.articles;

    res.json({
      total: articles.length,
      articles: articles,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error getting requested article/search results",
      error: err.message,
    });
    console.log(err.message);
  }
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

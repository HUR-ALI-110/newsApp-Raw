"use client";
import { categories } from "@/constants";
import React, { useState, useEffect } from "react";
import NewsList from "./_compoenents/NewsList";
import next from "next";

function Header() {
  const [news, setNews] = useState([]); // Initialize news state as an empty array

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&language=en&from=2024-02-27&sortBy=publishedAt&apiKey=1321806314974cf49765390937fa33ca",
          { next: { revalidate: 60 } }
        );
        const data = await response.json();
        setNews(data.articles); // Assuming the articles property contains the news data
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Header;

"use client";
import { useEffect } from "react";
import "./globals.css";
// 8d084db
export default function Home() {
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8d084db";
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search[0].Title);
  };
  useEffect(() => {
    searchMovies("uncharted");
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
}

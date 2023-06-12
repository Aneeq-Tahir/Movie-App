"use client";
import Image from "next/image";
import MovieCard from "@/components/MovieCard";
import { useState } from "react";

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8d084db";
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies(searchTerm);
  // }, [searchTerm]);

  return (
    <>
      {/* Header  */}
      <h1>Movie App</h1>
      <div className="search">
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search Movies or Series"
          value={searchTerm}
          type="search"
        />
        <Image
          onClick={() => {
            searchMovies(searchTerm);
          }}
          src={"/search.svg"}
          alt="search"
          width={35}
          height={35}
        />
      </div>
      {/* Movie Result Section*/}
      <div className="container">
        {movies?.length > 0 ? (
          movies.map((mov) => {
            return <MovieCard key={mov} movie={mov} />;
          })
        ) : (
          <h2>No Movies/Series found</h2>
        )}
      </div>
    </>
  );
}

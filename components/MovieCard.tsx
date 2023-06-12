import Image from "next/image";
import { Movie } from "@/app/page";
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function MovieCard({
  movie
}: {
  movie: Movie;
}) {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current
    gsap.from(element, {y: 50, opacity: 1, duration: 1, ease: 'power3.out()'})
  })

  return (
    <>
      <div ref={elementRef} className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <Image
            className="img"
            src={
              movie.Poster === "N/A"
                ? "https://via.placeholder.com/400"
                : movie.Poster
            }
            alt={movie.Title}
            width={1000}
            height={600}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </>
  );
}

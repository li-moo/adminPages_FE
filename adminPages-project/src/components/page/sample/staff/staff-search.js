import { useState, useEffect } from "react";

const API_KEY = "b5cb501da7ea3ecb6172d76bcbe418e2";

export default function StaffSearch() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
          <p>{movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
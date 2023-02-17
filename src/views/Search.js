import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("query");

  const [movies, setMovies] = useState();
  const [people, setPeople] = useState();
  const [tvSeries, setTvSeries] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/multi?api_key=c28b09251184479f999a2baafd615444&query=${query}`
    )
      .then((response) => {
        console.log(response.data.results);
        setMovies(
          response.data.results.filter(
            (result) => result.media_type === "movie"
          )
        );
        setPeople(
          response.data.results.filter(
            (result) => result.media_type === "person"
          )
        );
        setTvSeries(
          response.data.results.filter((result) => result.media_type === "tv")
        );
      })
      .catch(() => setError("Something went wrong!"))
      .finally(() => setLoading(false));
  }, [query]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {movies.length && (
        <section>
          <h1>Movies</h1>
          {movies.map((movie) => (
            <h2>{movie.title}</h2>
          ))}
        </section>
      )}

      {people.length && (
        <section>
          <h1>People</h1>
          {people.map((person) => (
            <h2>{person.name}</h2>
          ))}
        </section>
      )}
    </>
  );
};

export default Search;

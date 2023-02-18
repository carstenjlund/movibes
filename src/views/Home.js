import axios from "axios";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedMovie from "../components/FeaturedMovie";
import MoviesSection from "../components/MoviesSection";
import SearchForm from "../components/SearfchForm";

export const homeLoader = async () => {
  let responses = await Promise.all([
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?language=en&api_key=c28b09251184479f999a2baafd615444"
    ),
    axios(
      "https://api.themoviedb.org/3/tv/popular?language=en&api_key=c28b09251184479f999a2baafd615444"
    ),
    axios(
      "https://api.themoviedb.org/3/movie/upcoming?language=en&api_key=c28b09251184479f999a2baafd615444"
    ),
  ]);
  return responses.map((response) => response.data.results);
};

const Home = () => {
  const movieLists = useLoaderData();
  console.log(movieLists);
  return (
    <>
      <SearchForm />
      <FeaturedMovie />

      <MoviesSection headline="Movies" movies={movieLists[0]} type="movie" />
      <MoviesSection headline="TV-Series" movies={movieLists[1]} type="tv" />
      <MoviesSection headline="Upcoming" movies={movieLists[2]} type="movie" />
    </>
  );
};

export default Home;

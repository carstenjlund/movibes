import FeaturedMovie from "../components/FeaturedMovie";
import MoviesSection from "../components/MoviesSection";
import SearchForm from "../components/SearfchForm";

const Home = () => {
  return (
    <>
      <SearchForm />
      <FeaturedMovie />

      <MoviesSection
        headline="Movies"
        url="https://api.themoviedb.org/3/movie/top_rated?language=en&api_key=c28b09251184479f999a2baafd615444"
        type="movie"
      />
      <MoviesSection
        headline="TV-Series"
        url="https://api.themoviedb.org/3/tv/popular?language=en&api_key=c28b09251184479f999a2baafd615444"
        type="tv"
      />
    </>
  );
};

export default Home;

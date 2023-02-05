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
        url="https://api.themoviedb.org/3/movie/now_playing?language=en&api_key=c28b09251184479f999a2baafd615444"
        type="movie"
      />

      <MoviesSection
        headline="TV-Series"
        url="https://api.themoviedb.org/3/tv/popular?language=da&api_key=c28b09251184479f999a2baafd615444"
        type="tv"
      />
      <MoviesSection
        headline="Upcoming"
        url="https://api.themoviedb.org/3/movie/upcoming?language=da&api_key=c28b09251184479f999a2baafd615444"
        type="movie"
      />
    </>
  );
};

export default Home;

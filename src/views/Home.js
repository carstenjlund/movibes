import FeaturedMovie from "../components/FeaturedMovie";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <form className="flex mb-8">
        <button className="bg-neutral-800 pr-4 pl-8 rounded-l-full">
          <FaSearch color="gray" />
        </button>

        <input
          className="bg-neutral-800 p-4 rounded-r-full color-neutral-200 basis-full focus:outline-none"
          type="text"
          placeholder="Search for movies, TV shows..."
        />
      </form>

      <FeaturedMovie />

    </>
  );
};

export default Home;

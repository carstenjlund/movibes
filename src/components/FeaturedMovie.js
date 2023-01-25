import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedMovie = () => {
  const [featured, setFeatured] = useState();
  featured && console.log(featured);
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/trending/movie/day?language=en&api_key=c28b09251184479f999a2baafd615444"
    ).then((response) => setFeatured(response.data.results[1]));
  }, []);
  return (
    featured && (
      <section
        className="relative"
        style={{ width: "56rem", aspectRatio: 2.2 }}
      >
        <div className="absolute left-0 bottom-0 z-10 h-1/2 w-full rounded-b-3xl bg-gradient-to-t from-gray-600 to-transparent"></div>
        <div className="absolute bottom-8 left-8 z-20 w-[32rem]">
          <p className="m-0 font-bold text-white">{featured.overview}</p>
        </div>
        <img
          className="h-full w-full rounded-3xl object-cover"
          src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
          alt=""
        />
      </section>
    )
  );
};

export default FeaturedMovie;

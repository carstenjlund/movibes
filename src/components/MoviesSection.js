/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flickity from "react-flickity-component";
import "./flickity.css";

import PulseLoader from "react-spinners/PulseLoader";
import Card from "./Card";
import useAxios from "../customHooks/useAxios";
import { Link } from "react-router-dom";

const MoviesSection = ({ url, headline, type }) => {
  const { data: movies, loading } = useAxios(url);
  movies && console.log(movies);

  const styleHeadline = css`
    color: white;
    margin-bottom: 0.75rem;
  `;
  return loading ? (
    <PulseLoader />
  ) : (
    <section>
      <h2 css={styleHeadline}>{headline}</h2>
      <Flickity
        options={{
          groupCells: true,
          prevNextButtons: true,
          pageDots: false,
          contain: true,
        }}
        reloadOnUpdate
        static
      >
        {movies.results.map((movie) => (
          <Link to={`/details/${type}/${movie.id}`}>
            <Card data={movie} />
          </Link>
        ))}
      </Flickity>
    </section>
  );
};

export default MoviesSection;

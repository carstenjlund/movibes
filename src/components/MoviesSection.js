/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flickity from "react-flickity-component";
import "./flickity.css";

import Card from "./Card";
import { Link } from "react-router-dom";

const MoviesSection = ({ movies, headline, type }) => {
  const styleHeadline = css`
    color: white;
    margin-bottom: 0.75rem;
  `;
  return (
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
        {movies.map((movie) => (
          <Link key={movie.id} to={`/details/${type}/${movie.id}`}>
            <Card data={movie} />
          </Link>
        ))}
      </Flickity>
    </section>
  );
};

export default MoviesSection;

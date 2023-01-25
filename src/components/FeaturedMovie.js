/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

  const style = css`
    position: relative;
    width: 56rem;
    aspect-ratio: 2.2;
    border-radius: 1.5rem;
    overflow: hidden;
  `;
  const styleOverlay = css`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 10;
    background: linear-gradient(
      0deg,
      rgba(30, 41, 59, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    mix-blend-mode: multiply;
  `;
  const styleTextBox = css`
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    z-index: 20;
    width: 32rem;
  `;
  const styleParagraph = css`
    margin: 0;
    font-weight: bold;
    color: white;
  `;
  const styleImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return (
    featured && (
      <section css={style}>
        <div css={styleOverlay}></div>
        <div css={styleTextBox}>
          <p css={styleParagraph}>{featured.overview}</p>
        </div>
        <img
          css={styleImage}
          src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
          alt=""
        />
      </section>
    )
  );
};

export default FeaturedMovie;

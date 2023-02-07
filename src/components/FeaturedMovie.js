/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedMovie = () => {
  const [featured, setFeatured] = useState();
  const [backdrop, setBackdrop] = useState();
  const [reloadImage, setReloadImage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (reloadImage) {
      let randomMovie = Math.floor(Math.random() * 20);
      axios(
        "https://api.themoviedb.org/3/movie/popular?language=en&api_key=c28b09251184479f999a2baafd615444"
      )
        .then((response) => setFeatured(response.data.results[randomMovie]))
        .finally(() => setReloadImage(false));
    }
  }, [reloadImage]);

  useEffect(() => {
    if (featured) {
      axios(
        `https://api.themoviedb.org/3/movie/${featured.id}/images?language=en&api_key=c28b09251184479f999a2baafd615444`
      )
        .then((response) => {
          if (response.data.backdrops[0] !== undefined) {
            setBackdrop(response.data.backdrops[0]);
          } else {
            setReloadImage(true);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [featured]);

  const style = css`
    position: relative;
    aspect-ratio: 16/9;
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
    width: 20rem;
  `;
  const styleParagraph = css`
    margin: 0;
    font-weight: 500;
    color: white;
  `;
  const styleImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return loading ? (
    <p>Loading...</p>
  ) : (
    <section css={style}>
      <div css={styleTextBox}></div>
      <Link to={`/details/movie/${featured.id}`}>
        <img
          css={styleImage}
          src={`https://image.tmdb.org/t/p/w1280${backdrop?.file_path}`}
          alt=""
        />
      </Link>
    </section>
  );
};

export default FeaturedMovie;

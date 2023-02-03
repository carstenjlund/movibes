/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Card = ({ data }) => {
  const style = css`
    width: 12rem;
    aspect-ratio: 0.7;
    border-radius: 1rem;
    margin-right: 1rem;
  `;
  const styleImg = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return (
    <div css={style}>
      <img
        css={styleImg}
        src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default Card;

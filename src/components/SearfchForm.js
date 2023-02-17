/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const style = css`
    display: flex;
    margin-bottom: 2rem;
    & button {
      background-color: rgb(38, 38, 38);
      padding: 0.5rem 1rem 0.5rem 2rem;
      border-radius: 2rem 0 0 2rem;
      border: none;
    }
    & input {
      color: rgb(200, 200, 200);
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      flex-basis: 100%;
      border-radius: 0 2rem 2rem 0;
      background-color: rgb(38, 38, 38);
      padding: 1rem;
      border: none;

      &:focus {
        outline: none;
      }
    }
  `;
  return (
    <form css={style} action="/search">
      <button>
        <FaSearch color="gray" />
      </button>

      <input
        type="search"
        name="query"
        placeholder="Search for movies, TV shows..."
      />
    </form>
  );
};

export default SearchForm;

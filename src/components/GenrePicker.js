/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import _ from "lodash";

const GenrePicker = () => {
  const [genres, setGenres] = useState();
  const [loading, setLoading] = useState(true);
  const [showItems, setShowItems] = useState(6);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=c28b09251184479f999a2baafd615444"
    )
      .then((response) => setGenres(response.data.genres))
      .finally(() => setLoading(false));
  }, []);

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const handleChange = () => {
    console.log("something changed");
    let values = getValues();
    console.log(values);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let values = getValues();

    _.map(values, (__, key) => {
      setValue(key, false);
    });

    console.log(getValues());
  };
  const handleShowAll = (e) => {
    e.preventDefault();
    showItems === genres.length ? setShowItems(6) : setShowItems(genres.length);
  };

  const style = css`
    background-color: #212121;
    color: white;
    padding: 1rem;
    border-radius: 2rem;
    & h2 {
      margin-top: 0;
    }
    & .formGroup,
    & h2 {
      display: flex;
      justify-content: space-between;
    }
  `;

  return loading ? null : (
    <>
      <form css={style} onChange={handleChange}>
        <h2>
          Categories<button onClick={handleClick}>uncheck all</button>
        </h2>

        {_.map(genres, (genre, index) => {
          if (index < showItems)
            return (
              <div className="formGroup">
                <label htmlFor={genre.name}>{genre.name}</label>
                <input
                  id={genre.name}
                  type="checkbox"
                  {...register(genre.name, { value: true })}
                />
              </div>
            );
        })}

        <button onClick={handleShowAll}>
          {showItems === genres.length ? "Show less..." : "Show more..."}
        </button>
      </form>
    </>
  );
};

export default GenrePicker;

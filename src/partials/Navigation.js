/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { FaFilm } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import NavigationLink from "../components/NavigationLink";

const Navigation = () => {
  const style = css`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  `;
  return (
    <nav css={style}>
      <NavigationLink to="/">
        <FaHome size="1.25rem" />
        Home
      </NavigationLink>
      <NavigationLink to="/movies">
        <FaFilm size="1.25rem" />
        Movies
      </NavigationLink>
      <NavigationLink to="/tv-series">
        <FaTv size="1.25rem" />
        TV-Series
      </NavigationLink>
      <NavigationLink to="/upcoming">
        <FaCalendarAlt size="1.25rem" />
        Upcoming
      </NavigationLink>
    </nav>
  );
};

export default Navigation;

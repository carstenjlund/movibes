import { FaFilm } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import NavigationLink from "../components/NavigationLink";
const Navigation = () => {
  const activeLink =
    "text-teal-400 p8 bg-teal-400 border-r-4 border-teal-400 bg-opacity-20 no-underline font-bold";
  const normalLink = "text-gray-400 no-underline";
  return (
    <nav className="mt-12 flex flex-col">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="inline-block flex gap-3 p-8 font-bold">
          <FaHome size="1.25rem" />
          Home
        </span>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="inline-block flex gap-3 p-8 font-bold">
          <FaFilm size="1.25rem" />
          Movies
        </span>
      </NavLink>
      <NavLink
        to="/tv-series"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="inline-block flex gap-3 p-8 font-bold">
          <FaTv size="1.25rem" />
          TV-Series
        </span>
      </NavLink>
      <NavLink
        to="/upcoming"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="inline-block flex gap-3 p-8 font-bold">
          <FaCalendarAlt size="1.25rem" />
          Upcoming
        </span>
      </NavLink>
    </nav>
  );
};

export default Navigation;

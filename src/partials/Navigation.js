import { FaFilm } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeLink =
    "border-r-4  no-underline border-teal-400 text-teal-400 p8 bg-teal-400 bg-opacity-20";
  const normalLink = "text-gray-400 no-underline";
  return (
    <nav className="flex flex-col mt-12">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="p-8 inline-block flex gap-3">
          <FaHome size="1.25rem" />
          Home
        </span>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="p-8 inline-block flex gap-3">
          <FaFilm size="1.25rem" />
          Movies
        </span>
      </NavLink>
      <NavLink
        to="/tv-series"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="p-8 inline-block flex gap-3">
          <FaTv size="1.25rem" />
          TV-Series
        </span>
      </NavLink>
      <NavLink
        to="/upcoming"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="p-8 inline-block flex gap-3">
          <FaCalendarAlt size="1.25rem" />
          Upcoming
        </span>
      </NavLink>
    </nav>
  );
};

export default Navigation;

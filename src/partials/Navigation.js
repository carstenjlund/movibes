/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useTheme } from "@emotion/react";
import {  NavLink } from "react-router-dom";

const Navigation = () => {
    const theme = useTheme()

    const styleNav = css`
        display: flex;
        flex-direction: column;
    `;

    const style = css`
        padding: 2rem;
        border-right: 4px solid #212121;
        color: ${theme.colors.something};
        font-weight: bold;
        text-decoration: none;
    `

    let activeStyle = {
        color: theme.colors.primary,
        backgroundColor: "#3dd2cd48",
        borderRight: `4px solid ${theme.colors.primary}`,
      };
    return ( 
        <nav css={styleNav}>
        <NavLink css={style} to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink>
        <NavLink css={style} to="/movies" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Movies</NavLink>
        <NavLink css={style} to="/tv-series" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Tv-series</NavLink>
        <NavLink css={style} to="/upcoming" style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Upcoming</NavLink>
    </nav>
     );
}
 
export default Navigation;
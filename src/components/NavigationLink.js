/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, to }) => {
  const theme = useTheme();
  const styles = css`
    padding: 2rem;
    color: gray;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    display: flex;

    &.active {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.primaryOpaque};
      border-right: 4px solid ${theme.colors.primary};
    }

    & svg {
      transform: translateY(0.125rem);
      margin-right: 0.75rem;
    }
  `;
  return (
    <NavLink css={styles} to={to}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;

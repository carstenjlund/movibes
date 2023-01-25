/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, to }) => {
  const styles = css`
    padding: 2rem;
    color: gray;

    &.active {
      color: teal;
      background-color: #0080806a;
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

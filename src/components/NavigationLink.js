/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NavLink } from "react-router-dom";

const NavigationLink = ({ children }) => {
  const styles = css`
    padding: 2rem;
    color: gray;

    &.active {
    }

    & svg {
      transform: translateY(0.125rem);
    }
  `;
  return <NavLink css={styles}>{children}</NavLink>;
};

export default NavigationLink;

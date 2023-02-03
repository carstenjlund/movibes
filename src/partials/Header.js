/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MdLogout } from "react-icons/md";

import Navigation from "./Navigation";
import OnlyTextButton from "../components/OnlyTextButton";
import Brand from "../components/Brand";

const Header = () => {
  const style = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #212121;
    border-radius: 0 1.5rem 1.5rem 0;
    position: sticky;
    top: 0;
  `;
  return (
    <header css={style}>
      <Brand className="brand-shadow">Movibes</Brand>
      <Navigation />
      <OnlyTextButton style={{ marginTop: "auto" }}>
        <MdLogout />
        logout
      </OnlyTextButton>
    </header>
  );
};

export default Header;

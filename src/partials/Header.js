/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Navigation from "./Navigation";
import { Brand } from "../components/Brand";
const Header = () => {

    const style = css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color:#212121;
        border-radius: 0 2.75rem 2.75rem 0;
    `;
    return ( <header css={style}>
        <Brand>movibes</Brand>
            <Navigation />
            <button>Logout</button>
    </header> );
}
 
export default Header;
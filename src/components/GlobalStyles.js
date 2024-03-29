/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { fontSizes, sizes } from "../themes/theme";
import { useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@400;500;600;700&display=swap");
        body {
          background-color: ${theme.colors.body};
          color: ${theme.colors.text};
          margin: 0;
          font-family: "Poppins", sans-serif;
        }
        #root {
          display: grid;
          grid-template-columns: 14.25rem 1fr 16rem;
        }
        main,
        footer {
          padding: 2.75rem 3rem 2.75rem 2rem;
        }
        footer {
          background-color: orange;
        }

        @media (max-width: 1000px) {
          #root {
            display: block;
          }

          footer {
            background-color: green;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;

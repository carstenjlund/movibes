/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { fontSizes, sizes } from "../themes/theme";
import { useTheme } from "@emotion/react";

const GlobalStyles = () => {
	const theme = useTheme();

	return (
		<Global
			styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:ital,wght@0,700;1,400&display=swap');
				body {
					background-color: ${theme.colors.body};
					color: ${theme.colors.text};
					margin: 0;
					font-family: 'Poppins', sans-serif;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
                #root {
                    display: grid;
                    grid-template-columns: 14.25rem 1fr;
                }
			`}
		/>
	);
};

export default GlobalStyles;

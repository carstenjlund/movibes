export const sizes = {
	small: "400px",
	medium: "700px",
	large: "960px",
	xlarge: "1200px",
};

export const fontSizes = {
	small: "0.75rem",
	medium: "1.25rem",
	large: "2rem",
};

export const theme = {
	light: {
		colors: {
			primary: "palevioletred",
			secondary: "lightblue",
			standard: "goldenrod",
			body: "palegoldenrod",
			text: "#424242",
		},
	},
	dark: {
		colors: {
			primary: "#3DD2CC",
			secondary: "darkblue",
			standard: "darkorange",
			body: "#191919",
			something: "#666666",
		},
	},
	btnSizes: {
		large: "1rem 1.5rem",
		small: "0.25rem 0.5rem",
		standard: "0.5rem 1rem",
	},
	breakpoints: {
		small: `@media (min-width: ${sizes.small})`,
		medium: `@media (min-width: ${sizes.medium})`,
		large: `@media (min-width: ${sizes.large})`,
		xlarge: `@media (min-width: ${sizes.xlarge})`,
	},
};


//3DD2CC
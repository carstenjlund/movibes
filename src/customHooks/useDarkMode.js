import { useState, useEffect } from "react";

const useDarkMode = () => {
	const [darkmode, setDarkmode] = useState(false);

	useEffect(() => {
		let myTheme =
			localStorage.getItem("darkmode") === "true"
				? true
				: localStorage.getItem("darkmode") === null &&
				  window.matchMedia("(prefers-color-scheme: dark)").matches
				? true
				: false;

		setDarkmode(myTheme);
	}, []);

	const handleToggle = () => {
		setDarkmode(!darkmode);
		localStorage.setItem("darkmode", !darkmode);
	};

	const resetTheme = () => {
		localStorage.removeItem("darkmode");
		setDarkmode(window.matchMedia("(prefers-color-scheme: dark)").matches);
	};

	return [darkmode, handleToggle, resetTheme];
};

export default useDarkMode;

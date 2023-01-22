import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import useDarkMode from "./customHooks/useDarkMode";
import { theme } from "./themes/theme";
import Header from "./partials/Header";

console.log("lighttheme: ", theme.light);
console.log("darktheme: ", theme.dark);

function App() {
    const [darkmode, handleToggle, resetTheme] = useDarkMode();

    return (
        <ThemeProvider theme={darkmode ? theme.dark : theme.light}>
            <Header />
            <main className="py-11 pr-12 pl-8">
                <Outlet />
            </main>
            <footer></footer>
        </ThemeProvider>
    );
}

export default App;

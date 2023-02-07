import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import useDarkMode from "./customHooks/useDarkMode";
import { theme } from "./themes/theme";
import Header from "./partials/Header";
import GlobalStyles from "./components/GlobalStyles";

console.log("lighttheme: ", theme.light);
console.log("darktheme: ", theme.dark);

function App() {
  const [darkmode, handleToggle, resetTheme] = useDarkMode();

  return (
    <ThemeProvider theme={darkmode ? theme.dark : theme.light}>
      <GlobalStyles />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;

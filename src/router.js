import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./views/Home";
import Movies from "./views/Movies";
import TvSeries from "./views/TvSeries";
import Upcoming from "./views/Upcoming";
import Details from "./views/Details";
import Search from "./views/Search";
import Login from "./views/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "tv-series",
        element: <TvSeries />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "/details/:type/:id",
        element: <Details />,
      },
      {
        path: "/results",
        element: <Details />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

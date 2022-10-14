import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Destination from "../Components/DestinationLayer";
import Home from "../Components/Home";
import Crew from "../Components/Crew";
import Technology from "../Components/Technology";

export const router = createBrowserRouter([
  {
    path: "/tourism-website",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "crew",
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
    ],
  },
]);

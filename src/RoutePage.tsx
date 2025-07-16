import { createBrowserRouter } from "react-router";
import Cleaning from "./pages/Cleaning";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/cleaning",
        Component: Cleaning,
      },
    ],
  },
]);

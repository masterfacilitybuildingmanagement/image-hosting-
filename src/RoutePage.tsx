import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

import { Garbage } from "./pages/Garbage";
import { Cleaning } from "./pages/Cleaning";

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
      {
        path: "/garbage",
        Component: Garbage,
      },
    ],
  },
]);

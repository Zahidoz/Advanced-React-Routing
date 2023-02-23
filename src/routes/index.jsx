import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../Pages/HomePage";
import { MainLayout } from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <h1>AboutPage</h1>,
      },
    ],
  },
  {
    path: "/ehmed",
    element: <h1>Ehmed</h1>,
  },
]);

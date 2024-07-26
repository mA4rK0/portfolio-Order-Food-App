import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import FormUsername from "../components/FormUsername";

import { GlobalContext } from "../context/globalStorage";
import { useContext } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/username",
        element: <FormUsername />,
      },
    ],
  },
]);

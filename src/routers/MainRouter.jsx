import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import FormUsername from "../components/FormUsername";
<<<<<<< HEAD
=======

import { GlobalContext } from "../context/globalStorage";
import { useContext } from "react";
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
<<<<<<< HEAD
        path: "username",
=======
        path: "/username",
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f
        element: <FormUsername />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

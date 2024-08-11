import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import FormUsername from "../components/FormUsername";
import AddMoreMoney from "../pages/AddMoreMoney";
import Menu from "../pages/Menu";
import AMenu from "../pages/A-Menu";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "username",
        element: <FormUsername />,
      },
      {
        path: "money",
        element: <AddMoreMoney />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:id",
        element: <AMenu />,
      },
    ],
  },
]);

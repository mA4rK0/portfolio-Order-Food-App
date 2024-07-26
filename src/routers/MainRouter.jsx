import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import FormUsername from "../components/FormUsername";
import AddMoreMoney from "../pages/AddMoreMoney";

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
        path: "username",
        element: <FormUsername />,
      },
      {
        path: "money",
        element: <AddMoreMoney />,
      },
    ],
  },
]);

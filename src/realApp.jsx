import { RouterProvider } from "react-router-dom";
import { router } from "./routers/MainRouter";

function RealApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RealApp;

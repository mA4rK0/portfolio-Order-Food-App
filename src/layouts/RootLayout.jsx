import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavLink to="/">🏠</NavLink>
      |
      <Outlet />
    </>
  );
}

export default RootLayout;

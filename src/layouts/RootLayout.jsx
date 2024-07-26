import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function RootLayout() {
  const [isBottom, setAtBottom] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setAtBottom(atBottom);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Outlet />
      <nav className={`bottom-0 fixed text-white bg-black w-full ${isBottom ? "bg-black" : "bg-black bg-opacity-80 backdrop-blur-sm"}`}>
        <NavLink to="/">🏠</NavLink> | <NavLink to="/username">🤖</NavLink>
      </nav>
    </>
  );
}

export default RootLayout;

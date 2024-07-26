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
<<<<<<< HEAD
      <nav className={`bottom-0 fixed text-white bg-black w-full ${isBottom ? "bg-black" : "bg-black bg-opacity-80 backdrop-blur-sm"}`}>
        <NavLink to="/">🏠</NavLink> | <NavLink to="/username">🤖</NavLink>
=======
      <nav className={`bottom-0 fixed text-white bg-black w-full flex justify-evenly ${isBottom ? "bg-black" : "bg-black bg-opacity-80 backdrop-blur-sm"}`}>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="/username">
          <i className="fa-solid fa-wallet"></i>
        </NavLink>
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f
      </nav>
    </>
  );
}

export default RootLayout;

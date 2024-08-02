import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function GetClassName({ isActive }) {
  return isActive ? "text-yes" : "";
}

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
      <div className="flex flex-col min-h-screen">
        <section className="grow mb-4">
          <Outlet />
        </section>
        <nav className={`flex justify-evenly h-10 text-xl items-center text-white bg-black w-full ${isBottom ? "bg-black" : "bg-black bg-opacity-80 backdrop-blur-sm bottom-0 fixed"}`}>
          <NavLink to="/" className={GetClassName}>
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to="/username" className={GetClassName}>
            <i className="fa-solid fa-user"></i>
          </NavLink>
          <NavLink to="/money" className={GetClassName}>
            <i className="fa-solid fa-wallet"></i>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default RootLayout;

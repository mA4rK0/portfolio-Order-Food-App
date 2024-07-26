<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
=======
import { useState } from "react";
import { GlobalContext } from "./context/globalStorage";
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f

import Username from "./components/Username";
import Notification from "./components/Notification";
import Search from "./components/Search";
import Money from "./components/Money";
import SearchBar from "./components/SearchBar";
import FoodIcons from "./components/FoodIcons";
import { useContext } from "react";

function App() {
<<<<<<< HEAD
  const [username, setUsername] = useState(localStorage.getItem("username") || "User1234");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function handleUsernameClick() {
    navigate("/username");
  }

  return (
    <>
      <section className={`formAppear`}>
=======
  // const [isAppear, setAppear] = useState(false);
  // const [username, setUsername] = useState("User1234");

  // function changeName(name) {
  //   setUsername(name);
  // }

  // function handleAppear() {
  //   setAppear(!isAppear);
  // }

  // return (
  //   <>
  //     <section className={`formAppear ${isAppear && "hidden"}`}>
  //       <section className="header flex flex-wrap justify-between mt-4">
  //         <section className="left flex flex-wrap ml-4">
  //           <Photo />
  //           <section className="flex flex-col text-white">
  //             <p className="ml-1.5 text-sm">Customer</p>
  //             <Username onClick={handleAppear} name={username} />
  //           </section>
  //         </section>
  //         <section className="right flex flex-wrap items-center text-3xl gap-x-5 mr-4 text-white">
  //           <Notification />
  //           <Search />
  //         </section>
  //       </section>
  //       <section className="border-primary bg-primary justify-center items-center text-white border rounded-lg min-[320px]:w-[360px] mx-auto mt-6">
  //         <Money />
  //       </section>
  //       <SearchBar />
  //       <FoodIcons />
  //     </section>
  //     {isAppear && <FormUsername cancel={handleAppear} submit={changeName} setAppear={setAppear} username={username} />}
  //   </>
  // );

  const { values } = useContext(GlobalContext);

  return (
    <>
      <section className={`formAppear ${values.isAppear && "hidden"}`}>
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f
        <section className="header flex flex-wrap justify-between mt-4">
          <section className="left flex flex-wrap ml-4">
            <Photo />
            <section className="flex flex-col text-white">
              <p className="ml-1.5 text-sm">Customer</p>
<<<<<<< HEAD
              <Username onClick={handleUsernameClick} name={username} />
=======
              <Username />
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f
            </section>
          </section>
          <section className="right flex flex-wrap items-center text-3xl gap-x-5 mr-4 text-white">
            <Notification />
            <Search />
          </section>
        </section>
        <section className="border-primary bg-primary justify-center items-center text-white border rounded-lg min-[320px]:w-[360px] mx-auto mt-6">
          <Money />
        </section>
        <SearchBar />
        <FoodIcons />
      </section>
<<<<<<< HEAD
=======
      {values.isAppear && <FormUsername />}
>>>>>>> c0c51654c0b458ab068e53c3ab3e8d21345fdc4f
    </>
  );
}

function Photo() {
  return (
    <>
      <section className="border flex justify-center items-center rounded-full w-12 h-12 text-white">
        <i className="fa-solid fa-user"></i>
      </section>
    </>
  );
}

export default App;

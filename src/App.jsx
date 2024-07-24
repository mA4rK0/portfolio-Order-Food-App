import { useState } from "react";
import Username from "./components/Username";
import Notification from "./components/Notification";
import Search from "./components/Search";
import FormUsername from "./components/FormUsername";
import Money from "./components/Money";

function App() {
  const [isAppear, setAppear] = useState(false);
  const [username, setUsername] = useState("User1234");

  function changeName(name) {
    setUsername(name);
  }

  function handleAppear() {
    setAppear(!isAppear);
  }

  return (
    <>
      <section className={`formAppear ${isAppear && "hidden"}`}>
        <section className="header flex flex-wrap justify-between mt-4">
          <section className="left flex flex-wrap ml-4">
            <Photo />
            <section className="flex flex-col text-white">
              <p className="ml-1.5 text-sm">Customer</p>
              <Username onClick={handleAppear} name={username} />
            </section>
          </section>
          <section className="right flex flex-wrap items-center text-3xl gap-x-5 mr-4 text-white">
            <Notification />
            <Search />
          </section>
        </section>
        <section className="border-slate-800 bg-slate-800 justify-center items-center text-white border rounded-lg min-[320px]:w-[360px] mx-auto mt-6">
          <Money />
        </section>
      </section>
      {isAppear && <FormUsername cancel={handleAppear} submit={changeName} setAppear={setAppear} username={username} />}
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

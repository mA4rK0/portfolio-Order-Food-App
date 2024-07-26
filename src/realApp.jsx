import { RouterProvider } from "react-router-dom";
import { router } from "./routers/MainRouter";
import { GlobalContext } from "./context/globalStorage";
import { useState } from "react";

function RealApp() {
  const [isAppear, setAppear] = useState(false);
  const [username, setUsername] = useState("User1234");

  function changeName(name) {
    setUsername(name);
  }

  function handleAppear() {
    setAppear(!isAppear);
  }

  const values = {
    isAppear,
    setAppear,
    username,
    changeName,
    handleAppear,
    setUsername,
  };

  const [inputValue, setValue] = useState(values.username);

  function handleSubmit(e) {
    e.preventDefault();

    const value = inputValue.split(" ").join("");
    if (value !== "") {
      values.changeName(inputValue);
      values.setAppear(false);
    }
  }

  function handleBtn(btnType) {
    return function (e) {
      e.preventDefault();
      if (btnType === "cancel") {
        values.handleAppear();
      }
    };
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  const formValues = {
    inputValue,
    setValue,
    handleSubmit,
    handleBtn,
    handleChange,
  };

  return (
    <>
      <GlobalContext.Provider value={{ values, formValues }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default RealApp;

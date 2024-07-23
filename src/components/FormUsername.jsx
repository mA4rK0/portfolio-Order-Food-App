import { useState } from "react";

const FormUsername = ({ cancel, submit, setAppear, username }) => {
  const [inputValue, setValue] = useState(username);

  function handleSubmit(e) {
    e.preventDefault();

    const value = inputValue.split(" ").join("");
    if (value !== "") {
      submit(inputValue);
      setAppear(false);
    }
  }

  function handleBtn(btnType) {
    return function (e) {
      e.preventDefault();
      if (btnType === "cancel") {
        cancel();
      }
    };
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="w-full lg:w-2/5 lg:mx-auto md:mx-auto md:w-2/3 text-white mt-48">
          <section className="container px-7 w-full">
            <label htmlFor="name" className="font-bold text-md">
              Name
            </label>
            <input type="text" onChange={handleChange} value={inputValue} id="name" className="w-full bg-cyan-700 rounded-md p-1 opacity-95 focus:outline-none focus:ring-white focus:ring-1 focus:border-white" />
          </section>
          <section className="buttons flex flex-wrap justify-center gap-x-44 mt-5 xl:gap-x-60 lg:gap-x-72 md:gap-x-60 min-[320px]:gap-x-24">
            <button className="border-2 border-white rounded-md px-4 py-1 ease-in-out duration-300 transition hover:bg-yes hover:border-yes" type="submit">
              Confirm
            </button>
            <button className="border-2 border-white rounded-md px-2.5 ease-in-out duration-300 transition hover:bg-no hover:border-no" onClick={handleBtn("cancel")}>
              Cancel
            </button>
          </section>
        </section>
      </form>
    </>
  );
};

export default FormUsername;

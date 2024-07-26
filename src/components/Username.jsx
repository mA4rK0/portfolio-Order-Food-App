import FormUsername from "./FormUsername";
import { GlobalContext } from "../context/globalStorage";
import { useContext } from "react";

function Username() {
  const { values } = useContext(GlobalContext);

  return (
    <>
      <section className="username ml-1.5 font-medium text-lg cursor-pointer" onClick={values.handleAppear}>
        <p>
          {values.username} <i className="fa-solid fa-pen text-xs"></i>
        </p>
      </section>
    </>
  );
}

export default Username;

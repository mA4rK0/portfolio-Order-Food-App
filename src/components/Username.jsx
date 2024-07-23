import FormUsername from "./FormUsername";

function Username({ onClick, name }) {
  return (
    <>
      <section className="username ml-1.5 font-medium text-lg cursor-pointer" onClick={onClick}>
        <p>
          {name} <i className="fa-solid fa-pen text-xs"></i>
        </p>
      </section>
    </>
  );
}

export default Username;

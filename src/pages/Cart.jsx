import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  function handleBtn(e) {
    navigate("/");
  }

  return (
    <>
      <section className="container text-white w-screen">
        <section className="top-element flex flex-wrap items-center w-full justify-center">
          <section className="absolute left-0">
            <button onClick={(e) => handleBtn(e)}>
              <i className="mt-4 ml-3 text-2xl fa-solid fa-arrow-left"></i>
            </button>
          </section>
          <section className="font-medium text-center text-3xl mt-3">
            <h1>My Cart</h1>
          </section>
        </section>
      </section>
    </>
  );
}

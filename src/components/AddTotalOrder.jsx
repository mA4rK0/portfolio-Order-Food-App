import { useState } from "react";
export default function AddTotalOrder() {
  const [total, setTotal] = useState(1);

  function addTotal(e) {
    setTotal(total + 1);
  }

  function decTotal(e) {
    if (total > 1) {
      setTotal(total - 1);
    }
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function changeItem(e) {}

  return (
    <>
      <form onSubmit={(e) => handleForm(e)}>
        <section className="flex flex-wrap gap-x-2 items-center">
          <section className="border ease-in-out duration-300 transition hover:shadow-white hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-6 h-6 bg-input border-white">
            <button className="pb-1" onClick={(e) => decTotal(e)}>
              -
            </button>
          </section>
          <input type="number" min={1} max={999} value={total} className="text-lg bg-input outline-none font-normal text-center w-10" readOnly />
          <section className="border ease-in-out duration-300 transition hover:shadow-white hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-6 h-6 bg-input border-white">
            <button className="pb-1" onClick={(e) => addTotal(e)}>
              +
            </button>
          </section>
        </section>
      </form>
    </>
  );
}
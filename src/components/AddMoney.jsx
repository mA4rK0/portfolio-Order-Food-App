import { useState } from "react";

function AddMoney({ isMoney, isSwitch }) {
  return (
    <>
      <section className="flex flex-col justify-center items-center relative">
        <h2 className="text-xl">Your Money:</h2>
        <section className="border ease-in-out duration-300 transition hover:shadow-no hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-7 h-7 bg-no border-no absolute top-1 right-1">
          <button className="pb-1" onClick={isSwitch}>
            x
          </button>
        </section>
        <h2 className="text-3xl font-bold text-yes">${isMoney}</h2>
        <p className="pt-4">How much money do you want to add:</p>
        <form action="">
          <section className="py-3 flex flex-col gap-y-4">
            <input type="number" step={0.01} className="bg-black rounded-md pl-1" min={1} />
            <button className="border rounded-md hover:shadow-yes hover:shadow hover:opacity-80 border-yes bg-yes ease-in-out duration-300 transition">Add</button>
          </section>
        </form>
      </section>
    </>
  );
}

export default AddMoney;

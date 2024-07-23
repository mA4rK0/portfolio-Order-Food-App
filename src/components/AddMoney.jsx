import { useState } from "react";

function AddMoney({ isMoney, isSwitch }) {
  return (
    <>
      <section className="flex flex-col justify-center items-center relative">
        <h2 className="text-xl">Your Money:</h2>
        <section className="border text-lg text-bold rounded-full flex justify-center items-center w-7 h-7 bg-no border-no absolute top-1 right-3">
          <button className="pb-1" onClick={isSwitch}>
            x
          </button>
        </section>
        <h2 className="text-3xl font-bold text-yes">${isMoney}</h2>
        <p className="pt-4">How Much Money do you want to add:</p>
        <form action="">
          <section className="py-3">
            <input type="number" step={0.01} className="bg-black rounded-md pl-1" min={1} />
          </section>
        </form>
      </section>
    </>
  );
}

export default AddMoney;

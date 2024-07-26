import { useState } from "react";
import AddMoney from "./AddMoney";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Money() {
  // const [isMoney, setMoney] = useState(100);
  // const [isMoneyAppear, setMoneyAppear] = useState(false);

  // function moneyAppear() {
  //   setMoneyAppear(!isMoneyAppear);
  // }

  // if (isMoneyAppear) {
  //   return (
  //     <>
  //       <AddMoney isMoney={isMoney} isSwitch={moneyAppear} currentMoney={isMoney} moreMoney={setMoney} />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <section className="flex flex-wrap justify-center items-center">
  //         <h1 className="text-3xl pb-2">💵</h1>
  //         <h2 className="text-2xl  font-bold text-yes">${isMoney}</h2>
  //         <section className="border ease-in-out duration-300 transition hover:shadow-yes hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-7 h-7 bg-yes border-yes ml-36">
  //           <button className="pb-1" onClick={moneyAppear}>
  //             +
  //           </button>
  //         </section>
  //       </section>
  //     </>
  //   );
  // }

  const navigate = useNavigate();

  const [isMoney, setIsMoney] = useState(() => {
    const storedMoney = localStorage.getItem("money");
    return storedMoney ? parseFloat(storedMoney) : localStorage.setItem("money", 200);
  });

  useEffect(() => {
    const storedMoney = localStorage.getItem("money");
    if (storedMoney) {
      setIsMoney(parseFloat(storedMoney));
    }
  }, []);

  function handleMoney(e) {
    navigate("/money");
  }

  return (
    <>
      <section className="flex flex-wrap justify-center items-center">
        <h1 className="text-3xl pb-2">💵</h1>
        <h2 className="text-2xl  font-bold text-yes">${isMoney}</h2>
        <section className="border ease-in-out duration-300 transition hover:shadow-yes hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-7 h-7 bg-yes border-yes ml-36">
          <button className="pb-1" onClick={(e) => handleMoney(e)}>
            +
          </button>
        </section>
      </section>
    </>
  );
}

export default Money;

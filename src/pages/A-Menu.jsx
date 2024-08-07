import { useState } from "react";
import foodData from "../Food.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allItems = foodData.menu.flatMap((category) => category.items);
    const foundMenu = allItems.find((item) => item.id === parseInt(id));

    setMenu(foundMenu);
  }, [id]);

  function handleBtn(e) {
    navigate("/menu");
  }

  if (!menu) {
    return (
      <>
        <h1 className="text-white">Error! Menu Not Found!</h1>
      </>
    );
  } else {
    return (
      <>
        <section className="container text-white w-screen">
          <section className="top-element">
            <button onClick={(e) => handleBtn(e)}>
              <i className="mt-4 ml-3 text-2xl fa-solid fa-arrow-left"></i>
            </button>
            <img src={`../src/img/thumb/${menu.image}`} className="my-6 mx-auto w-72 h-[13.296rem]" />
          </section>
          <section className="bottom-element bg-input rounded-l-[2.5rem] w-screen">
            <section className="flex flex-col pt-4 gap-y-3">
              <section className="flex flex-wrap justify-between px-5 items-center">
                <p className="font-semibold text-2xl rounded-full bg-black p-1">{menu.status}</p>
                <p className="text-yes text-2xl font-bold">$20</p>
              </section>
              <section className="flex flex-wrap justify-between px-5 items-center">
                <p className="font-medium text-xl">{menu.name}</p>
                <section className="flex flex-wrap gap-x-4 items-center">
                  <section className="border ease-in-out duration-300 transition hover:shadow-white hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-6 h-6 bg-black border-white">
                    <button className="pb-1">-</button>
                  </section>
                  <p className="text-lg font-normal">1</p>
                  <section className="border ease-in-out duration-300 transition hover:shadow-white hover:opacity-80 hover:shadow-md text-lg text-bold rounded-full flex justify-center items-center w-6 h-6 bg-black border-white">
                    <button className="pb-1">+</button>
                  </section>
                </section>
              </section>
              <section className="flex flex-col">
                <p className="pl-5 items-center">{menu.description}</p>
                <button className="mx-auto my-6 px-14 rounded-lg font-semibold text-2xl hover:opacity-80 border-yes bg-yes ease-in-out duration-300 transition">
                  Add to cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }
}

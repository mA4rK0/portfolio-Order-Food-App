import { useState, useEffect } from "react";
import foodData from "../Food.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddTotalOrder from "../components/AddTotalOrder";
import ErrorPage from "../components/ErrorPage";

export default function AMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allItems = foodData.menu.flatMap((category) => category.items);
    const foundMenu = allItems.find((item) => item.id === parseInt(id));

    if (foundMenu) {
      setMenu(foundMenu);
    } else {
      throw <ErrorPage />;
    }
  }, [id]);

  const [menuPrice, setMenuPrice] = useState(menu?.price);

  useEffect(() => {
    setMenuPrice(menu?.price);
  }, [menu]);

  function handleBtn(e) {
    navigate("/menu");
  }

  function changePrice(quantity) {
    if (menu && menu.price) {
      let newPrice = (menu.price * quantity).toFixed(2);
      setMenuPrice(parseFloat(newPrice));
    }
  }

  if (menu) {
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
                <p className="text-yes text-2xl font-bold">${menuPrice}</p>
              </section>
              <section className="flex flex-wrap justify-between px-5 items-center">
                <p className="font-medium text-xl">{menu.name}</p>
                <AddTotalOrder changePrice={changePrice} />
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

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
        <section className="container text-white">
          <section className="top-element">
            <button onClick={(e) => handleBtn(e)}>
              <i className="mt-4 ml-3 text-2xl fa-solid fa-arrow-left"></i>
            </button>
            <img src={`../src/img/thumb/${menu.image}`} className="my-6 mx-auto w-72 h-[13.296rem]" />
          </section>
          <section className="text-white">
            <h1>{menu.name}</h1>
            <p>{menu.description}</p>
          </section>
        </section>
      </>
    );
  }
}

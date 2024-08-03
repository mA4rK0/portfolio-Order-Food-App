import { useState } from "react";
import foodData from "../Food.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const allItems = foodData.menu.flatMap((category) => category.items);
    const foundMenu = allItems.find((item) => item.id === parseInt(id));

    setMenu(foundMenu);
  }, [id]);

  if (!menu) {
    return (
      <>
        <h1 className="text-white">Error! Menu Not Found!</h1>
      </>
    );
  } else {
    return (
      <>
        <section className="text-white">
          <h1>{menu.name}</h1>
          <p>{menu.description}</p>
        </section>
      </>
    );
  }
}

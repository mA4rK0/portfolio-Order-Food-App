import foodData from "../Food.json";

function Menu() {
  const foods = foodData.menu;

  return (
    <>
      {foods.map((category, index) => (
        <section key={index} className="min-[320px]:w-[360px] mx-auto mt-8 grid grid-cols-2 gap-y-7 justify-items-center">
          {category.items.map(({ name, price, image }, indexKey) => (
            <section key={indexKey} className="border w-40 h-56 rounded-3xl flex flex-col items-center pt-6 bg-zinc-50 cursor-pointer">
              <img className="w-[8rem] h-[6.188rem] rounded-2xl" src={`../src/img/thumb/${image}`} alt="Chicken Noodles" />
              <section className="flex flex-col text-lg font-semibold items-center pt-3">
                <p className="text-center">{name}</p>
                <p className="text-yes">${price}</p>
              </section>
            </section>
          ))}
        </section>
      ))}
    </>
  );
}

export default Menu;

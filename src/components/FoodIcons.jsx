import foodData from "../Food.json";

function FoodIcons() {
  const categories = foodData.menu;

  return (
    <>
      <section className="text-white grid grid-cols-3 justify-items-center mt-8 gap-y-11">
        {categories.map(({ category, icon }, index) => (
          <section key={index}>
            <button>
              <p className="text-4xl">{icon}</p>
              <p className="text-base mt-3">{category}</p>
            </button>
          </section>
        ))}
      </section>
    </>
  );
}

export default FoodIcons;

function SeeAllMenu() {
  return (
    <>
      <section className=" text-white rounded-lg min-[320px]:w-[360px] mx-auto mt-8 flex flex-wrap justify-between">
        <p className="font-medium text-lg">Menu</p>
        <a href="/menu">
          <p className="text-yes text-base active:underline active:underline-offset-2">See all</p>
        </a>
      </section>
    </>
  );
}

export default SeeAllMenu;

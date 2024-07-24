function SearchBar() {
  return (
    <>
      <form action="">
        <section className="border-primary h-12 bg-input text-white border rounded-lg min-[320px]:w-[360px] mx-auto mt-6 flex flex-wrap">
          <button className="pl-2 pr-5 text-2xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input type="text" className="w-[84%] focus:outline-none rounded-lg bg-input" placeholder="Search your favourite foods..." />
        </section>
      </form>
    </>
  );
}

export default SearchBar;

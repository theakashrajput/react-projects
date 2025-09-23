const LandingPage = () => {
  return (
    <div className="w-full h-full pt-20 flex  bg-zinc-100">
      <div className="w-[60%] p-20">
        <h2 className="text-7xl font-bold font-['gilroy'] mt-16 ">
          Cook Like a Pro with
          <br />
          {/* #e13e0e */}
          Our <span className="text-[#e15b0e] ">Easy</span> and{" "}
          <span className="text-[#e15b0e]">Tasty</span>
          <br />
          Recipes
        </h2>
        <button className="bg-[#e15b0e] py-4 px-6 text-lg font-semibold text-[#F8F5EC] mt-10 rounded-md cursor-pointer active:scale-95 hover:bg-[#e13e0e]">
          Find Recipes 🔎
        </button>
      </div>
      <div className="w-[40%] h-full">
        <div className="p-20">
          <img
            className="object-cove object-center"
            src="src/other/undefined_Create_a_vibrant,_ca.png"
            alt="Chef Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

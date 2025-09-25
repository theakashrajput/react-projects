import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigation = useNavigate();
  return (
    <div className="w-full h-full pt-20 flex flex-col md:flex-row bg-zinc-100 items-center md:items-stretch">
      <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col justify-center items-center md:items-start p-4 sm:p-8 md:p-16 lg:p-24 max-w-5xl mx-auto md:mx-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['gilroy'] mt-4 md:mt-16 text-center md:text-left leading-tight max-w-full lg:max-w-3xl">
          Cook Like a Pro with
          <br />
          Our <span className="text-[#e15b0e]">Easy</span> and{" "}
          <span className="text-[#e15b0e]">Tasty</span>
          <br />
          Recipes
        </h2>
        <button
          onClick={() => navigation("/recipes")}
          className="bg-[#e15b0e] py-3 px-4 sm:py-4 sm:px-6 text-base sm:text-lg font-semibold text-[#F8F5EC] mt-6 sm:mt-8 rounded-md cursor-pointer active:scale-95 hover:bg-[#e13e0e] w-fit mx-auto md:mx-0"
        >
          Find Recipes 🔎
        </button>
      </div>
      <div className="w-full md:w-[35%] lg:w-[30%] flex items-center justify-center mt-6 md:mt-0 px-4 md:px-0">
        <div className="w-full flex justify-center">
          <img
            className="object-contain object-center w-[220px] xs:w-[260px] sm:w-[320px] md:w-[340px] lg:w-[420px] h-[180px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] rounded-lg"
            src="src/other/undefined_Create_a_vibrant,_ca.png"
            alt="Chef Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

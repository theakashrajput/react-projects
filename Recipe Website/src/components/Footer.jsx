import { RiFacebookBoxFill } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";
import { RiYoutubeFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="w-full min-h-[320px] md:h-[400px] font-['gilroy'] bg-black text-[#F8F5EC] flex flex-col justify-end items-center pb-5 px-4 sm:px-10">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-5">
        Cook.
      </h2>
      <p className="text-center leading-[26px] sm:leading-[30px] text-sm sm:text-base">
        From quick and easy meals to gourmet delights, we have somthing
        <br className="hidden sm:block" />
        for every taste and ocasion.
      </p>
      <div className="w-full sm:w-[60%] border-t-[1px] border-zinc-700 mt-4 sm:mt-5"></div>
      <div className="flex flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-8 justify-center">
        {["About Us", "Recipes", "Contect Us"].map((ele, id) => (
          <span
            key={id}
            className="text-zinc-300 tracking-wider text-sm sm:text-md cursor-pointer"
          >
            {ele}
          </span>
        ))}
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t-[1px] pt-4 sm:pt-5 mt-4 sm:mt-5 border-zinc-800 px-0 sm:px-10 md:px-20 gap-3 sm:gap-0">
        <span className="text-xs sm:text-base">Copyright © 2025</span>
        <div className="flex gap-4 sm:gap-5">
          <RiFacebookBoxFill className="cursor-pointer" />
          <RiInstagramLine className="cursor-pointer" />
          <RiTwitterXLine className="cursor-pointer" />
          <RiYoutubeFill className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

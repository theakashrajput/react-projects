import { RiFacebookBoxFill } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterXLine } from "@remixicon/react";
import { RiYoutubeFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="w-full h-[400px] font-['gilroy'] bg-black text-[#F8F5EC] flex flex-col justify-end items-center pb-7">
      <h2 className="text-6xl font-extrabold mb-5">Cook.</h2>
      <p className="text-center leading-[30px]">
        From quick and easy meals to gourmet delights, we have somthing
        <br />
        for every taste and ocasion.
      </p>
      <div className="w-[60%] border-t-[1px] border-zinc-700 mt-5"></div>
      <div className="flex gap-5 mt-8">
        {["About Us", "Recipes", "Contect Us"].map((ele, id) => (
          <span
            key={id}
            className="text-zinc-300 tracking-wider text-md cursor-pointer"
          >
            {ele}
          </span>
        ))}
      </div>
      <div className="w-full flex justify-between items-center border-t-[1px] pt-5 mt-5 border-zinc-800 px-20">
        <span>Copyright © 2025</span>
        <div className="flex gap-5">
          <RiFacebookBoxFill className="cursor-pointer"/>
          <RiInstagramLine className="cursor-pointer"/>
          <RiTwitterXLine className="cursor-pointer"/>
          <RiYoutubeFill className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

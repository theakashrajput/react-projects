import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full absolute top-0 left-0 py-6 bg-[#50413c] text-[#F8F5EC] flex justify-between items-center px-20">
      <div>
        <h2 className="text-5xl font-extrabold text-[#F8F5EC]">Cook.</h2>
      </div>
      <div className="text-lg font-semibold flex justify-center items-center gap-10">
        <NavLink className={e=>e.isActive ? "text-[#ffb40c]" : ""} to="/">Home</NavLink>
        <NavLink className={e=>e.isActive ? "text-[#ffb40c]" : ""} to="/about">About</NavLink>
        <NavLink className={e=>e.isActive ? "text-[#ffb40c]" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={e=>e.isActive ? "text-[#ffb40c]" : ""} to="/create-recipe">Create Recipe</NavLink>
      </div>
    </div>
  ); 
};

export default Nav;
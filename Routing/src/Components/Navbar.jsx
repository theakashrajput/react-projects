import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0 py-5 px-10 flex justify-center gap-10 bg-gray-800 text-white">
      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;

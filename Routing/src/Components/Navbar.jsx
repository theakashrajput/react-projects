import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-5 px-10 flex justify-center gap-10 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;

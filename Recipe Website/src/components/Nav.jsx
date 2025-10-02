import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 py-4 md:py-6 bg-[#50413c] text-[#F8F5EC] flex flex-col md:flex-row justify-between items-center px-4 md:px-20 z-50">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F8F5EC]">
          Cook.
        </h2>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#F8F5EC] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Menu Links */}
      <div
        className={`
          flex-col md:flex-row md:flex
          text-lg font-semibold gap-6 md:gap-10
          w-full md:w-auto
          ${menuOpen ? "flex" : "hidden"}
          md:items-center md:justify-center
          mt-4 md:mt-0
          md:whitespace-nowrap
        `}
      >
        <NavLink
          className={(e) => (e.isActive ? "text-[#ffb40c]" : "")}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#ffb40c]" : "")}
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#ffb40c]" : "")}
          to="/recipes"
          onClick={() => setMenuOpen(false)}
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#ffb40c]" : "")}
          to="/favourites"
          onClick={() => setMenuOpen(false)}
        >
          Favourites
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive
              ? "text-[#ffb40c] whitespace-nowrap"
              : "whitespace-nowrap"
          }
          to="/create-recipe"
          onClick={() => setMenuOpen(false)}
        >
          Create Recipe
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

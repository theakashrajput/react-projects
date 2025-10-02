import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const { recipeData } = useContext(recipeContext);

  const favouriteRecipes = recipeData.filter((ele) => ele?.favourite === true);
  return (
    <div className="w-full min-h-screen pb-5 px-2 sm:px-4 md:px-10 md:pt-28 pt-24">
      <h2>My Favourites ❤️</h2>
      {favouriteRecipes.length > 0 ? (
        <div className="w-full h-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {favouriteRecipes.map((ele) => (
            <RecipeCard key={ele.id} recipe={ele} />
          ))}
        </div>
      ) : (
        <div className="text-3xl">No Favourite</div>
      )}
    </div>
  );
};

export default Favourites;

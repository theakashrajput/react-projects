import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { recipeData } = useContext(recipeContext);

  return (
    <>
      {recipeData && recipeData[0] ? (
        <div className="w-full min-h-screen pb-5 px-2 sm:px-4 md:px-10 md:pt-28 pt-24 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {recipeData.map((ele) => (
            <RecipeCard key={ele.id} recipe={ele} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          No Recipe
        </div>
      )}
    </>
  );
};

export default Recipes;

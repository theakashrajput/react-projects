import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { recipeData, setRecipeData } = useContext(recipeContext);

  return (
    <div className="pb-5 px-10 pt-30 grid grid-cols-4 gap-y-5 overflow-y-scroll">
      {recipeData.map((ele) => (
        <RecipeCard recipe={ele} />
      ))}
    </div>
  );
};

export default Recipes;

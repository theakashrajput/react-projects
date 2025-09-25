import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigation = useNavigate();

  return (
    <div className="max-w-sm w-full bg-[#F8F5EC] rounded-2xl shadow-lg overflow-hidden border border-gray-200 mx-auto sm:max-w-xs md:max-w-sm lg:max-w-md flex flex-col h-full">
      <img
        src={recipe.image}
        alt={recipe.recipeName}
        className="h-40 sm:h-44 md:h-52 w-full object-cover object-center"
      />
 
      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 items-baseline">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#50413C] mb-2">
          {recipe.recipeName}
        </h2>

        {/* Chef & Time */}
        <p className="text-xs sm:text-sm text-gray-600 mb-1">
          👨‍🍳 <span className="font-medium">{recipe.chefName}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mb-3">
          ⏱ {recipe.time} minutes
        </p>

        {/* Category Badge */}
        <span className="inline-block bg-[#FFCC63] text-[#50413C] text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-3">
          {recipe.food_categories.replace("_", " ")}
        </span>

        {/* Ingredients */}
        <h3 className="text-sm sm:text-md font-semibold text-[#50413C] mb-1">
          Ingredients:
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 mb-3">
          {recipe.ingredients}
        </p>

        {/* Instructions */}
        <h3 className="text-sm sm:text-md font-semibold text-[#50413C] mb-1">
          Instructions:
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 mb-4">
          {recipe.instructions}
        </p>

        {/* Button */}
        <div className="mt-auto w-full">
          <button
            onClick={() => navigation(`/recipes/${recipe.id}`)}
            className="w-full py-2 cursor-pointer rounded-xl font-semibold text-white bg-[#F5834D] hover:bg-[#e66f37] active:scale-95 transition text-sm sm:text-base"
          >
            View Full Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

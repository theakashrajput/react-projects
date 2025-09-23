const RecipeCard = ({ recipe }) => {
  console.log("Thisi");
  console.log(recipe);

  return (
    <div className="w-[330px] bg-[#F8F5EC] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <img
        src={recipe.image}
        alt={recipe.recipeName}
        className="h-44 w-full object-cover object-center"
      />

      <div className="p-2">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#50413C] mb-2">
          {recipe.recipeName}
        </h2>

        {/* Chef & Time */}
        <p className="text-sm text-gray-600 mb-1">
          👨‍🍳 <span className="font-medium">{recipe.chefName}</span>
        </p>
        <p className="text-sm text-gray-600 mb-3">⏱ {recipe.time} minutes</p>

        {/* Category Badge */}
        <span className="inline-block bg-[#FFCC63] text-[#50413C] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {recipe.food_categories.replace("_", " ")}
        </span>

        {/* Ingredients */}
        <h3 className="text-md font-semibold text-[#50413C] mb-1">
          Ingredients:
        </h3>
        <p className="text-sm text-gray-700 mb-3">{recipe.ingredients}</p>

        {/* Instructions */}
        <h3 className="text-md font-semibold text-[#50413C] mb-1">
          Instructions:
        </h3>
        <p className="text-sm text-gray-700 mb-4">{recipe.instructions}</p>

        {/* Button */}
        <button className="w-full py-2 cursor-pointer rounded-xl font-semibold text-white bg-[#F5834D] hover:bg-[#e66f37] active:scale-95 transition">
          View Full Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

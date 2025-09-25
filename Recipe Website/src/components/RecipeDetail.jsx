import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const RecipeDetail = () => {
  const params = useParams();

  const { recipeData, setRecipeData } = useContext(recipeContext);

  const recipe = recipeData.find((ele) => ele.id === params.id);

  return (
    <div className="h-screen w-full pt-28 px-5">
      <div className="recipe-detail p-5 h-full w-full md:w-1/2">
        <div className="h-full w-full md:w-[40vw] bg-[#F8F5EC] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row h-auto md:h-2/5">
            {/* Image */}
            <div className="w-full md:w-1/2 h-48 md:h-full mr-0 md:mr-2">
              <img
                src={recipe.image}
                alt={recipe.recipeName}
                className="h-full w-full object-cover object-center rounded-xl"
              />
            </div>

            {/* Right Section */}
            <div className="p-3 w-full md:w-1/2">
              {/* Title */}
              <h2 className="text-2xl font-bold text-[#50413C] mb-2">
                {recipe.recipeName}
              </h2>

              {/* Chef & Time */}
              <p className="text-sm text-gray-600 mb-1">
                👨‍🍳 <span className="font-medium">{recipe.chefName}</span>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                ⏱ {recipe.time} minutes
              </p>

              {/* Category Badge */}
              <span className="inline-block bg-[#FFCC63] text-[#50413C] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {recipe.food_categories
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>

              {/* Ingredients */}
              <h3 className="text-md font-semibold text-[#50413C] mb-1">
                Ingredients:
              </h3>
              <p className="text-sm text-gray-700 mb-3">{recipe.ingredients}</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="h-auto md:h-3/5 w-full pt-3 px-3">
            <h3 className="text-xl font-semibold text-[#50413C] mb-2">
              Instructions:
            </h3>
            <div className="w-full h-48 md:h-full overflow-auto pr-2 scrollbar-thin scrollbar-thumb-[#F5834D] scrollbar-track-[#F8F5EC] rounded">
              {recipe.detailedIntructions.map((ele, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 mb-2 leading-relaxed text-sm"
                >
                  {idx + 1}. {ele}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-update-form"></div>
    </div>
  );
};

export default RecipeDetail;

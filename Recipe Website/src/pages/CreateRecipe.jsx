import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";

const CreateRecipe = () => {
  const { recipeData, setRecipeData } = useContext(recipeContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const newRecipe = {
      ...data,
      id: nanoid(),
      ingredients: data.ingredients.split(",").map((item) => item.trim()),
      instructions: data.instructions.split(",").map((item) => item.trim()),
    };
    setRecipeData([...recipeData, newRecipe]);
    reset();
  };

  return (
    <div className="pt-28 px-20">
      <h1 className="text-3xl font-bold ">Create New Recipe</h1>
      <form className="w-[70%] mt-5" onSubmit={handleSubmit(submitHandler)}>
        <Input
          data={{
            label: "Url",
            type: "url",
            placeholder: "IMAGE URL",
            name: "image",
            rules: { required: "Image is required" },
            register: register,
            errors: errors,
          }}
        />
        <Input
          data={{
            label: "Recipe Name",
            type: "text",
            placeholder: "RECIPE NAME",
            name: "recipeName",
            rules: { required: "Recipe name is required" },
            register: register,
            errors: errors,
          }}
        />
        <Input
          data={{
            label: "Chef Name",
            type: "text",
            placeholder: "CHEF NAME",
            name: "chefName",
            rules: { required: "Chef name is required" },
            register: register,
            errors: errors,
          }}
        />
        <Input
          data={{
            label: "Durartion",
            type: "number",
            placeholder: "TOTAL TIME (In minutes)",
            name: "time",
            rules: {
              required: "Time is required",
              min: { value: 5, message: "Minimum time is 5 minutes" },
              max: {
                value: 120,
                message: "Maximum time limit recipe is 120 minutes",
              },
            },
            register: register,
            errors: errors,
          }}
        />
        <Input
          data={{
            as: "textarea",
            label: "Ingredients",
            placeholder: "INGREDIENTS (comma separated)",
            name: "ingredients",
            rules: {
              required: "Ingredients are required",
            },
            register: register,
            errors: errors,
          }}
        />
        <Input
          data={{
            as: "textarea",
            label: "Instructions",
            placeholder: "INSTRUCTIONS (comma separated)",
            name: "instructions",
            rules: {
              required: "Instructions are required",
            },
            register: register,
            errors: errors,
          }}
        />
        <div className="mt-2 mb-4">
          <label
            htmlFor="food_categories"
            className="block text-sm mb-2 font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="food_categories"
            className="w-full pb-1 pt-2 px-2 outline-none border-2 border-gray-300 rounded mt-1 focus:border-orange-500"
            {...register("food_categories", {
              value: "",
              required: "Category is required",
            })}
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="vegetarian">Shakahari (Vegetarian)</option>
            <option value="non_vegetarian">Masahari (Non-Vegetarian)</option>
            <option value="breakfast">Nashta (Breakfast)</option>
            <option value="street_food">Chatori Gali / Street Food</option>
            <option value="snacks">Snacks / Namkeen</option>
            <option value="roti_paratha">Roti & Paratha</option>
            <option value="dal_sabzi">Dal & Sabzi</option>
            <option value="chawal_biryani">Chawal / Biryani</option>
            <option value="meetha">Meetha (Sweets / Desserts)</option>
            <option value="beverages">Peene Ki Cheezein (Beverages)</option>
            <option value="main_course">Main Course / Thali</option>
          </select>
          {errors.food_categories && (
            <p className="text-red-400 text-xs font-semibold tracking-wide">
              {errors.food_categories.message}
            </p>
          )}
        </div>
        <button
          className="mt-5 block font-semibold text-lg leading-none tracking-wide px-4 py-3 rounded bg-[#e15b0e] text-[#F8F5EC] cursor-pointer active:scale-95 hover:bg-[#e13e0e]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;

import { useForm } from "react-hook-form";
import Input from "./Input";
import { useContext, useEffect } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateForm = ({ recipe }) => {
  const { recipeData, setRecipeData } = useContext(recipeContext);
  const navigation = useNavigate();

  const deleteHandler = (id) => {
    const updatedRecipeData = recipeData.filter((ele) => ele.id !== id);
    setRecipeData(updatedRecipeData);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipeData));
    navigation("/recipes");
    toast.success("Recipe deleted successfully");
  };

  const favouriteHandler = (id) => {
    const updatedData = recipeData.map((ele) => {
      return ele.id === id
        ? { ...ele, favourite: ele.favourite ? false : true }
        : ele;
    });
    setRecipeData(updatedData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: recipe
      ? {
          image: recipe.image,
          recipeName: recipe.recipeName,
          chefName: recipe.chefName,
          time: recipe.time,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          // detailedIntructions: recipe.detailedIntructions.join("\n"),
          food_categories: recipe.food_categories,
        }
      : {},
  });

  const submitHandler = (updatedData) => {
    setRecipeData((prev) =>
      prev.map((ele) =>
        ele.id === recipe.id
          ? {
              ...ele,
              ...updatedData,
              // detailedIntructions: updatedData.detailedIntructions
              //   .split("\n")
              //   .map((ele) => ele.trim())
              //   .filter(Boolean),
            }
          : ele
      )
    );
    toast.success("Recipe updated successfully");
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeData));
  }, [recipeData]);

  return (
    <>
      <h1 className="text-2xl font-bold ">Update Recipe</h1>
      <form className="w-full mt-3" onSubmit={handleSubmit(submitHandler)}>
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
            label: "Duration",
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
        {/* <Input
          data={{
            as: "textarea",
            label: "Detailed Instructions",
            placeholder: "DETAILED INSTRUCTIONS (comma separated)",
            name: "detailedIntructions",
            rules: {
              required: "Instructions are required",
            },
            register: register,
            errors: errors,
          }}
        /> */}
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
        <div className="w-full flex gap-5">
          <button
            className="mt-5 block font-semibold text-lg leading-none tracking-wide px-4 py-3 rounded bg-green-600 text-[#F8F5EC] cursor-pointer active:scale-95 hover:bg-green-700 transition duration-300"
            type="submit"
          >
            Update
          </button>
          <button
            onClick={() => deleteHandler(recipe.id)}
            className="mt-5 block font-semibold text-lg leading-none tracking-wide px-4 py-3 rounded bg-red-500 text-[#F8F5EC] cursor-pointer active:scale-95 hover:bg-red-700 transition duration-300"
            type="button"
          >
            Delete
          </button>
          <button
            onClick={() => favouriteHandler(recipe.id)}
            className="mt-5 block font-semibold text-lg leading-none tracking-wide px-4 py-3 rounded bg-pink-500 text-[#F8F5EC] cursor-pointer active:scale-95 hover:bg-pink-700 transition duration-300"
            type="button"
          >
            {recipe.favourite ? "Remove Favourite" : "Add to Favourite"}
          </button>
          <button
            onClick={() => navigation("/recipes")}
            className="mt-5 block font-semibold text-lg leading-none tracking-wide px-4 py-3 rounded bg-gray-600 text-[#F8F5EC] cursor-pointer active:scale-95 hover:bg-gray-800 transition duration-300"
            type="button"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;

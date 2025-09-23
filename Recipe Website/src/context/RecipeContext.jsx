import { createContext, useState } from "react";
export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [recipeData, setRecipeData] = useState([
    {
      image:
        "https://pipingpotcurry.com/wp-content/uploads/2022/04/Matar-Paneer-in-instant-pot-Piping-Pot-Curry-1024x1024.jpg",
      recipeName: "Paneer Butter Masala",
      chefName: "Rohit Sharma",
      time: 45,
      ingredients: "Paneer, Butter, Tomato, Onion, Cream, Spices",
      instructions:
        "Heat butter, sauté onions and tomatoes, blend to paste, add spices, add paneer cubes, simmer with cream",
      food_categories: "main_course",
    },
    {
  "image": "https://tse4.mm.bing.net/th/id/OIP.Q5vy3i2Sojv9sZE9SSsiOQHaE4?pid=Api&P=0&h=180",
  "recipeName": "Masala Dosa",
  "chefName": "Sneha Verma",
  "time": 30,
  "ingredients": "Rice, Urad Dal, Potato, Onion, Curry Leaves, Green Chili",
  "instructions": "Prepare dosa batter, cook dosa on tawa, prepare potato masala, stuff inside dosa and serve with chutney",
  "food_categories": "breakfast"
}
  ]);

  return (
    <recipeContext.Provider value={{ recipeData, setRecipeData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

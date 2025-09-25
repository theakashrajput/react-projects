import { createContext, useState } from "react";
export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [recipeData, setRecipeData] = useState([
    {
      id: "cdsncksncknzcnmxc",
      image:
        "https://pipingpotcurry.com/wp-content/uploads/2022/04/Matar-Paneer-in-instant-pot-Piping-Pot-Curry-1024x1024.jpg",
      recipeName: "Paneer Butter Masala",
      chefName: "Rohit Sharma",
      time: 45,
      ingredients: "Paneer, Butter, Tomato, Onion, Cream, Spices",
      instructions:
        "Heat butter, sauté onions and tomatoes, blend to paste, add spices, add paneer cubes, simmer with cream",
      food_categories: "main_course",
      detailedIntructions: [
        `Heat 2 tbsp butter in a pan. Add chopped onions and sauté until golden.`,
        `Add ginger-garlic paste and cook for 1 minute.`,
        `Add chopped tomatoes and cashews, cook until soft.`,
        `Cool the mixture, blend into a smooth paste.`,
        `In the same pan, melt 1 tbsp butter. Add the paste and cook for 3-4 minutes.`,
        `Add red chili powder, coriander powder, garam masala, and salt. Cook until oil separates.`,
        `Add ½ cup water and simmer for 5 minutes.`,
        `Add paneer cubes and gently stir to coat with the gravy.`,
        `Add fresh cream, mix, and simmer for 2 minutes.`,
        `Garnish with coriander leaves and serve hot with naan or rice.`,
      ],
    },
    {
      id: "cdsjkncksncmxnckx",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.Q5vy3i2Sojv9sZE9SSsiOQHaE4?pid=Api&P=0&h=180",
      recipeName: "Masala Dosa",
      chefName: "Sneha Verma",
      time: 30,
      ingredients: "Rice, Urad Dal, Potato, Onion, Curry Leaves, Green Chili",
      instructions:
        "Prepare dosa batter, cook dosa on tawa, prepare potato masala, stuff inside dosa and serve with chutney",
      food_categories: "breakfast",
      detailedIntructions: [
        `Heat oil in a pan. Add mustard seeds and let them splutter.  `,
        `Add curry leaves, green chili, and chopped onions. Sauté until golden.  `,
        `Add ginger and turmeric powder. Mix well.  `,
        `Add boiled, mashed potatoes and salt. Cook for 2-3 minutes.  `,
        `Garnish the potato filling with fresh coriander leaves and set aside.  `,
        `Heat a non-stick tawa (griddle). Pour a ladle of dosa batter and spread it thin in a circular motion.  `,
        `Drizzle a few drops of oil or ghee around the edges. Cook until the bottom is golden and crisp.  `,
        `Place a portion of the potato masala in the center of the dosa.  `,
        `Fold the dosa from both sides to cover the filling.  `,
        `Serve hot with coconut chutney and sambar.`,
      ],
    },
  ]);

  return (
    <recipeContext.Provider value={{ recipeData, setRecipeData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

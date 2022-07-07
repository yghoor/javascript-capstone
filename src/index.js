import './style.css';
import displayIcons from './displayIcons.js';
import { addModal, createRecipePage } from './createPage.js';
import {
  displayLikeCount, addLikeListener, addSubmitCommentListener, addDisplayCommentsListener,
} from './add-comments-and-likes.js';

const appId = '56YthjGYMUyx30Ur3ZpO';

let breakfastMeals;

async function addModalToPage(recipeId) {
  let recipeData;
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
    .then((response) => response.json())
    .then((result) => {
      // eslint-disable-next-line prefer-destructuring
      recipeData = result.meals[0];
    });

  addModal(recipeData);
  addSubmitCommentListener(recipeId, appId);
}

async function fetchRecipesAndCreatePage() {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
    .then((response) => response.json())
    .then((result) => {
      breakfastMeals = result.meals;
    });

  createRecipePage(breakfastMeals, 'breakfast');

  breakfastMeals.forEach((meal) => {
    fetchRecipeAndaddModal(meal.idMeal);
  });
}

fetchRecipesAndCreatePage();
displayIcons();

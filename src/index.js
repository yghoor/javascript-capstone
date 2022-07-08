import './style.css';
import displayIcons from './displayIcons.js';
import { createRecipeModal, createRecipePage } from './createPage.js';
import {
  displayAllLikeCounts, addLikeListener, addSubmitCommentListener, addDisplayCommentsListener,
} from './add-comments-and-likes.js';

const breakfastAppId = '56YthjGYMUyx30Ur3ZpO';
const vegetarianAppId = 'tpqFWohbJksKNRX8rJNi';
const dessertAppId = 'kgwMzsiEvd8aYH9dQMb0';

const breakfastPageLink = document.getElementById('breakfast-page-link');
const vegetarianPageLink = document.getElementById('vegetarian-page-link');
const dessertPageLink = document.getElementById('dessert-page-link');

async function initialiseAPILikesArray(appId) {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'initialiser',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
}

async function addModalToPage(recipeId, appId) {
  let recipeData;
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
    .then((response) => response.json())
    .then((result) => {
      // eslint-disable-next-line prefer-destructuring
      recipeData = result.meals[0];
    });

  createRecipeModal(recipeData);
  addSubmitCommentListener(recipeId, appId);
}

function clearPage() {
  document.getElementById('recipes-section').innerHTML = '';
}

async function addRecipesToPage(appId, category) {
  clearPage();

  let categoryMeals;
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((result) => {
      categoryMeals = result.meals;
    });

  createRecipePage(categoryMeals, category);
  initialiseAPILikesArray(appId);
  displayAllLikeCounts(appId);

  categoryMeals.forEach((meal) => {
    addModalToPage(meal.idMeal, appId);
    addLikeListener(meal.idMeal, appId);
    addDisplayCommentsListener(meal.idMeal, appId);
  });
}

breakfastPageLink.addEventListener('mousedown', () => {
  breakfastPageLink.classList.add('text-decoration-underline', 'fw-bold');
  vegetarianPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  dessertPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  addRecipesToPage(breakfastAppId, 'Breakfast');
});

vegetarianPageLink.addEventListener('mousedown', () => {
  vegetarianPageLink.classList.add('text-decoration-underline', 'fw-bold');
  breakfastPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  dessertPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  addRecipesToPage(vegetarianAppId, 'Vegetarian');
});

dessertPageLink.addEventListener('mousedown', () => {
  dessertPageLink.classList.add('text-decoration-underline', 'fw-bold');
  breakfastPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  vegetarianPageLink.classList.remove('text-decoration-underline', 'fw-bold');
  addRecipesToPage(dessertAppId, 'Dessert');
});

addRecipesToPage(breakfastAppId, 'Breakfast');
displayIcons();

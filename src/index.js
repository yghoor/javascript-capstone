import './style.css';
import displayIcons from './displayIcons.js';
import createRecipePage from './createPage.js';

let breakfastMeals;

async function fetchRecipesAndCreatePage() {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
    .then((response) => response.json())
    .then((result) => {
      breakfastMeals = result.meals;
    });

  await createRecipePage(breakfastMeals, 'breakfast');
}

fetchRecipesAndCreatePage();
displayIcons();
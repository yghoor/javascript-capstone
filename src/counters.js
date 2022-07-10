export function countRecipes(mealsArray) {
  return mealsArray.length;
}

export function displayRecipeCount(mealsArray, category) {
  const navLink = document.getElementById(`${category.toLowerCase()}-meals-count`);
  navLink.innerHTML = `(${countRecipes(mealsArray)})`;
}


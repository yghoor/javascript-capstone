export function countRecipes(mealsArray) {
  return mealsArray.length;
}

export function displayRecipeCount(mealsArray, category) {
  const navLink = document.getElementById(`${category.toLowerCase()}-meals-count`);
  navLink.innerHTML = `(${countRecipes(mealsArray)})`;
}

export function countComments(commentsArray) {
  return commentsArray.length;
}

export function displayCommentCount(commentsArray, recipeId) {
  const commentCount = document.getElementById(`recipe-${recipeId}-comment-count`);
  commentCount.innerHTML = `(${countComments(commentsArray)})`;
}
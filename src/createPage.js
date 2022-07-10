import { addHeartToggleListeners } from './add-comments-and-likes.js';
import heartEmptyIcon from './heart-empty-icon.png';
import heartFilledIcon from './heart-filled-icon.png';

const recipesSection = document.getElementById('recipes-section');

export function createRecipePage(recipeArray, category) {
  const page = document.createElement('section');
  page.id = `${category}-page`;

  const recipeRow = document.createElement('div');
  recipeRow.className = 'row row-cols-4';
  page.appendChild(recipeRow);

  recipeArray.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.id = `${recipe.idMeal}`;
    recipeCard.className = 'col card py-3 d-flex flex-column justify-content-center align-items-center text-center border-0';
    recipeCard.innerHTML = `
    <img src="${recipe.strMealThumb}/preview" alt="" class="card-img-top w-50"/>
    
    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-3">
      <h5 class="fs-4 card-title my-2">${recipe.strMeal}</h5>

      <div class="likes-div">
        <span id="recipe-${recipe.idMeal}-like-count" class="fs-5 fw-normal">Likes:</span>

        <button id="recipe-${recipe.idMeal}-like-btn" class="bg-white border-0">
          <img src="${heartEmptyIcon}" alt="" class="heart-empty-icon" />
          <img src="${heartFilledIcon}" alt="" class="heart-filled-icon d-none" />
        </button>
      </div>
      <button type="button" id="recipe-${recipe.idMeal}-info-btn" class="fs-5 bg-white" data-bs-toggle="modal" data-bs-target="#recipe-${recipe.idMeal}-modal">Recipe Info</button>
    </div>`;

    recipeRow.appendChild(recipeCard);
  });

  recipesSection.appendChild(page);
  addHeartToggleListeners();
}

export function createRecipeModal(recipeInfo) {
  const modal = document.createElement('div');
  modal.id = `recipe-${recipeInfo.idMeal}-modal`;
  modal.className = 'modal fade';
  modal.tabIndex = '-1';
  modal.setAttribute('aria-labelledby', `recipe-${recipeInfo.idMeal}-modal-title`);
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-body border border-5 border-dark d-flex flex-column justify-content-center pb-3">
        <div class="modal-header d-flex flex-column border-0">
          <div class="container-fluid d-flex flex-row justify-content-center ps-0">
            <img src="${recipeInfo.strMealThumb}" class="w-50" alt="Recipe Screenshot">

            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>

        <div class="d-flex flex-column align-items-center gap-4">
          <h2 class="modal-title" id="recipe-${recipeInfo.idMeal}-modal-label">${recipeInfo.strMeal}</h2>
          
          <h4>Ingredients</h4>

          <div class="col-2 d-flex flex-row justify-content-between gap-3 mb-3">
            <ul class="list-unstyled m-0 p-0 gap-2">
              <li>${recipeInfo.strIngredient1}</li>
              <li>${recipeInfo.strIngredient2}</li>
              <li>${recipeInfo.strIngredient3}</li>
              <li>${recipeInfo.strIngredient4}</li>
              <li>${recipeInfo.strIngredient5}</li>
              <li>${recipeInfo.strIngredient6}</li>
              <li>${recipeInfo.strIngredient7}</li>
              <li>${recipeInfo.strIngredient8}</li>
              <li>${recipeInfo.strIngredient9}</li>
              <li>${recipeInfo.strIngredient10}</li>
            </ul>

            <ul class="list-unstyled m-0 p-0 gap-2">
              <li>${recipeInfo.strMeasure1}</li>
              <li>${recipeInfo.strMeasure2}</li>
              <li>${recipeInfo.strMeasure3}</li>
              <li>${recipeInfo.strMeasure4}</li>
              <li>${recipeInfo.strMeasure5}</li>
              <li>${recipeInfo.strMeasure6}</li>
              <li>${recipeInfo.strMeasure7}</li>
              <li>${recipeInfo.strMeasure8}</li>
              <li>${recipeInfo.strMeasure9}</li>
              <li>${recipeInfo.strMeasure10}</li>
            </ul>
          </div>

          <h4>Method</h4>

          <p class="col-8">${recipeInfo.strInstructions}</p>

          <h4>Add a comment</h4>

          <form method="post" id="recipe-${recipeInfo.idMeal}-comment-form" class="d-flex flex-column align-items-start gap-4">
            <label>
              <input type="text" id="name" maxlength="60" placeholder="Your name" class="border-2 border-dark rounded-3 px-2 w-75" required />
            </label>
       
            <label class="textarea">
              <textarea
                id="comment"
                name="message"
                maxlength="230"
                placeholder="Your insights"
                class="border-2 border-dark rounded-3 px-2 w-100"
                required
              ></textarea>
            </label>
            
            <button type="submit" class="fs-4 bg-white px-2">Comment</button>
          </form>

          <h4>
            Comments
            <span id="recipe-${recipeInfo.idMeal}-comment-count"></span>
          </h4>

          <div id="recipe-${recipeInfo.idMeal}-comments" class="container-fluid row row-cols-3"></div>
        </div>
      </div>
    </div>
  </div>`;

  recipesSection.appendChild(modal);
}
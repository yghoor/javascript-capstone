import heartEmptyIcon from './heart-empty-icon.png';
import heartFilledIcon from './heart-filled-icon.png';

const categories = document.getElementById('categories');

export default function createRecipePage(recipeArray, category) {
  const page = document.createElement('section');
  page.id = `${category}-page`;

  const recipeRow = document.createElement('div');
  recipeRow.className = 'row row-cols-3';
  page.appendChild(recipeRow);

  recipeArray.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.id = `${recipe.idMeal}`;
    recipeCard.className = 'col card py-3 d-flex flex-column justify-content-center align-items-center text-center border-0';
    recipeCard.innerHTML = `
    <img src="${recipe.strMealThumb}/preview" alt="" class="card-img-top w-50"/>
    
    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-3">
      <h5 class="fs-4 card-title my-2">${recipe.strMeal}</h5>

      <div>
        <span class="fs-5 fw-normal">5 Likes</span>

        <button class="bg-white border-0">
          <img src="${heartEmptyIcon}" alt="" class="heart-empty-icon" />
          <img src="${heartFilledIcon}" alt="" class="heart-filled-icon d-none" />
        </button>
      </div>
      <button type="button" class="fs-5 bg-white">Comments</button>
    </div>`;

    recipeRow.appendChild(recipeCard);
  });

  categories.appendChild(page);
}
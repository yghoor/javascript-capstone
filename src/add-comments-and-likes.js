export function addHeartToggleListeners() {
  document.querySelectorAll('.heart-empty-icon').forEach((heartIcon) => {
    heartIcon.addEventListener('click', () => {
      heartIcon.classList.toggle('d-none');
      heartIcon.nextElementSibling.classList.toggle('d-none');
    });
  });
}

export async function displayLikeCount(recipeId, appId) {
  let likeCounts;
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`)
    .then((response) => response.json())
    .then((result) => {
      likeCounts = result;
    });

  const recipeLikeCountSpan = document.getElementById(`recipe-${recipeId}-like-count`);
  likeCounts.forEach((likeCount) => {
    if (likeCount.item_id === recipeId) {
      recipeLikeCountSpan.textContent = `Likes: ${likeCount.likes} `;
    }
  });
}

export function addLikeListener(recipeId, appId) {
  const likeBtn = document.getElementById(`recipe-${recipeId}-like-btn`);

  likeBtn.addEventListener('click', () => {
    setTimeout(async () => {
      await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: `${recipeId}`,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      displayLikeCount(recipeId, appId);
    });
  });
}


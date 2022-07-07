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

async function displayItemComments(recipeId, appId) {
  let itemComments;
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${recipeId}`)
    .then((response) => response.json())
    .then((result) => {
      itemComments = result;
    });

  const commentsDiv = document.getElementById(`recipe-${recipeId}-comments`);
  commentsDiv.innerHTML = '';
  itemComments.forEach((comment) => {
    const commentCard = document.createElement('div');
    commentCard.className = 'col card d-flex flex-column justify-content-center align-items-center text-center py-3 my-1';
    commentCard.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-1">
      <h5 class="fs-4 card-title"></h5>

      <p></p>

      <span></span>
    </div>`;
    commentsDiv.appendChild(commentCard);
    commentCard.children[0].children[0].textContent = `${comment.username}`;
    commentCard.children[0].children[1].textContent = `${comment.comment}`;
    commentCard.children[0].children[2].textContent = `Date: ${comment.creation_date}`;
  });
}

async function submitAndDisplayComment(appId, recipeId, username, comment) {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${recipeId}`,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  displayItemComments(recipeId, appId);
  // Scroll to bottom of page after comment is added to page
  document.getElementById(`recipe-${recipeId}-modal`).scrollTop = document.getElementById(`recipe-${recipeId}-modal`).scrollHeight;
}

export async function addSubmitCommentListener(recipeId, appId) {
  const commentForm = document.getElementById(`recipe-${recipeId}-comment-form`);

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = commentForm.elements.name.value;
    const comment = commentForm.elements.comment.value;

    submitAndDisplayComment(appId, recipeId, username, comment);

    commentForm.reset();
  });
}

export function addDisplayCommentsListener(recipeId, appId) {
  const commentsButton = document.getElementById(`recipe-${recipeId}-comments-btn`);

  commentsButton.addEventListener('click', () => {
    displayItemComments(recipeId, appId);
  });
}

const editFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value.trim();
  const editPostTitle = document.querySelector('input[name="post-title"]').value.trim();
  const editPostBody = document.querySelector('textarea[name="post-body"]').value.trim();

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      editPostTitle,
      editPostBody
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);


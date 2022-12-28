const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const commentTitle = document.querySelector('input[name="commentId"]').value.trim();
    const commentBody = document.querySelector('textarea[name="commentText"]').value.trim();
  
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          commentTitle,
          commentBody
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#newComment')
    .addEventListener('submit', commentFormHandler);
  
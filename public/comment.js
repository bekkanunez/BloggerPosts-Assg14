const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const commentTitle = document.querySelector('input[name="commentId"]').value;
    const commentBody = document.querySelector('textarea[name="commentText"]').value;
  
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
  
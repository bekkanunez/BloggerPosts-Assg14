const newFormHandler = async function(event) {
    event.preventDefault();
  
    const newPostTitle = document.querySelector('input[name="post-title"]').value.trim();
    const newPostBody = document.querySelector('textarea[name="post-body"]').value.trim();
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        newPostTitle,
        newPostBody,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  
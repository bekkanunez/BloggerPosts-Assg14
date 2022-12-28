const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const usernameSignup = document.querySelector('#username-signup').value.trim();
    const passwordSignup = document.querySelector('#password-signup').value.trim();
  
    if (usernameSignup && passwordSignup) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ usernameSignup, passwordSignup }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Signup not successful');
      }
    }
  };

  document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);
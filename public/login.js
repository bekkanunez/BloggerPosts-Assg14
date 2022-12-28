const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userNameLogin = document.querySelector('#username-login').value.trim();
    const passwordLogin = document.querySelector('#password-login').value.trim();
  
    if (userNameLogin && passwordLogin) {
   
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ userNameLogin, passwordLogin }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert('Login not successful');
      }
    }
  };
      
document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  
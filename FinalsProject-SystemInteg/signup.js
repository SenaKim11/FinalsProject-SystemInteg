document.addEventListener('DOMContentLoaded', function () {
  var signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Validate the form data
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirm_password = document.getElementById('confirm_password').value;

      if (password !== confirm_password) {
          alert('Password and Confirm Password do not match.');
          return;
      }

      // Perform AJAX request to the server (replace this with your server endpoint)
      fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username: username,
              email: email,
              password: password,
          }),
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Signup successful!');
              // Redirect to login page or perform other actions on successful signup
              window.location.href = 'login.html';
          } else {
              alert('Signup failed. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });
});

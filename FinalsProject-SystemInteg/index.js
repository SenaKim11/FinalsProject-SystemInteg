document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Hardcoded username and password for demonstration purposes
      var hardcodedUsername = 'rain@gmail.com';
      var hardcodedPassword = 'mobiledev';

      // Check if entered credentials match the hardcoded values
      if (email === hardcodedUsername && password === hardcodedPassword) {
          alert('Login successful!');
          // Redirect to the desired page or perform other actions on successful login
          window.location.href = 'homepage.html';
      } else {
          alert('Invalid email or password. Please try again.');
          // You may add additional error handling or UI feedback here
      }
  });
});
  function loginWithGoogle() {
      // Sign in with Google
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(function (googleUser) {
          var profile = googleUser.getBasicProfile();
          var email = profile.getEmail();

          // Send the Google email to your server for authentication (or use it as needed)
          console.log('Google email:', email);

          // Navigate to the homepage
          window.location.href = 'homepage.html';
      });
  }

  // Load the Google Sign-In API
  gapi.load('auth2', function () {
      gapi.auth2.init({
          client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
      });
  });

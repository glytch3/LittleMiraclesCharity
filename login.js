const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener('DOMContentLoaded', function () {
  const signupButton = document.getElementById('signup-btn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');


  signupButton.addEventListener('click', function () {
      // Reset error message
      errorMessage.textContent = '';

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
          errorMessage.textContent = 'Invalid email format !';
          return;
      }

      // Validate phone number (10 digits)
      else if (phoneInput.value.length !== 10 || isNaN(phoneInput.value)) {
          errorMessage.textContent = 'Phone number should have 10 digits !';
          return;
      }

      // Validate password strength (at least 8 characters)
      else if (passwordInput.value.length < 8) {
          errorMessage.textContent = 'Password should be at least 8 characters !';
          return;
      }

      else {
        successMessage.textContent = 'Account created, please Sign In !';
        setTimeout(function() {
          container.classList.remove("right-panel-active");
        }, 3000); 
        return;
      }
      

      // If all validations pass, you can proceed with the signup logic
      // Add your signup code here, e.g., sending data to the server

      // Clear input fields
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      passwordInput.value = '';
  });
});






let SubMenu=document.getElementById("subMenu");
function toggleMenu(){
    SubMenu.classList.toggle("open-menu");
}
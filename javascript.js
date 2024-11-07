// Smooth scroll to Contact section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form validation function
function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  // Simple validation checks
  if (!firstName) {
    alert("Please enter your first name.");
    return false;
  }
  if (!lastName) {
    alert("Please enter your last name.");
    return false;
  }
  if (!email) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!message) {
    alert("Please enter your message.");
    return false;
  }
  
  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If all checks pass, show success message and reset form
  alert("Thank you for your message! We'll get back to you soon.");
  document.getElementById("contactForm").reset();
}

// Adding hover effect for buttons
document.querySelectorAll('.w3-button').forEach(button => {
  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = "#2a8f89";
  });
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = "#3aafa9";
  });
});

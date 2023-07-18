// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    const hash = this.hash;
    const target = $(hash);

    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 100
        },
        800
      );
    }
  }
});

// Form Handling 
const formEl = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msgInput = document.querySelector('#message');

const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Form Reset');
  // Clear Values
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  message.value = '';
  // Reset Submit button
  submitBtn.textContent = "Submit";
  submitBtn.removeAttribute('disabled');
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Send Clicked');

  // Change button style
  submitBtn.textContent = "Sent";
  submitBtn.setAttribute('disabled', 'disabled');
  
  // Handle Form Submission
  

});
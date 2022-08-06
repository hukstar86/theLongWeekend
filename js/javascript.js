
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {



    // Activate SimpleLightbox plugin for atrraction items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Scroll Reveal Animation

// home page

window.sr = ScrollReveal();
sr.reveal('.caption',{
    duration: 2000,
    delay:1000,
    origin: 'bottom',
    distance: '300px'
});

window.sr = ScrollReveal();
sr.reveal('.card-img-top',{
    duration: 2000,
    origin: 'bottom',
    distance:'300px',
    viewFactor: 0.2
});


window.sr = ScrollReveal();
sr.reveal('.date-pos',{
    duration: 2000,
    origin: 'bottom',
    distance:'300px',
    viewFactor: 0.2
});
window.sr = ScrollReveal();

// lightbox reveal

sr.reveal('.img-fluid',{
    duration: 2000,
    origin: 'bottom',
    distance:'300px',
    viewFactor: 0.2
});

sr.reveal('#toTopBtn',{
  duration: 5000,
  origin: 'right',
  distance:'300px',
  viewFactor: 0.2
});




// When the user clicks on the button, scroll to the top of the document
$(document).ready(function() {
  $(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
  $('#toTopBtn').fadeIn();
  } else {
  $('#toTopBtn').fadeOut();
  }
  });
  
  $('#toTopBtn').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });
  });

//function formValidations()
function formValidations() {
    //retrrive value from form
    firstName = document.forms["myForm"].firstName;
    email = document.forms["myForm"].email;
    message = document.forms["myForm"].message;


// check for the required input (fields)
if (firstName.value == ""){
    document.getElementById("firstName_error").innerHTML = "First name required";
}
if (email.value == ""){
document.getElementById("email_error").innerHTML = "Email Address Required";
}
if (message.value == ""){
    document.getElementById("message_error").innerHTML = "Message Required";
    
}
}

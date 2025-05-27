$(document).ready(function() {
  // Handle Register button click
  $('#registerBtn').click(function(event) {
    event.preventDefault(); // Prevent form submit default behavior
    
    // Simple validation example
    const name = $('#name').val();
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    // Show a confirmation message with fadeIn/fadeOut
    $('#responseMessage').text('Registration successful!').fadeIn().delay(2000).fadeOut();
  });

  // Example of fading event cards (assuming event cards have class .eventCard)
  $('.eventCard').hover(
    function() {
      $(this).fadeOut(200);
    },
    function() {
      $(this).fadeIn(200);
    }
  );
});

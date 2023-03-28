function formSubmission(event) {
    // prevent default form submission behavior
    event.preventDefault();
  
    alert("Thanks for your submission!");
    // reset the form
    document.getElementById("myForm").reset();
  }
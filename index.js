var yourName;

function storeName() {
    yourName = document.getElementById("name").value;
    console.log(yourName);
}

function formSubmission(event) {
    event.preventDefault();

    alert("Thanks for your submission " + yourName + ", we'll get back to you as soon as we can!");
    // reset the form
    document.getElementById("myForm").reset();
}

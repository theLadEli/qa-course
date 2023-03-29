// Forms & DOM

// The below had to be declared outside of the formSubmission function for it to work
var yourName;
var yourEmail;
var yourSubject;
var yourMessage;

//A function called when the form is submitted
function formSubmission(event) {
    //Prevents the default form submission actions
    event.preventDefault();

    //Sets the variable values to the form field values
    yourName = document.getElementById("name").value;
    yourEmail = document.getElementById("email").value;
    yourSubject = document.getElementById("subject").value;
    yourMessage = document.getElementById("message").value;

    //Updates the submission toast with the values
    document.getElementById('toast-submission-details').innerHTML = (`
        <p style="font-size: 14px;">
            <b>Name:</b> ${yourName}
            <br><b>Email:</b> ${yourEmail}
            <br><b>Subject:</b> ${yourSubject}
            <br><b>Message:</b> ${yourMessage}
       </p>`
    )

    //Unhides the toast
    document.getElementById("form-submit-toast").style.display = "inline";

    //Resets the form
    document.getElementById("myForm").reset();
}

//Exit toast
function closeToast(){
    document.getElementById('form-submit-toast').style.display = 'none';
}


// Conditional Logic

//A function called when the form is submitted
function conditionalForm() {
    //Prevents the default form submission actions
    event.preventDefault();

    //Gets the value of the number field
    var conditionalNumber = document.getElementById("conditional-number").value;

    //Updates the appropriate class depending on what the number is
    if (conditionalNumber == 5) {
        console.log("submitted 5");
        document.getElementById("conditional-red").classList.add('conditional-logic-red');
        document.getElementById("conditional-green").classList.remove('conditional-logic-green');
    } else if (conditionalNumber > 5 || conditionalNumber < 5) {
        document.getElementById("conditional-red").classList.remove('conditional-logic-red');
        document.getElementById("conditional-green").classList.add('conditional-logic-green');
    }
}


// Loops

//A function called on button click
function startWhileLoop() {
    var loopCount = 0;
    var loopOutput = '';
    
    function loop() {
        //A loop to continuously update the loop output div until the loopCount variable is 10
        if (loopCount <= 10) {
        loopOutput += 'The count is ' + loopCount + '<br>';
        loopCount++;
        document.getElementById('while-loop-output').innerHTML = loopOutput;
        //An artificial delay between the loops for visual effect
        setTimeout(loop, 300);
        }
    }
    
    loop();
}


// Events

//A function called called when the "Show" button is pressed to display the text
function showButton() {
    document.getElementById('js-events-p').style.display = "block";
}

//A function called called when the "Hide" button is pressed to hide the text
function hideButton() {
    document.getElementById('js-events-p').style.display = "none";
}
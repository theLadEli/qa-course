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

function conditionalForm() {
    var conditionalNumber = document.getElementById("conditional-number").value;
    console.log(conditionalNumber)

    if (conditionalNumber == 5) {
        console.log("submitted 5");
        document.getElementById("conditional-red").classList.add('conditional-logic-red');
        document.getElementById("conditional-green").classList.remove('conditional-logic-green');
    } else if (conditionalNumber > 5 || conditionalNumber < 5) {
        document.getElementById("conditional-red").classList.remove('conditional-logic-red');
        document.getElementById("conditional-green").classList.add('conditional-logic-green');
    }
}


function startWhileLoop() {
    var loopCount = 0;
    var loopOutput = '';
    
    function loop() {
      if (loopCount <= 10) {
        loopOutput += 'The count is ' + loopCount + '<br>';
        loopCount++;
        document.getElementById('while-loop-output').innerHTML = loopOutput;
        setTimeout(loop, 300);
      }
    }
    
    loop();
  }
  


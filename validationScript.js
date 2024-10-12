    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let input = document.getElementById("inputField");



let form = document.getElementById("myForm");






form.setAttribute("onsubmit", "return submitBtn()");
input.addEventListener("change", submitBtn);

function submitBtn(){



console.log(input.value)
if (input.value === ""){
  
  
 input.setCustomValidity("Please Enter something in the input");

  return false 
} else if (!/^[a-zA-Z0-9]*$/.test(input.value)) {
 input.setCustomValidity("Please Enter a Alpha Numeric input");
  return false
} else {
  input.setCustomValidity("");
  return true
}



}




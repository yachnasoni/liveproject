
//SEND MAIL TO ADMIN
const form = document.getElementById("rform");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // validate();
  //    sendEmail();
  validatedata();
  });
//   const form= document.querySelector("form");
function sendEmail()
{
const Firstname = document.getElementById("firstname").value;
const Lastname = document.getElementById("lastname").value;
const EmailValue = document.getElementById("inputEmail3").value;
const insta = document.getElementById("instausername").value;
const snapchat = document.getElementById("snapusername").value;
const Degree = document.getElementById("inlineFormSelectPref").value;
const Phone_no = document.getElementById("phnnumber").value;
const birthday = document.getElementById("birthdate").value;
const address1 = document.getElementById("inputAddress").value;
const address2 = document.getElementById("inputAddress2").value;
const city = document.getElementById("inputCity").value;
const state= document.getElementById("inlineFormSelect").value;
const Fname = document.getElementById("EFname").value;
const Lname = document.getElementById("ELname").value;
const Gender = document.getElementById("gender").value;
const num = document.getElementById("number").value;
const schlname = document.getElementById("name").value;
const check = document.getElementById("flexCheckDefault").value;
const txt1 = document.getElementById("exampleFormControlTextarea1").value;
const radio = document.getElementById("inlineRadio2").value;
const txt2 = document.getElementById("exampleFormControlTextarea2").value;


   const bodyMessage =`FirstName: ${Firstname.value} <br> 
    LastName: ${Lastname.value}<br>
    Instagram-Username: ${insta.value}<br>
    Snapchat-Username: ${snapchat.value}<br>
    Education: ${Degree.value}<br> 
    PhoneNo: ${Phone_no.value}<br>
    Address1: ${address1.value}<br> 
    Address2: ${address2.value}<br>
    City: ${city.value}<br> 
    fname: ${Fname.value}<br>
    lname: ${Lname.value}<br>
    Relationship: ${Gender.value}<br>
    Number: ${num.value}<br> 
    SchoolName: ${schlname.value}<br> 
    Text1: ${txt1.value}<br> 
    Text2: ${txt2.value}<br> 
    bornday: ${birthday.value}<br></br>
    Check: ${check.value}<br>
    Bc/Obc: ${radio.value}<br> 
    State: ${state.value}<br>
   Email_id: ${EmailValue.value} `;
   

    Email.send({
        Host : "smtp.elasticemail.com",
        Username: "academy.internetspace@gmail.com",
        Password : "6B731C26284EB25CEF571712B7C19375FD39",
        To : 'academy.internetspace@gmail.com',
        From : 'academy.internetspace@gmail.com',
        Subject :"student Registration",
        Body : bodyMessage
    }).then(
    //   message => alert("message sent successfully")
    // );
    () => {
        alert("Message sent successfully");
        form.reset(); // Clear form after successful submission
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message");
      }
    );
  }
  


// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   // validate();
// //    sendEmail();

// });
   

function validatedata()
{
  // var ptrn = /^[A-Za-z]+$/;
  var a= document.getElementById("firstname").value.trim();
  var b= document.getElementById("lastname").value.trim();
  var c= document.getElementById("inlineFormSelectPref").value.trim();
  var d= document.getElementById("inputEmail3").value.trim();
  var e= document.getElementById("phnnumber").value.trim();
  var f= document.getElementById("birthdate").value.trim();
  var g= document.getElementById("inputAddress").value.trim();
  var h= document.getElementById("inputAddress2").value.trim();
  var i= document.getElementById("inputCity").value.trim();
  var j= document.getElementById("inlineFormSelect").value.trim();
  var k= document.getElementById("EFname").value.trim();
  var l= document.getElementById("ELname").value.trim();
  var m= document.getElementById("gender").value.trim();
  var n= document.getElementById("number").value.trim();
  var o= document.getElementById("name").value.trim();
  var p= document.getElementById("exampleFormControlTextarea2").value.trim();
  var q= document.getElementById("exampleFormControlTextarea2").value.trim();
   
  if(a==""||b==""||c==""||d==""||e==""||f==""||g==""||h==""||i==""||j==""||k==""||l==""||m==""||n==""||o==""||p==""||q==""||r=="")
   
  //  console.log("asjncj");
    alert("Please fill all valid fields");
   

 else{
  console.log("send mail");
  sendEmail();
}
   
}

// phone number
function checkMaxLength(input) {
  if (input.value.length > 10) {
      input.value = input.value.slice(0, 10); // Truncate the input to 10 characters
  }
}

var firstNameInput = document.getElementById("firstname");
var typingTimer; // Timer identifier
var doneTypingInterval = 500; // Time in milliseconds (0.5 seconds)

// Add event listener for input event
firstNameInput.addEventListener("input", function() {
    // Clear previous timer
    clearTimeout(typingTimer);

    // Set a new timer to wait for a pause in typing
    typingTimer = setTimeout(validateFirstNameOnPause, doneTypingInterval);
});

// Function to validate first name when typing pauses
function validateFirstNameOnPause() {
    // Get the input value
    var firstName = firstNameInput.value.trim();

    // Check if the input meets the conditions
    if (!isValidFirstName(firstName)) {
        // Display error message
        alert("Please enter a valid first name (uppercase, at least 3 characters, no numbers)");
    }
}

// Function to validate first name
function isValidFirstName(firstName) {
    // Check if first name starts with uppercase letter
    if (!/^[A-Z]/.test(firstName)) {
        return false;
    }

    // Check if first name has at least 3 characters
    if (firstName.length < 3 || firstName.length > 15) {
        return false;
    }

    // Check if first name contains only letters
    if (!/^[A-Za-z]+$/.test(firstName)) {
        return false;
    }

    return true;
}


var lastNameInput = document.getElementById("lastname");
var typingTimer; // Timer identifier
var doneTypingInterval = 500; // Time in milliseconds (0.5 seconds)

// Add event listener for input event
lastNameInput.addEventListener("input", function() {
    // Clear previous timer
    clearTimeout(typingTimer);

    // Set a new timer to wait for a pause in typing
    typingTimer = setTimeout(validateLastNameOnPause, doneTypingInterval);
});

// Function to validate last name when typing pauses
function validateLastNameOnPause() {
    // Get the input value
    var lastName = lastNameInput.value.trim();

    // Check if the input meets the conditions
    if (!isValidLastName(lastName)) {
        // Display error message
        alert("Please enter a valid last name (uppercase, at least 3 characters, no numbers)");
    }
}

// Function to validate last name
function isValidLastName(lastName) {
    // Check if last name starts with uppercase letter
    if (!/^[A-Z]/.test(lastName)) {
        return false;
    }

    // Check if last name has at least 3 characters
    if (lastName.length < 3 || lastName.length > 15) {
        return false;
    }

    // Check if last name contains only letters
    if (!/^[A-Za-z]+$/.test(lastName)) {
        return false;
    }

    return true;
}




var EFnameInput = document.getElementById("EFname");
var typingTimer; // Timer identifier
var doneTypingInterval = 500; // Time in milliseconds (0.5 seconds)

// Add event listener for input event
EFnameInput.addEventListener("input", function() {
    // Clear previous timer
    clearTimeout(typingTimer);

    // Set a new timer to wait for a pause in typing
    typingTimer = setTimeout(validateEFnameOnPause, doneTypingInterval);
});

// Function to validate EFname when typing pauses
function validateEFnameOnPause() {
    // Get the input value
    var EFname =EFnameInput.value.trim();

    // Check if the input meets the conditions
    if (!isValidEFname(EFname)) {
        // Display error message
        alert("Please enter a valid EFname name (uppercase, at least 3 characters, no numbers)");
    }
}

// Function to validate EFname
function isValidEFname(EFname) {
    // Check if EFname starts with uppercase letter
    if (!/^[A-Z]/.test(EFname)) {
        return false;
    }

    // Check if EFname has at least 3 characters
    if (EFname.length < 3 || EFname.length > 15) {
        return false;
    }

    // Check if EFname contains only letters
    if (!/^[A-Za-z]+$/.test(EFname)) {
        return false;
    }

    return true;
}


var ELnameInput = document.getElementById("ELname");
var typingTimer; // Timer identifier
var doneTypingInterval = 500; // Time in milliseconds (0.5 seconds)

// Add event listener for input event
ELnameInput.addEventListener("input", function() {
    // Clear previous timer
    clearTimeout(typingTimer);

    // Set a new timer to wait for a pause in typing
    typingTimer = setTimeout(validateELnameOnPause, doneTypingInterval);
});



// Function to validate ELname when typing pauses
function validateELnameOnPause() {
    // Get the input value
    var ELname =ELnameInput.value.trim();

    // Check if the input meets the conditions
    if (!isValidELname(ELname)) {
        // Display error message
        alert("Please enter a valid ELname (uppercase, at least 3 characters, no numbers)");
    }
}

// Function to validate ELname
function isValidELname(ELname) {
    // Check if ELname starts with uppercase letter
    if (!/^[A-Z]/.test(ELname)) {
        return false;
    }

    // Check if ELname has at least 3 characters
    if (ELname.length < 3 || ELname.length > 15) {
        return false;
    }

    // Check if ELname contains only letters
    if (!/^[A-Za-z]+$/.test(ELname)) {
        return false;
    }

    return true;
}



var genderInput = document.getElementById("gender");
var typingTimer; // Timer identifier
var doneTypingInterval = 500; // Time in milliseconds (0.5 seconds)

// Add event listener for input event
genderInput.addEventListener("input", function() {
    // Clear previous timer
    clearTimeout(typingTimer);

    // Set a new timer to wait for a pause in typing
    typingTimer = setTimeout(validategenderOnPause, doneTypingInterval);
});



// Function to validate gender when typing pauses
function validategenderOnPause() {
    // Get the input value
    var gender =genderInput.value.trim();

    // Check if the input meets the conditions
    if (!isValidgender(gender)) {
        // Display error message
        alert("Please enter a valid gender (uppercase, at least 3 characters, no numbers)");
    }
}

// Function to validate gender
function isValidgender(gender) {
    // Check if gender starts with uppercase letter
    if (!/^[A-Z]/.test(gender)) {
        return false;
    }

    // Check if gender has at least 3 characters
    if (gender.length < 3 || gender.length > 15) {
        return false;
    }

    // Check if gender contains only letters
    if (!/^[A-Za-z]+$/.test(gender)) {
        return false;
    }

    return true;
}

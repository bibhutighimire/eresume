// Citation
//@Link https://www.youtube.com/watch?v=rsd4FNGTRBw
//instiating  ID's
let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let reenteremail = document.getElementById("reenteremail");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

//Contact Form JS Function. 
const c = document.getElementById("sendEmailLink")
if (c) {
    c.addEventListener("click", (e) => {
        e.preventDefault();
        CheckInputs();
    });
}
//It will redirect to sending email step once check input function is completed
//Using mailto: to append message, subject and body element of comtact form to outlook
function Redirect() {

    //GETTING SUBJECT VALUE
    let subject = document.getElementById("subject").value;
    //GETTING message VALUE
    let message = document.getElementById("message").value;
    document.location.href = "mailto:ghimirebibhuti@gmail.com?subject=" +
        subject +
        "&body=" + message;
        //this will clear all text box of the form
        form.reset();

    
}
//https://www.c-sharpcorner.com/blogs/block-specific-bad-words-using-javascript-jquery
//Below method will use for loop to check every word in message.value and compare it with restricted words . if any of the word matches with restricted word, error will be error++ and error message is generated as well as it prevents form from submitting.
function SwearWordsTracker() {
    let hasSwearWords = false;
    let restrictedWords = new Array("kill", "fight", "slap", "feldercarb", "frack", "skinjob", "vulgacarb");
    let txtInput = document.getElementById("message").value;
    let error = 0;
    for (let i = 0; i < restrictedWords.length; i++) {
        let val = restrictedWords[i];
        if ((txtInput.toLowerCase()).indexOf(val.toString()) > -1) {
            error = error + 1;
        }
    }

    if (error > 0) {
        ErrorResult(message, "You have used BAD word in the message. We will not tolerate this.");
        hasSwearWords = true;
    } else {
        //it goes to redirect function only if forms are checked properly with bad word tracker and input checker
        Redirect();
    }
}
//end of https://www.c-sharpcorner.com/blogs/block-specific-bad-words-using-javascript-jquery
//checkinput function will check if there is any empty field in the contact form
function CheckInputs() {

    const fnamevalue = fname.value.trim();
    const lnamevalue = lname.value.trim();
    const emailvalue = email.value.trim();
    const reenteremailvalue = reenteremail.value.trim();
    const subjectvalue = subject.value.trim();
    let messagevalue = message.value.trim();
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input
    //https://stackoverflow.com/questions/17384992/how-to-block-bad-words-upon-form-submit

    let hasErrors = false;

    if (fnamevalue === "") {
        ErrorResult(fname, "First Name can not be blank");
        hasErrors = true;
    } else {
        SuccessResult(fname);
    }
    if (lnamevalue === "") {
        ErrorResult(lname, "Last Name can not be blank");
        hasErrors = true;
    } else {
        SuccessResult(lname);
    }
    if (emailvalue === "") {
        ErrorResult(email, "Email Address can not be blank");
        hasErrors = true;
    } else if (!ValidateEmail(emailvalue)) {
        ErrorResult(email, "Enter valid Email Address");
        hasErrors = true;
    } else {
        SuccessResult(email);
    }
    if (reenteremailvalue === "") {
        ErrorResult(reenteremail, "Email Address can not be blank");
        hasErrors = true;
    } else if (!ValidateEmail(reenteremailvalue)) {
        ErrorResult(reenteremail, "Enter valid Email Address");
        hasErrors = true;
    } else if (emailvalue !== reenteremailvalue) {
        ErrorResult(reenteremail, "Email Address entered do not match")
        hasErrors = true;
    } else {
        SuccessResult(reenteremail);
    }

    if (subjectvalue === "") {

        ErrorResult(subject, "Subject can not be blank");
        hasErrors = true;

    } else {
        SuccessResult(subject);
    }

    if (messagevalue === "") {

        ErrorResult(message, "Message can not be blank");
        hasErrors = true;
    } 
    else {
        SuccessResult(message);
    }
    //https://stackoverflow.com/questions/14452524/show-alert-if-any-bad-filtered-word-is-present-in-form-input
    //After checking for input, the if loop will goto SwearWordsTracker() method.
    if (hasErrors === false) {
        SwearWordsTracker();
    }
}
//function to deal with error result i.e. if there is empty input in contact form
//Input: It will take the value from input box of contact form and provide message as output. 
function ErrorResult(input, message) {
    const formcontrol = input.parentElement; //form-control
    const small = formcontrol.querySelector("small");
    small.innerText = message;
    formcontrol.className = "form-control error";
}
//function to deal with success result i.e. if there is no empty input in contact form
//Input: It will take the value from input box of contact form
function SuccessResult(input) {
    const formcontrol = input.parentElement; //form-control
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control success";
}


//@link https://www.w3resource.com/javascript/form/email-validation.php
//This will check the validity of email address
//https://codepen.io/FlorinPop17/pen/OJJKQeK
//Expectation: when user enters email which is not of type email, the function below validates it.
//Input: Email is passed from contact form email input field

function ValidateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//back to top button
//Get the button
//Expectation: To get Back To Top Bottom on bottom right of screen when user scrolls 20px down
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    ScrollFunction()
};

function ScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function TopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//end of back to top button https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

//filter JS function start
//This is a button filter used in index.html starting from Line number 206. It expects us to eith show all, wrapper design, graphics deign, media design, web design and others. 
FilterSelection("all")

function FilterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        W3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) W3AddClass(x[i], "show");
    }
}

function W3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function W3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = document.getElementsByClassName(".btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//filter js function end
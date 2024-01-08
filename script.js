
// Get the current year and set it in the designated element
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Function to toggle the menu
function toggleMenu() {
    var checkbox = document.getElementById('menu-icon');
    if (checkbox.checked) {
        checkbox.checked = false;
    } else {
        console.log('Checkbox is not checked');
    }
}

// Initialize the current step
let currentStep = 1;

// Function to show a specific step
function showStep(step) {
    $('.step').hide();
    $(`#step${step}`).show();
}

// Function to move to the next step
function nextStep(next) {
    // Handle specific steps
    if (currentStep === 1) {
        const userName = $('#firstName').val();
        $('#typed-text').text(`HI! ${userName}. Are you want to hire me`);
    } else if (currentStep === 2) {
        // const userEmail = $('#email').val();
        $('#typed-text').text(`I'm happy to connect with you....type massage for me`);
    } else if (currentStep === 3) {
        // const userMassage = $('#msg').val();
        $('#typed-text').text(`Thank you! `);
    }

    showStep(next);
    currentStep = next;
    updateReview();
    resetTypingEffect();
}

// Function to move to the previous step
function prevStep(prev) {
    showStep(prev);
    currentStep = prev;
    updateReview();
    resetTypingEffect();
}

// Function to update the review section
function updateReview() {
    if (currentStep === 4) {
        const reviewDetails = $('#reviewDetails');
        const firstName = $('#firstName').val();
        const email = $('#email').val();

        reviewDetails.html(`
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
        `);
    }
}

// Function to reset the typing effect
function resetTypingEffect() {
    const textToType = $('#typed-text').text();
    $('#typed-text').empty();
    typeText(textToType);
}

// Variables for form elements
var btn = document.querySelectorAll("#userForm button");
var inputBox = document.querySelectorAll("#userForm input");
var previousBtn = document.querySelectorAll("#userForm .previousBtn");

// Function to type text
function typeText(textToType) {
    if (typeof textToType !== 'string') {
        console.error('Input must be a string');
        return;
    }
    let index = 0;

    // Hide buttons and disable input boxes during typing
    btn.forEach(function (button) {
        button.style.display = "none";
    });
    inputBox.forEach(function (input) {
        input.disabled = true;
    });

    // Recursive function to append characters one by one
    function appendNextCharacter() {
        if (index < textToType.length) {
            $('#typed-text').append(textToType.charAt(index));
            index++;
            setTimeout(appendNextCharacter, 100);
        } else {
            // Show buttons and enable input boxes after typing
            previousBtn.forEach(function (button) {
                button.style.display = "inline-block"; // preview
            });
            inputBox.forEach(function (input) {
                input.disabled = false;
            });
        }
    }

    appendNextCharacter();
}

// Function to reset the form
function resetForm() {
    document.getElementById("userForm").reset();
}

// Set form action and method
document.getElementById("userForm").action = "processForm.php";
document.getElementById("userForm").method = "post";

// Show the initial step
showStep(currentStep);

// Event listener for scrolling to the top
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
            duration: 100
        });
    });
});

// Event listeners for input changes to show/hide step buttons
document.addEventListener("DOMContentLoaded", function () {
    var firstNameInput = document.getElementById("firstName");
    var stepBtn1 = document.querySelector("#step1 button");

    var emailInput = document.getElementById("email");
    var stepBtn2 = document.querySelector("#step2 button:last-child");

    var msgInput = document.getElementById("msg");
    var stepBtn3 = document.querySelector("#step3 button:last-child");

    if (firstNameInput && stepBtn1) {
        firstNameInput.addEventListener("input", function () {
            stepBtn1.style.display = firstNameInput.value.trim() === "" ? "none" : "inline-block";
        });
    }
    if (emailInput && stepBtn2) {
        emailInput.addEventListener("input", function () {
            stepBtn2.style.display = emailInput.value.trim() === "" ? "none" : "inline-block";
        });
    }
    if (msgInput && stepBtn3) {
        msgInput.addEventListener("input", function () {
            stepBtn3.style.display = msgInput.value.trim() === "" ? "none" : "inline-block";
        });
    }
});

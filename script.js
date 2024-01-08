
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function toggleMenu(){
    var checkbox = document.getElementById('menu-icon');
    if (checkbox.checked) {
      checkbox.checked = false;
    } else {
      console.log('Checkbox is not checked');
    }
}


let currentStep = 1;

function showStep(step) {
  $('.step').hide();
  $(`#step${step}`).show();
}

function nextStep(next) {
  if (currentStep === 1) {
    const userName = $('#firstName').val();
    $('#typed-text').text(`HI! ${userName}. Are you want to hire me`);
  } else if (currentStep === 2) {
    // const userEmail = $('#email').val();
    $('#typed-text').text(`I'm happy to connect with you....type massage for me`);
  }else if (currentStep === 3) {
    // const userMassage = $('#msg').val();
    $('#typed-text').text(`Thank you! `);
  }

  showStep(next);
  currentStep = next;
  updateReview();
  resetTypingEffect();
}





function prevStep(prev) {
  showStep(prev);
  currentStep = prev;
  updateReview();
  resetTypingEffect();
}

function updateReview() {
  if (currentStep === 4) {
    const reviewDetails = $('#reviewDetails');
    const firstName = $('#firstName').val();
    const email = $('#email').val();
    // const massage = $('#msg').val();

    reviewDetails.html(`
      <p><strong>Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      
    `);
  }
}

function resetTypingEffect() {
  const textToType = $('#typed-text').text();
  $('#typed-text').empty();
  typeText(textToType);
}

function typeText(textToType) {
  if (typeof textToType !== 'string') {
    console.error('Input must be a string');
    return;
  }

  let index = 0;

  function appendNextCharacter() {
    if (index < textToType.length) {
      $('#typed-text').append(textToType.charAt(index));
      index++;
      setTimeout(appendNextCharacter, 100); // Adjust typing speed (milliseconds)
    }
  }

  appendNextCharacter();
}


document.getElementById("userForm").action = "processForm.php";
document.getElementById("userForm").method = "post";


// $('#userForm').submit(function (event) {
//   event.preventDefault();
//   $('#typed-text').text(`We are freind now! Let's journey together `);
// });

$('#userForm').submit(function (event) {
  event.preventDefault();
  $('#typed-text').text(`We are freind now! Let's journey together `);
  
  const formData = {
    firstName: $('#firstName').val(),
    email: $('#email').val(),
    msg: $('#msg').val()
  };

  // Send form data to server
  $.ajax({
    type: 'POST',
    url: 'sendMail.php',
    data: formData,
    success: function (response) {
      // Handle the response from the server (if needed)
      console.log(response);
      $('#typed-text').text(`We are friends now! Let's journey together`);
    },
    error: function (error) {
      console.error('Error:', error);
    }
  });
});


// Initial setup
showStep(currentStep);
typeText($('#typed-text').text());





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

document.addEventListener("DOMContentLoaded", function () {
  var firstNameInput = document.getElementById("firstName");
  var stepBtn1 = document.querySelector("#step1 button");

  var emailInput = document.getElementById("email");
  var stepBtn2 = document.querySelector("#step2 button:last-child");

  var msgInput = document.getElementById("msg");
  var stepBtn3 = document.querySelector("#step3 button:last-child");

  if (firstNameInput && stepBtn1) {
    firstNameInput.addEventListener("input", function () {
      if (firstNameInput.value.trim() === "") {
        stepBtn1.style.display = "none";
      } else {
        stepBtn1.style.display = "inline-block";
      }
    });
  }
 if (emailInput && stepBtn2) {
    emailInput.addEventListener("input", function () {
      if (emailInput.value.trim() === "") {
        stepBtn2.style.display = "none";
      } else {
        stepBtn2.style.display = "inline-block";
      }
    });
  }
   if (msgInput && stepBtn3) {
    msgInput.addEventListener("input", function () {
      if (msgInput.value.trim() === "") {
        stepBtn3.style.display = "none";
      } else {
        stepBtn3.style.display = "inline-block";
      }
    });
  }
});
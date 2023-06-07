// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".article__form");
  var mainForms = document.querySelectorAll(".article__main-form");
  var thankyous = document.querySelectorAll(".article__thankyou");

  var formSubmitted = localStorage.getItem("formSubmitted");

  if (formSubmitted) {
    mainForms.forEach(function (mainForm) {
      mainForm.style.display = "none"; // Hide the main form
    });

    thankyous.forEach(function (thankyou) {
      thankyou.style.display = "block"; // Show the thank you message
    });
  } else {
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Form submission successful
            mainForms.forEach(function (mainForm) {
              mainForm.style.display = "none"; // Hide the main form
            });

            thankyous.forEach(function (thankyou) {
              thankyou.style.display = "block"; // Show the thank you message
            });

            localStorage.setItem("formSubmitted", true); // Set flag indicating form submission
          }
        };

        // Get form data
        var formData = new FormData(form);
        xhr.send(formData);
      });
    });
  }

  // Fetch IP address
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.ipify.org?format=json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var ipInputs = document.querySelectorAll("#ip-input");
      ipInputs.forEach(function (ipInput) {
        ipInput.value = data.ip;
      });
    }
  };
  xhr.send();
});

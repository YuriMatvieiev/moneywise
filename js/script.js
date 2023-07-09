// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".article__form");
  var mainForms = document.querySelectorAll(".article__main-form");
  var thankyous = document.querySelectorAll(".article__thankyou");
  var loaders = document.querySelectorAll(".loader");

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
      var submitButton = form.querySelector("button[type='submit']");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        if (submitButton.disabled) {
          return; // Do nothing if the button is disabled
        }

        submitButton.disabled = true; // Disable the submit button

        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);

        // Show the loader
        loaders.forEach(function (loader) {
          loader.style.display = "block";
        });

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Form submission successful
            mainForms.forEach(function (mainForm) {
              mainForm.style.display = "none"; // Hide the main form
            });

            thankyous.forEach(function (thankyou) {
              thankyou.style.display = "block"; // Show the thank you message
            });

            // Hide the loader
            loaders.forEach(function (loader) {
              loader.style.display = "none";
            });

            localStorage.setItem("formSubmitted", true); // Set flag indicating form submission

            // Additional code to execute after form submission
            /* gtag("event", "conversion", {
              send_to: "AW-11129291846/bXvgCM61760YEMaI7rop",
              transaction_id: "",
            }); */
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

// Get the current date
var today = new Date();

// Convert the date to the desired format
var options = { year: "numeric", month: "long", day: "numeric" };
var formattedDate = today.toLocaleDateString("en-US", options).toUpperCase();

// Update the article__date element with the current date
var dateElement = document.getElementById("currentDate");
dateElement.textContent = formattedDate;

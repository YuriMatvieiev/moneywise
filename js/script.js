// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".article__form");
  var mainForm = document.querySelector(".article__main-form");
  var thankyou = document.querySelector(".article__thankyou");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Form submission successful
        mainForm.style.display = "none"; // Hide the main form
        thankyou.style.display = "block"; // Show the thank you message
      }
    };

    // Get form data
    var formData = new FormData(form);
    xhr.send(formData);
  });

  // Fetch IP address
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.ipify.org?format=json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      document.getElementById("ip-input").value = data.ip;
    }
  };
  xhr.send();
});

// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Submit the form data using AJAX
  var form = event.target;
  var url = form.action;
  var formData = new FormData(form);

  // AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Redirect to the thank-you page
      window.location.href = "thankyou.html";
    }
  };
  xhr.send(formData);
}

// Attach the form submission event handler
var form = document.querySelector(".article__form");
form.addEventListener("submit", handleFormSubmit);

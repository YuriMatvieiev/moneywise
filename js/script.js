// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission
document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.ipify.org?format=json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      document.getElementById("ip-input").value = data.ip;

      // Submit the form
      var form = document.querySelector(".article__form");
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Send the form data
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = "thankyou.html"; // Redirect to thankyou.html
          }
        };
        xhr.send(formData);
      });
    }
  };
  xhr.send();
});

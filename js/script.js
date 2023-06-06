// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec
// Function to handle the form submission

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(form);

    // Send form data to the server
    fetch(
      "https://script.google.com/macros/s/AKfycbx1r4zUC-gXaiRp4HUZXb08JfZ_VS1zRWPYHV4ns9OvboRI4xYcqu1T03V29HxYa1TUbQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(function (response) {
        if (response.ok) {
          window.location.href = "thankyou.html"; // Redirect to thankyou.html upon successful form submission
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
        // Handle error case
      });
  });

  // Retrieve IP address
  fetch("https://api.ipify.org?format=json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(function (data) {
      document.getElementById("ip-input").value = data.ip;
    })
    .catch(function (error) {
      console.log(error);
      // Handle error case
    });
});

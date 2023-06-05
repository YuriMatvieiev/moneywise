// https://script.google.com/macros/s/AKfycbxdeDGV_j95ohIIDnSSpXI5iZeAaRduUSrEscUQhbqD0S7bhyB1Lv02NLROPG_fWNQ9qw/exec

const scriptURL =
  "https://script.google.com/macros/s/AKfycbygg9gnWipCuP5L46gxaDvyxNJby-qNY-_9940S7fmFkrOLWQlfXkq8_6u7132sjIIJ9Q/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

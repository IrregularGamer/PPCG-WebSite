document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has already seen the alert in this session
  if (!sessionStorage.getItem("welcomeMessageShown")) {
    // Show the alert
    alert("Welcome to PrimPerfection!");

    // Set a flag in sessionStorage so it doesn't show again
    sessionStorage.setItem("welcomeMessageShown", "true");
  }
});

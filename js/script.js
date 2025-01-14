// Wait for the DOM to fully load

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is running!"); // Debug log

  // Smooth scroll for navigation
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Welcome message logic
  if (!sessionStorage.getItem("welcomeMessageShown")) {
    const messageBox = document.getElementById("welcomeMessage");

    // Ensure the element exists
    if (messageBox) {
      console.log("Found the message box!");

      // Make it visible
      messageBox.classList.remove("hidden");
      messageBox.classList.add("show");

      // Remove the message after 5 seconds
      setTimeout(() => {
        console.log("Hiding the message box...");
        messageBox.classList.remove("show");
        setTimeout(() => {
          messageBox.classList.add("hidden");
        }, 500); // Wait for animation to complete before hiding
      }, 5000);

      // Set sessionStorage flag
      sessionStorage.setItem("welcomeMessageShown", "true");
    } else {
      console.error("Message box not found!");
    }
  } else {
    console.log("Welcome message already shown this session.");
  }

  // Initialize Slick Carousel
  if ($(".testimonial-carousel").length) {
    console.log("Initializing the Slick carousel...");
    $(document).ready(function () {
      $(".testimonial-carousel").slick({
        dots: true, // Enable dots navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        adaptiveHeight: true, // Adjust height based on content
      });
    });
    
  } else {
    console.warn("Slick carousel element not found!");
  }
});

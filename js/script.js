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
    $(".testimonial-carousel").slick({
      infinite: true, // Enable infinite scrolling
      slidesToShow: 1, // Show one testimonial at a time
      slidesToScroll: 1, // Scroll one testimonial at a time
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
      dots: true, // Enable dots navigation
      arrows: false, // Disable arrows
      draggable: true, // Allow mouse dragging
      swipe: true, // Enable swipe for touch devices
      touchThreshold: 10, // Adjust swipe sensitivity
      adaptiveHeight: true, // Adjust height dynamically based on content
    });
  } else {
    console.warn("Slick carousel element not found!");
  }
});

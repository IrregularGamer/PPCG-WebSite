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
  $(".testimonial-carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // Contact Form submission logic
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      console.log("Submitting form data:", formData); // Debug log

      try {
        const response = await fetch("http://localhost:3000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Response received:", response); // Debug log

        if (response.ok) {
          console.log(
            "Submission successful, redirecting to confirmation page."
          );
          window.location.href = "confirmation.html"; // Redirect to confirmation page
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });

    // Inline validation for email
    contactForm.addEventListener("submit", function (e) {
      const email = document.querySelector("input[type='email']");
      if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  } else {
    console.error("Contact form not found!");
  }
});

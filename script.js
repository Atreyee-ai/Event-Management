// Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      if(name && email && message) {
        document.getElementById("responseMsg").innerText = "✅ Thank you! Your message has been sent.";
        document.getElementById("responseMsg").style.color = "green";
        form.reset();
      } else {
        document.getElementById("responseMsg").innerText = "❌ Please fill all fields!";
        document.getElementById("responseMsg").style.color = "red";
      }
    });
  }
});
// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Popup handling
  const popupTriggers = document.querySelectorAll(".popup-trigger");
  const popups = document.querySelectorAll(".popup");
  const closes = document.querySelectorAll(".popup .close");

  popupTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const popupId = trigger.getAttribute("data-popup");
      document.getElementById(popupId).style.display = "flex";
    });
  });

  closes.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".popup").style.display = "none";
    });
  });

  // Close popup if user clicks outside content
  window.addEventListener("click", (e) => {
    popups.forEach(popup => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});


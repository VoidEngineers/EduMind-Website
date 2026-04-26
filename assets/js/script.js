const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const milestoneFilter = document.getElementById("milestone-filter");
const milestoneCards = document.querySelectorAll(".milestone-card");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const sendMessageButton = document.getElementById("send-message-button");
const yearElement = document.getElementById("year");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

if (milestoneFilter) {
  milestoneFilter.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    milestoneCards.forEach((card) => {
      const shouldShow =
        selectedValue === "all" ||
        card.dataset.milestone === selectedValue;

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
}

if (contactForm && formNote && sendMessageButton) {
  const sendContactMessage = async () => {
    if (!contactForm.reportValidity()) {
      return;
    }

    const endpoint = contactForm.dataset.endpoint;
    const originalText = sendMessageButton.textContent;
    const formData = new FormData(contactForm);

    try {
      sendMessageButton.disabled = true;
      sendMessageButton.textContent = "Sending...";

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      contactForm.reset();
      formNote.textContent = "Your message has been sent successfully.";
    } catch (error) {
      formNote.textContent = "Something went wrong. Please try again.";
    } finally {
      sendMessageButton.disabled = false;
      sendMessageButton.textContent = originalText;
    }
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  sendMessageButton.addEventListener("click", sendContactMessage);
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

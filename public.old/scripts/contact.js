// ── Mobile nav toggle ──
function toggleMobileMenu() {
  document.getElementById("hamburger-btn").classList.toggle("open");
  document.getElementById("mobile-menu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("hamburger-btn").classList.remove("open");
  document.getElementById("mobile-menu").classList.remove("open");
}

// ── Scroll reveal for .fade-in elements ──
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));

// ── Contact form ──
const form = document.getElementById("contact-form");

if (form) {
  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector(".form-submit");
  const messageField = form.message;
  const messageCounter = document.getElementById("message-counter");
  const MAX_MESSAGE_LENGTH = 5000;

  const rules = {
    name: {
      validate: (v) => v.trim().length > 0 && v.trim().length <= 200,
      message: "Please enter your name (max 200 characters).",
    },
    email: {
      validate: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) && v.trim().length <= 254,
      message: "Please enter a valid email address.",
    },
    message: {
      validate: (v) =>
        v.trim().length > 0 && v.trim().length <= MAX_MESSAGE_LENGTH,
      message: "Please write a message (max 5000 characters).",
    },
  };

  function setFieldState(field, isValid) {
    const errorEl = document.getElementById(field.name + "-error");
    field.classList.toggle("invalid", !isValid);
    field.setAttribute("aria-invalid", String(!isValid));
    if (errorEl) {
      errorEl.textContent = isValid ? "" : rules[field.name].message;
      errorEl.classList.toggle("visible", !isValid);
      if (!isValid) {
        field.setAttribute("aria-describedby", errorEl.id);
      } else {
        field.removeAttribute("aria-describedby");
      }
    }
  }

  function validateField(field) {
    const rule = rules[field.name];
    if (!rule) return true;
    const isValid = rule.validate(field.value);
    setFieldState(field, isValid);
    return isValid;
  }

  function validateForm() {
    let allValid = true;
    ["name", "email", "message"].forEach((fieldName) => {
      const field = form[fieldName];
      if (!validateField(field)) allValid = false;
    });
    return allValid;
  }

  // Validate on blur, and clear the error as soon as the field becomes valid
  ["name", "email", "message"].forEach((fieldName) => {
    const field = form[fieldName];
    // field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.classList.contains("invalid")) validateField(field);
    });
  });

  // Live character counter for the message field
  function updateCounter() {
    const len = messageField.value.length;
    messageCounter.textContent = `${len} / ${MAX_MESSAGE_LENGTH}`;
    messageCounter.classList.toggle(
      "near-limit",
      len >= MAX_MESSAGE_LENGTH * 0.9 && len < MAX_MESSAGE_LENGTH
    );
    messageCounter.classList.toggle("at-limit", len >= MAX_MESSAGE_LENGTH);
  }

  messageField.addEventListener("input", updateCounter);
  updateCounter();

  function showStatus(kind, msg) {
    status.textContent = msg;
    status.className = "form-status visible " + kind;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";

    if (!validateForm()) {
      showStatus("error", "Please fix the highlighted fields before sending.");
      form.querySelector(".invalid")?.focus();
      return;
    }

    // Honeypot: if filled, silently pretend success and stop (bot trap)
    if (form.website.value.trim() !== "") {
      showStatus("success", "Thanks — your message has been sent.");
      form.reset();
      updateCounter();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    try {
      const res = await fetch("../scripts/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          role: form.role.value,
          organization: form.organization.value.trim(),
          message: form.message.value.trim(),
          website: form.website.value,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showStatus(
          "success",
          "Thanks — your message has been sent. We'll get back to you soon."
        );
        form.reset();
        updateCounter();
      } else {
        showStatus(
          "error",
          data.error ||
            "Something went wrong. Please try again or email us directly."
        );
      }
    } catch (err) {
      console.log(err);

      showStatus(
        "error",
        "Couldn't reach the server. Please try again or email info@notrackrun.eu directly."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });
}

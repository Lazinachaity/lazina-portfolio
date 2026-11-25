
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check required fields
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Check email format
        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
            return;
        }

        // Show success message
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";

        // Clear the form
        form.reset();

    });

});

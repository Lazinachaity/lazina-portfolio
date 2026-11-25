
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const feedback = document.querySelector(".form-feedback");

    if (!form || !feedback) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        feedback.textContent =
            "Your form has been validated successfully!";

        feedback.style.color = "green";

        form.reset();
    });
});

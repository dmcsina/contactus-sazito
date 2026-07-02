document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.hasAttribute("required") && input.value.trim() === "") {
                valid = false;
                input.style.borderColor = "#ff4d4f";
            } else {
                input.style.borderColor = "#FFD36A";
            }

        });

        if (!valid) {
            alert("لطفاً تمام فیلدهای الزامی را تکمیل کنید.");
            return;
        }

        alert("پیام شما با موفقیت ثبت شد.");

        form.reset();

    });

});
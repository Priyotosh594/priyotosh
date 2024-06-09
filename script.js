document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");

    yesButton.addEventListener("click", function () {
        message.textContent = "I knew that 😉 !!!";
        message.style.visibility = "visible";
    });

    noButton.addEventListener("mouseover", function () {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newTop = Math.random() * (containerRect.height - buttonRect.height);
        let newLeft = Math.random() * (containerRect.width - buttonRect.width);

        // Ensure the button stays within the container
        newTop = Math.max(0, Math.min(newTop, containerRect.height - buttonRect.height));
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width - buttonRect.width));

        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });
});

var contactForm = document.querySelector("form");

//window.localStorage.setItem("key", "value");

contactForm.addEventListener("submit", (event) => {
    let destnyEmail = document.getElementById("form-email");
    let from = document.getElementById("form-name");
    let messageContent = document.getElementById("form-message");

    sendMail(from.value, destnyEmail.value, messageContent.value);

    event.preventDefault();
});

function sendMail(name, email, messageContent) {
    let emailBody = `
    <h1>Harebell Contact</h1>
    <h3>Dear ${name},</h3>
    <p>This is your contact message: </p>
    <p>${messageContent}</p>
    <p><strong>Harebell</strong> thank you for your contact!!!</p>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: envVars.MY_EMAIL,
        Password: envVars.MY_PASSWORD,
        To: email,
        From: envVars.MY_EMAIL,
        Subject: "Harebell Contact",
        Body: emailBody,
    }).then((message) => alert(message));
}
